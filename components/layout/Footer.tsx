import React from 'react'
import {FaCopyright, FaRegCopyright} from 'react-icons/fa'
import StunnerArtsLogoLegacy  from '@/public/StunnerArtsLogoLegacy.svg' 
import StunnerArtsMarkModern from '@/public/StunnerArtsMarkModern-02.svg'
import Image from 'next/image'
type Props = {title: string}

function Footer(props: Props) {
    const {title} = (props)
  return (
    <footer  className="p-5 
    w-full   h-full
    flex flex-col flex-center justify-center  
 bg-gradient-to-r from-slate-900 to-slate-900 
 text-slate-100
">
    <a href="https://stunnerarts.wordpress.com/portfolio/" 
    target="_blank" rel="noreferrer">
        <Image src={StunnerArtsMarkModern} alt={'StunnerArt, LLC'}
        className=' mx-auto w-40'/>
    </a>
  
      <code className='flex flex-row p-1  mx-auto'>
        <FaRegCopyright className='m-1'/> 
        <span className='pl-2 '>{title}</span>
      </code>
  
  </footer>
  )
}

export default Footer