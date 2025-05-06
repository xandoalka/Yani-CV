import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { AlbumCard } from '../components/AlbumCard'
import logo1 from '../assets/images/logo01.jpeg'
import logo2 from '../assets/images/logo02.jpeg'
import logo3 from '../assets/images/logo03.jpeg'
import art1 from '../assets/images/art01.jpeg'
import art2 from '../assets/images/art02.jpeg'
import gambar1 from '../assets/images/gambar01.jpeg'
import gambar2 from '../assets/images/gambar02.jpeg'
import gambar3 from '../assets/images/gambar03.jpeg'
import before from '../assets/images/before.jpeg'
import after from '../assets/images/after.jpeg'
import NovelCard from '../components/NovelCard'

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className='bg-primary min-h-screen mt-24 lg:mt-28'
    >
      <div className='flex flex-col items-center py-20 w-11/12 lg:w-3/4 mx-auto'>

        <span className='flex items-center'>
          <span className="h-4 w-4 bg-secondary"></span>
          <h1 className='ml-2 text-4xl font-bold'>Portfolio</h1>
        </span>

        {/* <p className='mt-10 lg:mt-16 text-center w-11/12  mx-auto font-montserrat leading-relaxed'>This is a compilation of projects that I've crafted while pursuing my journey to become a frontend developer. Each project serves as a testament to my progression in mastering the skills of creating engaging and functional user interfaces. From simple applications to more intricate endeavors, each one reflects my dedication and creativity in delivering innovative and effective solutions.</p> */}

        <section className='mt-14 lg:mt-20 w-full flex flex-col gap-14'>
          <div className='flex justify-center items-stretch gap-4 flex-wrap'>
            <NovelCard
              novelTitle={"Redupnya Matahari"}
              novelGenre={"Narasi Puitis"}
              novelDescription={`Yang tersisa hanyalah sunyi, kenangan, dan jejak langkah yang tak lagi searah. Di bawah langit malam, dengan hati yang remuk dan genggaman yang kosong, hanya ada satu kalimat yang terus bergema di benak—mengendap, dan tak pernah benar-benar hilang: “Bagaimana caranya aku bahagia, kalau setengah dari kebahagiaan itu hilang bersamamu?”`}
            />
            <NovelCard
              novelTitle={"Jatuh Untuk Bangun"}
              novelGenre={"Narasi Kasual"}
              novelDescription={`Tapi hidup kadang lucu. Ketika lo pikir semuanya udah tenang, ada orang yang dateng, bawa arus lagi di hati yang udah lama lo kunci rapat-rapat. Ini bukan sekedar tentang jatuh cinta. Ini tentang patah dan tumbuh. Tentang gimana lo nyembuhin diri sendiri, dan tentang lo... yang akhirnya sadar, sebanyak apapun luka yang udah bikin lo jatuh, lo tetap punya alasan buat terus bangkit.`}
            />

          </div>
          <AlbumCard
            Title={"desain logo"}
          >
            <img className='object-cover w-80 snap-center' src={logo1} alt="Afifa Store" />
            <img className='object-cover w-80 snap-center' src={logo2} alt="Dimyati Farm" />
            <img className='object-cover w-80 snap-center' src={logo3} alt="Rifard Fashion" />
          </AlbumCard>
          <AlbumCard
            Title={"commission art"}
          >
            <img className='object-cover w-80 snap-center max-h-96' src={art1} alt="mata" />
            <img className='object-cover w-80 snap-center max-h-96' src={gambar1} alt="" />
            <img className='object-cover w-80 snap-center max-h-96' src={gambar2} alt="" />
            <img className='object-cover w-80 snap-center max-h-96' src={gambar3} alt="" />
            <img className='object-cover w-80 snap-center max-h-96' src={art2} alt="lengan" />
          </AlbumCard>
          <AlbumCard
            Title={"photo editing"} withControls={false}>
            <div className='lg:grid grid-cols-2 gap-4 place-items-center w-full'>
              <div className='flex flex-col items-center'>
                <span className='text-center text-xl py-4 font-semibold'>Before</span>
                <img className='object-cover w-60 h-80' src={before} alt="before" />
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-center text-xl py-4 font-semibold'>After</span>
                <img className='object-cover w-60 h-80' src={after} alt="after" />
              </div>
            </div>
          </AlbumCard>
        </section>
      </div>
      <Footer></Footer>
    </motion.div >
  )
}

export default Blog