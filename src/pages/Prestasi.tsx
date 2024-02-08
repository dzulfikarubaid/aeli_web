import React from 'react'

const Card = (props:any) =>{
    const {color, img, h1, p} = props
    return(
        
            <div style={{background:color}} className={`py-32 px-10 w-[400px] rounded-xl h-[400px] relative`}>
                <img className='absolute -top-40 left-0'  src={img} alt="" />
                <h1 className='text-xl font-bold mb-4'>{h1}</h1>
                <p className='text-justify'>{p}</p>
            </div>
    )
}
const Prestasi = () => {
  return (
    <div className='p-20'>
        <h1 className='text-center text-xl mb-40'>Our Achievment</h1>
        <div className='flex flex-wrap gap-16 justify-center'>
        <Card color={"#93BEFF"} img='pic1.png' h1='Pelatihan Berdaya Saing' p='AELI membuat program pelatihan bagi anggota baik Perorangan maupun Lembaga'></Card>
        <Card color={"#FFEE93"} img='pic2.png' h1='Tim Ahli Kementrian' p='AELI menjadi Tim Ahli Kementerian Pariwisata dalam merancang SKKNI Kepemanduan Outbound'></Card>
        <Card color="#FF9393" img='pic3.png' h1='Mitra BNSP dan LSP' p='AELI menjadi mitra BNSP dan LSP untuk melaksanakan sertifikasi Profesi Kepemanduan Outbound di Indonesia'></Card>
        </div>
       

    </div>
  )
}

export default Prestasi