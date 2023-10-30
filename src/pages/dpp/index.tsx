import React from 'react'
import Content from '../Content'
import Image from 'next/image'
import Link from 'next/link'
import NoNavbar from '../NoNavbar'
import useResponsive from '@/components/useResponsive'
import Footer from '../Footer'


const pengurus = [
    {
        nama: "NURFAHMI",
        jabatan: "Ketua Umum",
        foto: "/avatar-blue.png"

    },
    {
        nama: "JEPIH NURHADI",
        jabatan: "Bendahara Umum",
        foto: "/avatar-blue.png"
    },
    {
        nama: "GIGIH GESANG",
        jabatan: "Sekretaris Jenderal",
        foto: "/avatar-blue.png"
    },
    {
        nama: "NURSANTI ADJI",
        jabatan: "Kepala BidangKesekretariatan",
        foto: "/avatar-blue.png"
    },
    {
        nama: "UNANG RUSNADI",
        jabatan: "Kepala Bidang Keanggotaan",
        foto: "/avatar-blue.png"
    },
    {
        nama: "DIAN WIBOWO",
        jabatan: "Kepala Bidang Keorganisasian",
        foto: "/avatar-blue.png"
    },
    {
        nama: "ADI WALUYO",
        jabatan: "Kepala Bidang Penelitian dan Pengembangan",
        foto: "/avatar-blue.png"
    },
    {
        nama: "ARDIAN RANGGA F",
        jabatan: "Kepala Bidang Pendidikan dan Pelatihan",
        foto: "/avatar-blue.png"
    },
    {
        nama:"D.P. ARSA",
        jabatan: "Kepala Bidang Sertifikasi dan Akreditasi",
        foto: "/avatar-blue.png"
    },
    {
        nama: "SOFIYAN HADI",
        jabatan: "Kepala Bidang Komunikasi Publik",
        foto: "/avatar-blue.png"
    },
    {
        nama: "DENY NUR ALAM",
        jabatan: "Kepala Bidang Hubungan Pemerintah",
        foto: "/avatar-blue.png"
    },
    {
        nama: "HERIYANTO",
        jabatan: "Kepala Bidang Hubungan Pemerintah",
        foto: "/avatar-blue.png"
    },
    {
        nama: "DENY NUR ALAM",
        jabatan: "Kepala Bidang Hubungan Internasional",
        foto: "/avatar-blue.png"
    },
    {
        nama: "DWIKI PRAYOGA MENZANO",
        jabatan: "Kepala Bidang Hubungan Pasar dan Mitra",
        foto: "/avatar-blue.png"
    },
    
]
function Dpp() {
    const {isDesktop, isTablet, isMobile, isOnlyMobile} = useResponsive()
    function Card(props:any){
        const {nama, jabatan, foto} = props
        const formattedNama = nama
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')

        const namaUrl = nama.toLowerCase().replace(/\s+/g, '-');
      return(
        <Link href={`/dpp/${namaUrl}`} >
        <div  className={`p-4 text-blue-500 flex flex-col gap-4 rounded-xl ${!isDesktop ? 'w-[150px] ' : 'w-[250px]'} justify-center items-center`}>
          <Image width={isDesktop ? 200 : 100} height={isDesktop ? 200 : 100} className={`${isDesktop ? 'w-[200px] h-[200px]' : 'w-[50px] h-[50px]'} object-contain`} src={foto} alt="" />
          <div className='text-center'>
            <h1 >{formattedNama}</h1>
            <h1 className='text-black'>{jabatan}</h1>
          </div>
        </div>
        </Link>
      )
    }
    
    return (
        <div  className={`${!isDesktop ? 'w-[800px]' : 'w-full'} flex flex-col flex-center`}>
                <NoNavbar>
        
        <div className='flex flex-col justify-center items-center w-full'>

            <h1 className='font-bold text-center text-xl'>Struktur Organisasi Dewan Pengurus Pusat</h1>


  

          <div className='w-full mt-10'>
            <div className='flex flex-col justify-center items-center w-full gap-20 '>
                <div>
                    <h1 className='font-bold text-center  mb-10'>Dewan Etik</h1>
                    <div className='flex flex-row gap-10'>
                    <Card nama="Ferdin Boy" jabatan="Ketua Dewan Etik" foto="/e.png"></Card>
                    <Card nama="Agus Supriyo" jabatan="Anggota Dewan Etik" foto="/avatar-blue.png"></Card>
                    <Card nama="Tri Cahyono Putro" jabatan="Anggota Dewan Etik" foto="/avatar-blue.png"></Card>
                    </div>

                </div>
                <div>
                    <h1 className='font-bold text-center  mb-10'>Dewan Pembina</h1>
                    <div className='flex flex-row gap-10'>
                    <Card nama="Muhammad Haydar" jabatan="Ketua Dewan Pembina" foto="/Foto Pengurus/heydar.jpg"></Card>
                    <Card nama="Adhik Iwan Sulistiyanto" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                    <Card nama="Ronie Ibrahim" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='font-bold text-center mb-10'>Ketua Umum</h1>
                  
                    <Card nama="Nurfahmi" jabatan="Ketua Umum" foto="/e.png"></Card>
            
                </div>
                <div className='flex flex-row justify-center gap-[200px] w-full'>
                    <div className={`flex flex-col gap-10 items-center `}>
                        <h1 className={`font-bold text-center `}>Sekretaris Jenderal</h1>
                        <Card nama="Gigih Gesang" jabatan="Sekretaris Jenderal" foto="/e.png"></Card>
                        <Card nama="Nursanti Adji" jabatan="Kesekretariatan" foto="/e.png"></Card>
                    </div>
                    <div className={`flex flex-col gap-10 items-center `}>
                        <h1 className={`font-bold text-center `}>Bendahara Umum</h1>
                    <Card nama="Jepih Nurhadi" jabatan="Bendahara Umum" foto="/e.png"></Card>
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='font-bold text-center  mb-10'>Komite Eksekutif</h1>
                    <div className={`flex flex-wrap gap-10 justify-center ${!isDesktop ? 'w-full' : 'w-full'}`}>
                    <Card nama="Muhammad Haydar" jabatan="Ketua Dewan Pembina" foto="/e.png"></Card>
                    <Card nama="Adhik Iwan Sulistiyanto" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                    <Card nama="Ronie Ibrahim" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                    <Card nama="Muhammad Haydar" jabatan="Ketua Dewan Pembina" foto="/e.png"></Card>
                    <Card nama="Adhik Iwan Sulistiyanto" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                    <Card nama="Ronie Ibrahim" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                    <Card nama="Muhammad Haydar" jabatan="Ketua Dewan Pembina" foto="/e.png"></Card>
                    <Card nama="Adhik Iwan Sulistiyanto" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='font-bold text-center  mb-10'>Ketua Bidang</h1>
                    <div className='flex flex-wrap gap-10 justify-center w-full'>
                    <Card nama="Unang Rusnadi" jabatan="Kabid. Keanggotaan" foto="/e.png"></Card>
                    <Card nama="Dian Wibowo" jabatan="Kabid. Keorganisasian" foto="/avatar-blue.png"></Card>
                    <Card nama="Ardian Rangga" jabatan="Kabid. Pendidikan dan Pelatihan" foto="/avatar-blue.png"></Card>
                    <Card nama="D. P. Arsa" jabatan="Kabid. Sertifikasi dan Akreditasi" foto="/e.png"></Card>
                    <Card nama="Sofyan Hadi" jabatan="Kabid. Komunikasi Publik" foto="/avatar-blue.png"></Card>
                    <Card nama="Heriyanto" jabatan="Kabid. Hubungan Pemerintah" foto="/avatar-blue.png"></Card>
                    <Card nama="Deny Nur Alam" jabatan="Kabid. Hubungan Internasional" foto="/e.png"></Card>
                    <Card nama="Dwiki Prayoga" jabatan="Kabid. Hubungan Pasar dan Mitra" foto="/avatar-blue.png"></Card>
                
                    </div>
                </div>
            </div>
        
          </div>
        </div>

      </NoNavbar>
      <Footer></Footer>
        </div>
  
    )
  }
  
  export default Dpp