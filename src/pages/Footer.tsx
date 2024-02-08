import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer(props: any) {
  let { className, logo } = props
  if(logo == null) {
    logo = "/logo-aeli2.png"
  }
  return (
    <div className={`${className} `}>
      <div className={`flex flex-col justify-between text-center ${className} bg-[#1B3B64] h-[536px] w-full p-20  text-white`}>
        <div className='flex flex-row justify-between '>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-row gap-4 items-center'>
              <img src={logo} className='w-[50px] h-[50px]' alt="" />
              <h1 className=' text-sm text-left '>
                Asosiasi <br />Experiential Learning <br />Indonesia
              </h1>
            </div>
            <div>
              <p className='w-[500px] text-left font-extralight'>
              JI. Merak Blok P No. 19 RT 015 /Rw 03, Cipinang Indah II Kel. Pondok Bambu, Kec. Duren Sawit, Jakarta Timur Telp 0813-8137-0076 email: dpp@aeli.or.id
              </p>
            </div>
          </div>

        </div>
        <div className='flex flex-col'>
          <div className='w-full border-t-2 border-gray-300'>
            <div className='flex flex-row justify-between py-4 items-center'>
              <h1>
                Copyright © 2023 AELI Archives. All Rights Reserved</h1>
              <div className='flex flex-row gap-4'>
                <Link target='_blank' href={'https://www.instagram.com/experiential.id/'}>
                <FaInstagram size={30}></FaInstagram>
                
                </Link>
                
                <Link  target='_blank' href={'https://www.youtube.com/@experientialchannel7421'}>
                <FaYoutube size={30}></FaYoutube>
                </Link>
              </div></div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Footer