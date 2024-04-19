import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function TypingEffect({ text }) {
    const [typedText, setTypedText] = useState('');
  
    useEffect(() => {
      const typingInterval = 10; // milliseconds
      let currentIndex = 0;
  
      const typingTimer = setInterval(() => {
        setTypedText((prevTypedText) => {
          if (currentIndex === text?.length-1) {
            clearInterval(typingTimer); // Stop typing when all characters are typed
          }
          return prevTypedText + text[currentIndex++];
        });
      }, typingInterval);
  
      return () => clearInterval(typingTimer); // Cleanup function to clear the interval
  
    }, [text]); // Execute this effect whenever the 'text' prop changes
  
    return <div className='flex flex-col gap-2.5 text-left text-base text-black-500 leading-5 font-Satoshi font-normal my-1 w-[95%] sm:text-sm'>
        <Markdown remarkPlugins={[remarkGfm]}>{typedText}</Markdown>
    </div>
}

export default TypingEffect
