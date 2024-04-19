import React, { useState } from 'react'
import { HiOutlineMinus } from 'react-icons/hi'
import { GoPlus } from 'react-icons/go'

function FAQs() {
    const [faqs, setFaqs] = useState([
        {
            question: "What is the EMPA Wizard, and how does it work?",
            answer: "The EMPA Wizard is an AI-powered web application designed to streamline the delivery of Environmental Market Positioning Analysis (EMPA) to clients in the clean-tech and sustainability sectors. It automates the entire EMPA process, from client acquisition to report generation, using advanced AI techniques such as natural language processing and machine learning."
        },
        {
            question: "What is the EMPA Wizard, and how does it work?",
            answer: "The EMPA Wizard is an AI-powered web application designed to streamline the delivery of Environmental Market Positioning Analysis (EMPA) to clients in the clean-tech and sustainability sectors. It automates the entire EMPA process, from client acquisition to report generation, using advanced AI techniques such as natural language processing and machine learning."
        },
        {
            question: "What is the EMPA Wizard, and how does it work?",
            answer: "The EMPA Wizard is an AI-powered web application designed to streamline the delivery of Environmental Market Positioning Analysis (EMPA) to clients in the clean-tech and sustainability sectors. It automates the entire EMPA process, from client acquisition to report generation, using advanced AI techniques such as natural language processing and machine learning."
        }
])
  return (
    <div className='bg-lemon w-full rounded-xl shadow-sm min-h-screen py-4 sm:py-4 pb-10'>
        <div className='flex justify-center items-center flex-col gap-2'>
                    <h2 className='font-Satoshi font-bold text-black-500 text-[40px] text-center sm:text-2xl'>Frequently Asked Questions</h2>
                    <p className='w-[50%] text-center font-sm text-black-40/60 leading-5 font-Satoshi font-normal sm:w-[90%] sm:text-[14px]'>
                        We address common questions about our comprehensive AI-powered web application designed to streamline the delivery of Environmental Market Positioning Analysis (EMPA).
                    </p>
        </div>
        <div className='flex flex-col gap-5 px-7 mt-10 sm:px-3 sm:gap-3'>
            {faqs.map((f, index) => {
                return <Accordian index={index} faq={f}/>
            })}
        </div>
    </div>
  )
}

export default FAQs




const Accordian = ({ faq, index }) => {
    const [accordion, setAccordion] = useState(index === 0 ? true : false);

    const toggleAccordion = () => {
        setAccordion(prevState => !prevState);
    };

    return (
        <div className='relative overflow-hidden rounded-lg border-[1px] border-grey shadow-sm px-5 py-5 transition-all ease-in duration-300 sm:px-3 sm:py-3'>
            <div className='flex justify-between items-center cursor-pointer' onClick={toggleAccordion}>
                <span className='flex justify-start items-center w-[80%] sm:w-[95%]'>
                    <h2 className={`${accordion ? 'text-black-500/95' : 'text-black-500/95'} font-Satoshi text-lg font-bold capitalize sm:text-sm leading-4`}>
                        {faq.question}
                    </h2>
                </span>
                {accordion ?
                    <HiOutlineMinus className={`text-2xl text-black-100 text-black-500/95`} />
                    :
                    <GoPlus className={`text-2xl text-black-100 text-black-500/95`} />
                }
            </div>
            <p className={`font-Satoshi text-base font-medium text-black-50 sm:text-sm text-black-100/80 ${accordion ? 'h-auto opacity-100 transition-all duration-300 mt-3' : 'h-0 opacity-0 overflow-hidden transition-all duration-300'}`}>
                <span className='text-black-500 font-bold'>A: </span>{faq.answer}
            </p>
        </div>
    );
};