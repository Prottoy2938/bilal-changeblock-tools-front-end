import React, { useEffect, useState } from 'react'
import ChatForm from '../components/ChatForm'
import AppHeader from '../components/AppHeader'
import { CB_POLICY, EAI, NEWSLETTER, PROJECT } from '../APis';
import Chat from '../components/Chat';
import NewsLetter from '../components/NewsLetter';

function AppsWithSameUI({ app, id }) {
  const [chats, setChats] = useState([])
  const [newsLetter, setNewsLetter] = useState([])
  const [files, setFiles] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const [thred_id, setThread_id] = useState(null)


  const startChatwithCard = (text) => {
    setLoading(true)
    setChats([text])
    callApis(text)
  }

  const getBody = (text) => {
    let data = {
      message: input? input : text
    }
    if(thred_id)
      data.thred_id = thred_id

      return data
  }

  const callApis = async(text = null) => {
    let body = getBody(text)
    let reply;

        try {
          if(id == 1)
            reply = NEWSLETTER(body)
          else if(id == 6)
            reply = await EAI(body)
          else if (id == 7)
            reply = await PROJECT(body)
          else if (id == 8)
            reply = await CB_POLICY(body)

        if(id == 1)
          setNewsLetter(prevChats => [...prevChats, reply])
        else{
          setThread_id(reply.thread_id)
          setChats(prevChats => [...prevChats, reply.response]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
  }

  const onSubmit = async (e) => {
      e?.preventDefault()
      if(loading)
        return;
      setChats([...chats, input])
      document.getElementById('textarea').value = ''
      setInput('')

      
      await callApis()
    

  }

  useEffect(()=>console.log(chats), [chats])

  return (
    <>
        <AppHeader chats={chats} app={app} startChatwithCard={startChatwithCard}/>
        {chats.length > 0 && <Chat chats={chats} app={app} id={id} loading={loading}/>}
        <ChatForm onSubmit={onSubmit} input={input} setInput={setInput} files={files} setFiles={setFiles} fileAccepted={false}/>
{/*  */}
    </>
  )
}

export default AppsWithSameUI
