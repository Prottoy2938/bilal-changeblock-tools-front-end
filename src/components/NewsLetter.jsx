import React, { useState } from 'react'
import AppHeader from './AppHeader'
import Chat from './Chat'
import ChatForm from './ChatForm'

function NewsLetter({ app, id }) {
    
  const [chats, setChats] = useState([])
  const [newsLetter, setNewsLetter] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const startChatwithCard = (text) => {
    setChats([text])
    // callApis(text)
  }

  const getBody = (text) => {
    let data = {
      message: input? input : text
    }

      return data
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
       <AppHeader chats={chats} app={app} startChatwithCard={startChatwithCard}/>
       {chats.length > 0 && <Chat chats={chats} app={app} id={id} loading={loading}/>}
        <ChatForm onSubmit={onSubmit} input={input} setInput={setInput} loading={loading}  fileAccepted={false}/>
    </div>
  )
}

export default NewsLetter
