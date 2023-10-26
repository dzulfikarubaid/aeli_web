import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Navbar from './navbar';
import { useRouter } from 'next/router';
import useResponsive from '@/components/useResponsive';
function news() {
  const [value, setValue] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('/api/getnews')
      .then((res) => {
        setLoading(false)
        console.log(res.data.data);
        setValue(res.data.data);
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Mengambil nilai parameter pencarian dari URL jika ada
    const querySearch = router.query.search || '';
    setSearchInput(querySearch.toString());

    // Filter data based on searchInput
    const filteredResults = value.filter(({ title }:any) =>
      title.toLowerCase().includes(querySearch.toString().toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [router.query.search, value]);

  const formatTimeLeft = (createdAt: string) => {
    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const timeLeftMillis = now.getTime() - createdAtDate.getTime();
    const secondsLeft = Math.floor(timeLeftMillis / 1000);

    if (secondsLeft < 60) {
      return 'kurang dari 1 menit yang lalu';
    } else if (secondsLeft < 3600) {
      const minutes = Math.floor(secondsLeft / 60);
      return `${minutes} ${minutes > 1 ? 'menit' : 'menit'} yang lalu`;
    } else if (secondsLeft < 86400) {
      const hours = Math.floor(secondsLeft / 3600);
      return `${hours} ${hours > 1 ? 'jam' : 'jam'} yang lalu`;
    } else {
      const options:any = { year: 'numeric', month: 'long', day: 'numeric' };
      return createdAtDate.toLocaleDateString('id-ID', options);
    }
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true)
    // Membuat URL dengan parameter pencarian dan mengarahkan pengguna
    const url = `/news?search=${searchInput}`;
    router.push(url);
    setLoading(false)
  };
  const nameCount:any = {};

// Menghitung jumlah item dengan nama yang sama
filteredData.forEach((item) => {
  const { name } = item;
  if (nameCount[name]) {
    nameCount[name] += 1;
  } else {
    nameCount[name] = 1;
  }
});
const {isDesktop} = useResponsive()
return (
  <div className='flex flex-col w-full justify-center items-center'>
    <Navbar
      searchInput={searchInput}
      setSearchInput={setSearchInput}

      handleSearchSubmit={handleSearchSubmit}
    />

<div className={`flex flex-col px-6 py-10 gap-10 justify-center items-center ${!isDesktop ? '' : 'w-full'}`}>
  <section className={`flex flex-wrap gap-4 justify-center items-center `}>
    {loading ? (
      null
    ) : filteredData.length > 0 ? (
      filteredData.map((item: any, index) => (
        <div key={item.id} className={`flex flex-col ${!isDesktop ? 'w-full' : 'w-[500px]'} border-[1px] rounded-xl h-fit gap-4 p-4`}>
          <div className={`flex flex-row gap-1 h-6 ${!isDesktop ? 'text-[12px]' : 'text-md'} `}>
            <Link className='hover:border-b hover:border-black w-fit' href={`/profile/${item.name}`}>
              {item.name}
            </Link>
            <p>•</p>
            <Link href={`/news/${item.id}`}>{formatTimeLeft(item.create_at)}</Link>
          </div>
          <Link href={`/news/${item.id}`} className=' flex flex-row justify-between gap-4'>
            <div>
              <h1 className={`font-bold ${!isDesktop ? 'text-[16px]' : 'text-2xl'} `}>{item.title}</h1>
              <div
                className={`font-light ${!isDesktop ? 'text-[12px]' : 'text-xl'} `}
                dangerouslySetInnerHTML={{
                  __html:
                    item.content.length > 100
                      ? item.content.substring(0, 100).trim().replace(/\s+/g, ' ') + '...'
                      : item.content
                }}
              />
            </div>
            {
              !item.image ? 
              <img className='w-[100px] h-[100px] object-scale-down' src={'/logo-aeli.png'} alt='' />:
              <img className='w-[100px] h-[100px] object-scale-down' src={item.image} alt='' />
            }
          </Link>
        </div>
      ))
    ) : (
      <div>Berita tidak ditemukan</div>
    )}
  </section>
</div>

  </div>
);
}

export default news;
