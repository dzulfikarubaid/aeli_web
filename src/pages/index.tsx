
import Head from 'next/head'
import RootLayout from './layout'
import CountUp from 'react-countup';
import indonesiaSvg from './indonesia.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { InstagramEmbed } from 'react-social-media-embed';
import MySwiper from './MySwiper';
import { useState } from 'react';
import Table  from './dpd/Table';
import Map from '../components/Map';
import dynamic from 'next/dynamic';
import Navbar from './components/Dropdown';
import Footer from './Footer';
import Prestasi from './Prestasi';
import Spotlight from './Spotlight';
import Link from 'next/link';
import useResponsive from '@/components/useResponsive';
const slides = [
  { img: 'foto-landing.png', judul: 'Slide 1', deskripsi: 'Lorem ipsum 1' },
  { img: 'image 1.png', judul: 'Slide 2', deskripsi: 'Lorem ipsum 2' },
  // Add more slides as needed
];
export default function Home() {
  const [dpd, setDPD] = useState(false)
  const {isMobile, isDesktop, isTablet} = useResponsive()
  return (
    <div className='w-full flex-col'>
    <Head>
      <title>Home - AELI</title>
    </Head>
    <Navbar></Navbar>
    <div className={`flex h-fit flex-col ${!isDesktop ? 'w-[800px]' : isTablet ? 'w-full' : 'w-full'}`}>
    <MySwiper></MySwiper>
    <div className='flex-col text-center items-center relative justify-between w-full p-10' style={{background:'#1B3B64'}}>
   <div className='text-center'>
    <h1 className='text-2xl text-white mb-4'>“Experience is not necessarily Experiential”</h1>
    <p className='text-white text-sm w-[500px] mx-auto'>Asosiasi Experiental Learning Indonesia (AELI) menerapkan metode Experiental Learning (EL) dalam memberikan layanan program peningkatan kapasitas SDM </p>
  </div>

    <div className='w-full justify-center items-center'>
    <img src="Group 31.png" alt="" />
    </div>
    </div>

    <Prestasi></Prestasi>
    
    {/* <div className='w-full h-fit bg-white px-10 text-blue-500 text-center'>
    <h1 className='font-bold text-[30px] mb-10'>AELI Dalam Angka</h1>
      <h1 className='font-semibold text-black text-xl'>Jumlah DPD AELI</h1>
      <CountUp end={15} duration={10} className='font-semibold  text-[50px]'/>
      <h1 className='font-semibold text-black text-xl'>Jumlah Anggota AELI</h1>
      <CountUp end={199} duration={20} className='font-semibold text-[50px]'></CountUp>
    </div> */}
    <div className='w-full h-fit bg-white px-10 text-center'>
    
    <h1 className='text-xl'>Peta Persebaran DPD AELI di Indonesia</h1>
    <Map></Map>
    <div className='flex flex-row justify-center gap-10 text-black mb-10'>
      <div className='flex flex-row gap-4 items-center'>
        <div className='w-[30px] h-[30px] rounded-full bg-[#1B3B64]'></div>
      <h1>Provinsi yang telah terdaftar pada AELI</h1>
      </div>
      <div className='flex flex-row gap-4 items-center '>
      <div className='w-[30px] h-[30px] rounded-full bg-gray-400 '></div>
      <h1>Provinsi yang belum terdaftar</h1>
      </div>
    </div>
    <Link href='/dpd' className={`py-2 px-4 rounded-full border-2 text-black ${dpd ? 'hidden' : ''}`}>Lihat Semua Daftar DPD AELI</Link>
    {
      dpd && <Table></Table>
    }
    </div>
   
    <Spotlight slides={slides}></Spotlight>
    <div className='flex flex-col justify-center items-center text-center py-20'>
    <h1 className='text-xl'>Social Media Update</h1>
    <div className={`gap-10 mt-10 flex flex-wrap ${!isDesktop ? 'w-[600px]' : 'w-full'} p-10 justify-center items-center`}>
  <InstagramEmbed url="https://www.instagram.com/p/Cx4gcr2PE1t/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" width={328} height={600}/>
   <InstagramEmbed url="https://www.instagram.com/reel/CxxAc73rDeh/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" width={328} height={600} />
    <InstagramEmbed url="https://www.instagram.com/reel/Cxrywt-LLy-/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" width={328} height={600}/>
</div>

    
    </div>
    
    <Footer></Footer>
   
    
     </div>
    </div>
  )
}
