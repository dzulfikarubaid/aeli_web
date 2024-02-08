
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import {signIn, signOut, useSession} from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import useResponsive from '@/components/useResponsive';
import { FaArrowDown, FaBurger, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import {FiMenu} from 'react-icons/fi';
import {IoMdClose} from 'react-icons/io';
interface DropdownItemProps {
    path: string;
    label: string;
    white?:boolean;
  }
function DropdownItem({ path, label, white}: DropdownItemProps) {
return (
    <li className={`py-2 ${!white ? ' text-white' : ' text-black'}`}>
    <Link href={path} className={`hover:border-b-4 ${!white ? ' hover:border-white' : ' hover:border-blue-900'}`}>{label}</Link>
    </li>
);
}

interface DropdownProps {
name: string;
options: DropdownItemProps[];
white?: boolean;
fix?: boolean;
}

function Dropdown({ name, options, white, fix }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [distanceFromLeft, setDistanceFromLeft] = useState(0)

  const handleMenuEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const distance = rect.left
    
    setDistanceFromLeft(distance);
    setIsOpen(true);
  };
  const handleMenuLeave = () =>{
    setIsOpen(false);
  }

  return (
    <div className="">
      <button
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleMenuLeave}
        className={`py-8 focus:outline-none flex flex-row items-center ${
          white ? 'text-black' : 'text-white'
        }`}
      >
        {name}
        <BiChevronDown
          size={20}
          className={`${isOpen && 'rotate-180'}`}
        />
      </button>
      {isOpen && (
        <div
          className={`w-full absolute flex flex-col ${
            !white ? 'bg-white/20' : 'bg-gray-50'
          } left-0 py-4 shadow-xl`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="relative">
            
            <ul style={{ marginLeft: `${distanceFromLeft}px`}}>
              {options.map((option, index) => (
                <DropdownItem
                  key={index}
                  path={option.path}
                  label={option.label}
                  white={white}
                />
              ))}
              
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}


  const dropdowns: { name: string, options: DropdownItemProps[] }[] = [
    {
      name: 'About',
      options: [
        { label: 'Asosiasi Experiential Learning Indonesia', path: '/aeli' },
        { label: 'Experiential Learning', path: '/el' },
        { label: 'Dewan Pengurus Pusat', path: '/dpp' },

      ],
    },
    
    
  ];

function Navbar(props:any){
  const [fix, setFix] = useState(false);
  const [white, setWhite] = useState(false);
  const {className} = props
  const {data}:any = useSession()
  function setWhited(){
    if(window.scrollY > 1200){
      setWhite(true);
    }else{
      setWhite(false);
    }
  }
  function setFixed(){
   
      if(window.scrollY > 1200){
        setFix(true);
      }else{
        setFix(false);
      }
  
    
   
  }
  useEffect(()=>{
    window.addEventListener('scroll', setFixed);
    window.addEventListener('scroll', setWhited);
  },[])
  const {push} = useRouter()
  function handleSignout(){
    signOut()

  }
  const [isBuka, setIsBuka] = useState(false)
  function toggle(){
    setIsBuka(!isBuka)
  }
  const [isOpen, setIsOpen] = useState(false);
  const {isDesktop, isTablet, isMobile, isOnlyMobile} = useResponsive()
    return(
      <div className=''>
        
        <div className={`fixed ${className} z-[9999] top-0 flex justify-between flex-row w-full text-black  px-10 items-center ${white ? 'bg-white' : ''}
        `} >
            <Link href="/" className=' flex flex-row gap-[calc(1/4*50px)] items-center justify-center py-6'>
                {!white ? <Image width={50} height={50} className='w-[50px] h-[50px]' src="/logo-aeli-putih.png" alt="" /> : <Image width={50} height={50} className='w-[50px] h-[50px]' src="/logo-aeli.png" alt="" />}
                <div>
                  <h1 className={`text-[calc(1/4*50px)] ${!white ? 'text-white' : 'text-black'}`}>Asosiasi<br/>Experiential Learning<br/> Indonesia</h1>

                </div>
            </Link>
            {
              isDesktop ? <>
              <div className={`flex flex-row gap-8 items-center ${!fix ? 'text-white' : 'text-black'}`}>
            {dropdowns.map((dropdown, index) => (
              <Dropdown key={index} name={dropdown.name} options={dropdown.options} white={white} fix={fix}/>
            ))}
              <Link href={'/activities'}>Activities</Link>
              <Link href={'/dpd'}>DPD</Link>
              <Link href={'/members'}>Members</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/news">News</Link>
            </div>
            <div>
            {
              data ?
              <div className='flex flex-row gap-4 items-center'>
                <Link className={`${white ? 'text-black' : 'text-white'}`} href={`/profile/${data.user.name}`}>{data.user.name}</Link>
                <button className={` py-2 rounded-full border-2 px-4 ${!white ? 'text-white border-white' : 'text-black border-black'}`}  onClick={handleSignout}>Sign Out</button>
              </div>
              :
              <button className={` py-2 rounded-full border-2 px-4 ${!white ? 'text-white border-white' : 'text-black border-black'}`} onClick={()=>signIn()}>Sign In</button>
            }
            </div>
            </> 
            :
            isOpen == false ?
            <button onClick={()=>{
              setIsOpen(!isOpen)
            }} className={`${!white ? 'text-white' : 'text-black'}`}>
              <FiMenu size={45}></FiMenu>
              
            </button>
            :
            <div className='text-center top-0 left-0 bg-gray-900 w-full flex-col h-[2500px] fixed z-[99999]'>
            <div className='flex text-white flex-row justify-between items-center p-10'>
            <Link href={'/'} className='flex gap-6 items-center'>
            <Image width={70} height={70} className='w-[50px] h-[50px]' src="/logo-aeli-putih.png" alt=""></Image>
            <h1 className='text-3xl'>AELI</h1></Link>
            <button onClick={()=>{
              setIsOpen(!isOpen)
            }} >
              <IoMdClose size={45}></IoMdClose>
            </button></div>
            <div className='flex flex-col gap-10 text-white text-3xl'>
            <button onClick={toggle} className='mt-10 flex flex-row items-center gap-4 justify-center w-full' ><h1>About</h1>{!isBuka ? <FaChevronDown size={25}></FaChevronDown> : <FaChevronUp size={25}></FaChevronUp>}</button>
            {
              isBuka && 
              <div className='flex flex-col gap-2'>
                <Link className='bg-gray-700 py-2' href={'/aeli'}>AELI</Link>

                <Link className='bg-gray-700 py-2'  href={'/dpp'}>DPP</Link>
              </div>
                
                }
            <Link href={'/activities'} className={`hover:border-b-white`}>
              Activities
              </Link>
              <Link href={'/dpd'}>DPD</Link>
              <Link href={'/members'}>Members</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/news">News</Link></div>
              
              </div>
              
            
            }
        </div>
        
      </div>
        
        
    )
}
export default Navbar;
