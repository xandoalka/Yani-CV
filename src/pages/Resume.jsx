import { motion } from 'framer-motion'
import ResumeCard from '../components/ResumeCard'
import Footer from '../components/Footer'
import ProfesionalCard from '../components/ProfesionalCard'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className='bg-primary min-h-screen mt-24 lg:mt-28'
    >

      <div className='flex flex-col items-center py-20 w-11/12 lg:w-[48%] mx-auto'>

        <span className='flex items-center'>
          <span className="h-5 w-5 lg:h-4 lg:w-4 bg-secondary"></span>
          <h1 className='ml-2 text-4xl font-bold'>Resume</h1>
        </span>

         <section className='mt-20 w-full flex flex-col gap-10 lg:gap-14'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Work Experience</h2>
            <a className="w-40 text-center uppercase text-sm font-semibold font-montserrat py-2 border border-secondary bg-secondary rounded-3xl text-white transition-all duration-200 ease-linear hover:bg-white hover:text-secondary" href="#">Download CV</a>
          </div>

            <ResumeCard
              years="2024"
              schoolNameOrJobPosition="Cashier and Warehouse Checker"
              majorOrCompanyName="Clarissa Grocery Store"
              location="Tangerang, Banten"
              description="Toko retail sembako yang melayani penjualan grosir dan eceran untuk berbagai kebutuhan rumah tangga maupun usaha. Melayani transaksi tunai dan non-tunai, serta menyediakan layanan pemesanan dan pengantaran barang ke pelanggan."
            ></ResumeCard>

         </section>


         <section className='mt-20 w-full flex flex-col gap-10 lg:gap-14'>
          <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>Education</h2>
          </div>

          <ResumeCard
            years="2021 - 2024"
            schoolNameOrJobPosition="SMAN 26 Kabupaten Tanggerang"
            majorOrCompanyName="Senior High School"
            location="Tangerang, Banten"
            description="Sekolah menengah atas terakreditasi A dan berstatus Sekolah Adiwiyata. Berkomitmen mencetak siswa yang beriman, cerdas, terampil, mandiri, dan peduli lingkungan."
          ></ResumeCard>
          </section>

          <section className='mt-20 w-full flex flex-col gap-10 lg:gap-14'>
            <ProfesionalCard></ProfesionalCard>
          </section>

      </div>
      <Footer></Footer>
    </motion.div>
  )
}

export default Resume