import React, { useEffect, useState } from 'react'
import ChatForm from '../components/ChatForm'
import AppHeader from '../components/AppHeader'
import { CB_POLICY, EAI, NEWSLETTER, PROJECT, RECOMMENDER, RECOMMENDERFile, RISK, RISKFILE } from '../APis';
import Chat from '../components/Chat';
import FileUploader from '../components/FileUploader';


function AppsWithSameUI2({ app, id }) {
  const [chats, setChats] = useState([])
  const [newsLetter, setNewsLetter] = useState([])
  const [files, setFiles] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const [thred_id, setThread_id] = useState(null)


  const callApis = async(text = null) => {
    setLoading(true)
    let reply;

        try {
          if(id == 9)
            reply = await RISK(text)
          else if(id == 10)
            reply = await RECOMMENDER(text)
        if(reply)
          setChats([input, reply]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
  }

  const onSubmit = async (e) => {
      e?.preventDefault()
      if(loading)
        return;
      setChats([input])
      document.getElementById('textarea').value = ''

      
      await callApis(input)
    

  }

  const fileUpload = async () => {
    if (files.length <= 0)
        return;

    const readFile = (file) => {
        const reader = new FileReader();
        reader.onload = async (event) => {
            const content = event.target.result;
            // let textContent;

            // if (file.name.endsWith('.txt')) {
            //     textContent = content;
            // } else if (file.name.endsWith('.docx')) {
            //     textContent = await extractTextFromDoc(content);
            // } else if (file.name.endsWith('.pdf')) {
            //     textContent = await extractTextFromPDF(content);
            // } else {
            //     console.log('Unsupported file format');
            //     return;
            // }

            // console.log('Text content:', textContent);
            // Do something with the text content
            setChats([input]);
            callApis(content);
        };
        reader.readAsArrayBuffer(file);
    };

    readFile(files[0]);
};




  useEffect(()=>{
    fileUpload()
  }, [files])

  return (
    <>
      <div className='flex justify-start flex-col w-full gap-5'>
        <FileUploader files={files} setFiles={setFiles}/>
        {chats.length > 0 && <Chat chats={chats} app={app} id={id} loading={loading}/>}
      </div>
        <ChatForm onSubmit={onSubmit} input={input} setInput={setInput} fileAccepted={false}/>
{/*  */}
    </>
  )
}

export default AppsWithSameUI2
