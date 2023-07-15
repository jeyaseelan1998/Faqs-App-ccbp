import React from 'react'
import './index.css'
import FaqItem from '../FaqItem'

const Faqs = ({faqsList}) => {
  return (
    <div className='app-container'>
        <div className='faqs-container'>
            <h1 className='main-heading'>Faqs</h1>
            <ul className='faqs-lists'>
                {
                  faqsList.map(item => <FaqItem key={item.id} faqDetails={item}/>)
                }
            </ul>
        </div>
    </div>
  )
}

export default Faqs