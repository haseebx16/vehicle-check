import React from 'react'
import { font } from './font/font'

const Footer = () => {
  return (
    <div className={`${font.className} bg-black px-20 pb-20 pt-12 w-full`}>
        <div className='text-gray-100 flex space-x-4'>
            <p>Privacy</p>
            <p>Terms & Conditions</p>
            <p>Security</p>
            <p>Remove Your Data</p>
            <p>Refund Policy</p>
        </div>
    </div>
  )
}

export default Footer