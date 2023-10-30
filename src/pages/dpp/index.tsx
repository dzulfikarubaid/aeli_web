import React from 'react'
import Content from '../Content'
import Image from 'next/image'
import Dpp from '../../dpp'
import Link from 'next/link'
import NoNavbar from '../NoNavbar'


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
function dpp() {
    function Card(props:any){
        const {nama, jabatan, foto} = props
        const formattedNama = nama
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')

        const namaUrl = nama.toLowerCase().replace(/\s+/g, '-');
      return(
        <Link href={`/dpp/${namaUrl}`} >
        <div  className=' p-4 text-blue-500 flex flex-col gap-4 rounded-xl w-[250px] justify-center items-center'>
          <Image width={200} height={200} className=' w-[200px] h-[200px] object-contain' src={foto} alt="" />
          <div className='text-center'>
            <h1 >{formattedNama}</h1>
            <h1 className='text-black'>{jabatan}</h1>
          </div>
        </div>
        </Link>
      )
    }
    return (
      <NoNavbar>
        
        <div className=''>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-center text-xl'>Struktur Organisasi Dewan Pengurus Pusat</h1>
        <Image className='my-10' alt='' width={800} height={400} src={'/org.jpg'}></Image>
        </div>
        <h1 className='font-bold text-center text-xl'>Daftar Dewan Pengurus Pusat</h1>
        <div className='flex flex-wrap w-full gap-10 justify-center py-10'>

          <div className='w-full'>
            <div className='flex flex-col justify-center items-center w-full gap-20 '>
                <div>
                    <h1 className='font-bold text-center'>Dewan Etik</h1>
                    <div className='flex flex-row gap-10'>
                    <Card nama="Ferdin Boy" jabatan="Ketua Dewan Etik" foto="/e.png"></Card>
                    <Card nama="Agus Supriyo" jabatan="Anggota Dewan Etik" foto="/avatar-blue.png"></Card>
                    <Card nama="Tri Cahyono Putro" jabatan="Anggota Dewan Etik" foto="/avatar-blue.png"></Card>
                    </div>

                </div>
                <div>
                    <h1 className='font-bold text-center'>Dewan Pembina</h1>
                    <div className='flex flex-row gap-10'>
                    <Card nama="Muhammad Haydar" jabatan="Ketua Dewan Pembina" foto="/Foto Pengurus/heydar.jpg"></Card>
                    <Card nama="Adhik Iwan Sulistiyanto" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                    <Card nama="Ronie Ibrahim" jabatan="Anggota Dewan Pembina" foto="/avatar-blue.png"></Card>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-center'>Ketua Umum</h1>
                    <div className='flex flex-row gap-10'>
                    <Card nama="Nurfahmi" jabatan="Ketua Umum" foto="/e.png"></Card>
                    </div>
                </div>
                <div className='flex flex-row justify-between w-3/4'>
                    <div className='flex flex-col gap-10'>
                        <Card nama="Gigih Gesang" jabatan="Sekretaris Jenderal" foto="/e.png"></Card>
                        <Card nama="Nursanti Adji" jabatan="Kesekretariatan" foto="/e.png"></Card>
                    </div>
                    <div>
                    <Card nama="Jepih Nurhadi" jabatan="Bendahara Umum" foto="/e.png"></Card>
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='font-bold text-center'>Komite Eksekutif</h1>
                    <div className='flex flex-wrap gap-10 justify-center w-3/4'>
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
                    <h1 className='font-bold text-center'>Ketua Bidang</h1>
                    <div className='flex flex-wrap gap-10 justify-center w-3/4'>
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
        </div>
      </NoNavbar>
    )
  }
  
  export default dpp