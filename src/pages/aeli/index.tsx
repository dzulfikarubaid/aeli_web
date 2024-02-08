import React, { useEffect, useState } from 'react'
import Content from '../Content'
import NoNavbar from '../NoNavbar'
import MiniNavbar from './navbar'
import Headroom from 'react-headroom'
import Link from 'next/link'
import Image from 'next/image'
import NavbarWhite from '../components/Navbar'
import { FaArchway, FaEye } from 'react-icons/fa'
import { PiEye, PiTarget } from 'react-icons/pi'
import Footer from '../Footer'
import useResponsive from '@/components/useResponsive'
function Index() {
  // HistoryFlow.js
  const { isDesktop, isMobile, isTablet, isOnlyMobile } = useResponsive()
  const HistoryStep = ({ year, event }: any) => {
    return (
      <div className="flex flex-col items-center mb-8 ">
        <div className="w-16 h-16 bg-white rounded-full mb-4"></div>
        <p className="text-white font-semibold">{year}</p>
        <p className="text-white">{event}</p>
      </div>
    );
  };

  const historyData = [
    { year: "9 Juni 2007", event: 'AELI dideklarasikan pada bersamaan dengan penyelenggaraan Festival Outbound Nasional di Tangerang Selatan, Banten.' },
    { year: "2007-2010", event: 'Ketua Umum Enda Mulyanto AELI mendirikan DPD Pertama di Jawa Tengah' },
    {
      year: "2010-2013", event: 'Ketua Umum Robby Seahan AELI mendirikan DPD Jatim, Bali & Sumut AELI menjadi Tim Ahli Kemenpar dalam merancang SKKNI Kepemanduan Outbound dan disahkan dengan Kepmenakertrans Nomor KEP.329/MEN/XII / 2011' },
  { year: "2013-2016", event: 'Ketua Umum Kresno Wiyoso AELI mendirikan 11 DPD baru yaitu Sumbar, Sumsel, Kepri, Riau, Bengkulu, Lampung, DKI Jakarta, Banteng, Jabar, DIY & NTB Melaksanakan 9 kali Uji Kompetensi Kepemanduan Outbound' },
  { year: "2016-2019", event: "Ketua Umum Kresno Wiyoso, Ketua Harian Nurfahmi AELI mendirikan 2 DPD Baru yaitu Kaltim & Sulsel (total 17 DPD) 1 Dekade AELI Pengembangan Organisasi meluaskan kiprah EL di Indonesia" },
    { year: "2019-2022", event: 'Ketua Umum Nurfahmi Penguatan Organisasi semasa Covid 19 Inovasi program Virtual' },
    { year: "2022-2025", event: 'Ketua Umum Nurfahmi Capacity Building Program Campaign' },
  ];

  const HistoryFlow = () => {
    return (
     
        <div className="flex flex-wrap p-10 justify-center items-center">
          {historyData.map((step, index) => (
            <HistoryStep key={index} {...step} />
          ))}
        </div>
    );
  };
  function Title(props: any) {
    const { id, children } = props
    return (
      <h1 id={id} className='font-bold text-center text-xl p-10'>
        {children}</h1>
    )
  }
  const [fix, setFix] = useState(false)
  function setFixed() {

    if (window.scrollY > 120) {
      setFix(true);
    } else {
      setFix(false);
    }



  }
  useEffect(() => {
    window.addEventListener('scroll', setFixed);
  }, [])
  return (

    <div id='top' className={`${!isDesktop ? 'w-[800px]' : 'w-full'} flex flex-col flex-center`}>
      <NoNavbar className='px-20  flex justify-center flex-col items-center'>
        <div className='flex flex-row gap-10 items-center justify-center '>
          <Image width={300} height={400} src="/Foto Pengurus/Nurfahmi.png" alt="" />
          <div className='text-left '>
            <h1 className='text-3xl mb-6 font-bold'>Nurfahmi</h1>
            <p>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa magnam possimus labore voluptas quos at alias nulla nam, adipisci dignissimos doloremque esse nostrum, aspernatur harum vel. Aliquid, facere debitis.&quot;</p>
          </div>
        </div>
        <div className='flex flex-col gap-10 w-full'>
          <div className='text-center flex flex-col justify-center items-center'>
            <PiEye size={50}></PiEye>
            <h1 className='font-bold text-3xl text-center text-blue-900'>Vision</h1></div>
          <p className=''>
            Menjadi wadah dan mitra yang berkualitas bagi seluruh lembaga atau perorangan pengguna metode pelatihan berbasis pengalaman di Indonesia dan bertanggung jawab terhadap pengembangan kualitas manusia Indonesia
          </p>
          <div className='text-center flex flex-col justify-center items-center'>
            <PiTarget size={50}></PiTarget>
            <h1 className='font-bold text-3xl text-center text-blue-900 '>Mission</h1></div>
          <p className=''>
            ● Memasyarakatkan pelatihan berbasis pengalaman kepada masyarakat Indonesia
            <br />
            ● Meningkatkan kualitas  pelatihan dan pendidikan berbasis pengalaman, sehingga menjadi metode pelatihan yang efektif dan diakui di Indonesia
            <br />
            ● Meningkatkan kualitas pelaksana pelatihan berbasis pengalaman sehingga menjadi pelaksana pelatihan yang bertanggung jawab terhadap pengembangan manusia Indonesia
          </p></div>
        <div className=' my-10 flex flex-col items-center bg-gray-900 p-10' >
          <h1 className='text-white font-bold'>Our Journey</h1>

            <HistoryFlow />
      
        </div>
        <div >
  
        <div className='flex flex-row gap-10'>
        <h1 className='text-3xl w-[300px]'>Sejarah Pembentukan</h1>
        <h1 className='text-justify'>
        <strong className='font-bold'>Masuknya Outward Bound ke Indonesia
          </strong>
          <br />
          Sejarah AELI tidak bisa dipisahkan dari masuknya Outward Bound ke Indonesia. Secara resmi Outward Bound Indonesia (OBI) yang merupakan lembaga pendidikan informal didirikan pada tahun 1990, oleh Djoko Kusumowidagdo, dan segera mendapat respon positif dari masyarakat. Konsep OBI dianggap sebagai lahan bisnis baru dan segera diikuti oleh banyak lembaga serupa. Salah satu lembaga sengaja menghilangkan kata “ward” hingga terciptalah salah kaprah istilah Outbound sampai sekarang. Sepanjang dekade 1990-an, lembaga/organisasi pendidikan yang menggunakan medium “aktivitas luar ruang” tumbuh dengan cepat.</h1>
        </div>
        
        <p >
          
          
          <br /><br />
          Terdapat banyak istilah yang digunakan untuk menyebutkan aktivitas luar ruang, seperti adventure, outdoor training, dan lain sebagainya. Berbagai istilah tersebut kemudian dikerucutkan dan istilah outbound terpilih untuk diadopsi. Selain menggunakan medium luar ruang pendidikan, jenis ini juga menggunakan media “game”. Salah satu aktivitas yang kemudian melekat erat dan identik dengan istilah outbound adalah flying fox.
          <br /><br />
          Kesadaran Pembentukan Wadah Experiential Learning
          Pada awal tahun 2000-an, para pelaku pendidikan mulai sadar untuk menata diri. Saat itu sudah ada ide untuk membentuk wadah bagi aktivitas mereka, namun belum bisa terwujud dikarenakan banyaknya variasi aktivitas dan metode yang digunakan. Pada akhirnya, upaya pembentukan wadah tersebut kembali digagas.
          <br /><br />
          Pembentukan wadah pelaku pendidikan dimulai dengan adanya kesepakatan bahwa meskipun banyak cara yang mereka gunakan, namun metodenya tetap sama, yakni experiential education (EE). Akan tetapi, dikarenakan EE yang digagas oleh John Dewey, sudah menjadi nama lembaga internasional (AEE, Association for Experiential Education), maka para penggagas wadah ini pun mengusulkan penggunaan sebutan  Experiential Learning (EL).
          <br /><br />
          <strong className='font-bold'>Inisiasi Pembentukan AELI</strong>
          <br />
          Pertemuan informal pertama untuk menggagas pembentukan wadah diadakan di Tanah Tingal pada bulan November 2006 dan dilanjutkan dengan pertemuan berikutnya di Pancawati. Pada pertemuan ketiga di Pasir Randu, dibentuklah “Panitia Tujuh” yang terdiri dari:
          <br /><br />
          ●	Enda Mulyanto (Pelopor Adventure Camp, PAC),
          <br />
          ●	Robby Seahan (OBET Nusantara),
          <br />
          ●	Rovino (Ono, Kampoeng Pasir Randu),
          <br />
          ●	Kresno Wiyoso (Inong, Tanah Tingal),
          <br />
          ●	Yuniga Fernando (Ega, Pancawati Outdoor Training),
          <br />
          ●	Soelistyo Winarno (Soel, Praktisi EL) dan
          <br />
          ●	F. Rahardi (Wartawan).
          <br /><br />
          Panitia Tujuh selanjutnya mengadakan persiapan administratif (notaris, dll) dan rencana deklarasi. Tanggal 24 Januari 2007 beberapa lembaga penyelenggara outdoor training sepakat untuk membentuk asosiasi dengan nama “Indonesian Experiential Learning Association” (IELA) atau “Asosiasi Experiential Learning Indonesia” (AELI).
          <br /><br />
          <strong className='font-bold'>Penggunaan Istilah Experiential Learning</strong>
          <br />
          Experiential Learning sendiri kemudian disepakati sebagai istilah untuk mewadahi pengertian “Pembelajaran berbasis pengalaman”. Penggunaan nama Experiential Learning disepakati, setelah melalui diskusi panjang yang cukup alot, sebab ada pula gagasan agar menggunakan nama “Outbound”. Namun akhirnya nama Experiential Learning dipilih, karena semua lembaga penyelenggara outdoor training sebenarnya menerapkan metodologi pembelajaran ini.
          <br /><br />
          Dengan memilih nama Experiential Learning, anggota asosiasi menjadi tidak hanya terbatas pada lembaga penyelenggara outdoor training, melainkan juga para lembaga pendidikan formal (sekolah, perguruan tinggi), para pengajar (guru, dosen), maupun lembaga-lembaga pendidikan non formal di luar outdoor training. Asosiasi ini bahkan juga terbuka bagi siapa saja yang berminat terhadap metode pembelajaran berbasis pengalaman.
          <br /><br />
          <strong className='font-bold'>AELI Berdiri Secara Resmi
          </strong>
          <br />
          Setelah secara administratif AELI didaftarkan ke notaris pada 24 April 2007 (Akta Pendirian No. 7 Tgl. 24 April 2007, Notaris HARYANTI SUSANTO TANUBRATA, S.H, M.Kn. Jakarta Selatan), kemudian pada tanggal 9 Juni 2007 dikuatkan dengan deklarasi pembentukannya di Tanah Tingal, Jombang, Ciputat, Tangerang Selatan, Banten.
          <br /><br />
          Deklarasi ini dilakukan bersamaan dengan penyelenggaraan Festival Outbound Nasional I (FON I). Acara FON I sendiri sudah berlangsung sejak tanggal 8 Juni dengan berbagai aktivitas, mulai dari pelatihan, seminar, dan pameran. Setelah dideklarasikan, para deklarator melanjutkan acara dengan mengadakan Musyawarah Nasional I (Munas I) untuk membentuk kepengurusan, memilih Ketua, dan merancang program kerja, termasuk menentukan tempat sekretariat.
        </p>
        <Title id='program'>Program</Title>
        <p className='pt-4'>
          Konsep Experiential Learning yang banyak dikenal orang adalah program capacity building, character building, dan competency building. Konsep tersebut kemudian semakin berkembang menjadi berbagai progam dalam bentuk gathering, outing, wisata games based learning, dan lain sebagainya. Untuk mencapai Visi dan menjalankan Misi yang ditetapkan, AELI memiliki program-program pengembangan terkait Experiential Learning antara lain:
          <br /><br />

        </p>
        <div className='flex flex-row justify-between items-center r'>
        <p className='w-[600px]'> <strong className='font-bold'>Program peningkatan kapasitas anggota perorangan (Praktisi)</strong><br />
          ●	Certified Training “Basic Facilitator Experiential Learning”
          <br />
          ●	Certified Training “Advance Facilitator Experiential Learning”
          <br />
          ●	Certified Training “Programmer Experiential Learning”
          <br />
          ●	Sertifikasi Kompetensi Kerja Nasional Indonesia (SKKNI) Facilitator Experiential Learning bekerjasama dengan LSP
          <br /><br />
          <strong className='font-bold'>Program peningkatan kapasitas anggota lembaga (Provider)</strong><br />
          ●	Certified Training “Professional Provider Experiential Learning”
          <br />
          ●	Accredited Member of AELI
          <br />
          ●	Accredited Experiential Program of AELI Member
          <br />
          ●	Pendampingan Desa Wisata untuk menjadi Penyedia Layanan Wisata Experiential</p>
        
        </div>
        <div className='flex flex-col justify-center items-center w-full'>
        <Title id='sertifikasi'>Sertifikasi</Title>
        <Image width={400} height={200} src={'/bnsp-logo.png'} alt=''></Image>
        <p className='pt-4'>
          AELI telah menjadi mitra BNSP dan LSP untuk mengadakan Sertifikasi Uji Kompetensi  Kepemanduan Outbound sejak tahun 2014. Daftar pelaksanaan Sertifikasi Uji Kompetensi Kepemanduan Outbound adalah sebagai berikut :
         
        </p></div>
        
        <div className='flex flex-wrap gap-6 justify-center w-full items-center'>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Tebet, Senin, 17 November 2014 (para asesor)</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Cibubur, Selasa, 24 Maret 2015</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Pancawati, Selasa, April 2015</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Boyolali, Selasa, 26 Mei 2015</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Denpasar, Rabu, 25 November 2015</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Kaliurang, Selasa, 1 Desember 2015</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Cibubur, Minggu, 6 Desember 2015</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Panjang Jiwo, Rabu, 16 Desember 2015</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Lembang, Senin, 10 Mei 2016</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Denpasar, Rabu-Kamis, 2-3 Agustus 2017</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Lubana Sengkol, Selasa-Rabu, 15-16 Agustus 2017</h1>
        <h1 className='bg-gray-900 rounded-full py-3 px-3 text-white mt-4 w-[500px] text-center' >Makassar, Minggu, 20 Agustus 2017</h1>
        </div>
  
       </div>
         
      </NoNavbar>
      <Footer></Footer></div>
  )
}

export default Index