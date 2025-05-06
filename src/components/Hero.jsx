import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa"
import profile from "../assets/images/profile.jpeg"
import { Link } from "react-router-dom"
import { FaThreads} from "react-icons/fa6"
import { SiWattpad } from "react-icons/si"

const Hero = () => {
    return (
        <main className="lg:mt-28 mt-24 min-h-screen relative">
            <div className="lg:bg-secondary bg-white lg:absolute static w-2/5 lg:h-full h-48 -z-10"></div>
            <div className="lg:absolute lg:w-[62.5%] lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-0 flex flex-col lg:flex-row">
                <div className="bg-primary lg:w-2/5 w-11/12 absolute -top-3 left-6 lg:ml-0 lg:static flex flex-col justify-between shadow-[-12px_12px_17px_0_rgba(138,131,124,0.23)]">
                    <div className="flex flex-col items-center gap-6 lg:gap-8 py-12">
                        <img className="w-40 h-40 lg:w-[205px] lg:h-[205px] rounded-full bg-white object-cover" src={profile} alt="" />
                        <h2 className="text-3xl font-bold text-center leading-8 lg:leading-none">Sri Mulyani</h2>
                        <span className="lg:w-10 w-20 bg-secondary h-[1px]"></span>
                        <p className="hidden lg:flex tracking-widest w-3/4 text-center uppercase text-lg font-montserrat">Freelance Digital Worker</p>
                        <span className="flex lg:hidden justify-center w-11/12 mx-auto gap-2 font-medium uppercase mt-4 font-montserrat">
                            <Link to={"/resume"} className="w-36 text-center py-1.5 border border-tertiary bg-tertiary rounded-3xl text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tertiary" href="#">Resume</Link>
                            <Link to={"/portfolio"} className="w-36 text-center py-1.5 border border-black rounded-3xl transition-all duration-200 ease-linear hover:bg-tertiary hover:border-tertiary hover:text-white" href="#">Portfolio</Link>
                        </span>
                    </div>
                    <div className="bg-white w-full py-4 mb-3 lg:mb-0">
                        <span className="flex gap-6 justify-center">
                            <a className="text-xl" href="https://www.instagram.com/yxycnd" target="_blank"><FaInstagram /></a>
                            <a className="text-lg" href="https://www.tiktok.com/@minunarlert" target="_blank"><FaTiktok /></a>
                            <a className="text-xl" href="https://discord.gg/W9GHU6vs" target="_blank"><FaDiscord /></a>
                            <a className="text-xl" href="https://www.threads.com/yxycnd" target="_blank"><FaThreads /></a>
                            <a className="text-xl" href="https://www.threads.com/yxycnd" target="_blank"><SiWattpad /></a>
                        </span>
                    </div>
                </div>
                <div className="lg:w-3/5 w-full pt-[22rem] lg:pt-12 pl-10 pr-4 pb-10 lg:pr-0 lg:pb-0 lg:pl-12 flex flex-col gap-6 bg-primary lg:bg-white">
                    <h1 className="lg:text-8xl text-5xl font-bold">Hi!</h1>
                    <h3 className="text-xl font-semibold font-montserrat">Here&#39;s who I am &amp; what I do</h3>
                    <span className="hidden lg:flex gap-2 font-medium uppercase text-sm mt-4 font-montserrat">
                        <Link to={"/resume"} className="w-32 text-center py-2 border border-tertiary bg-tertiary rounded-3xl text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tertiary" href="#">Resume</Link>
                        <Link to={"/portfolio"} className="w-32 text-center py-2 border border-black rounded-3xl transition-all duration-200 ease-linear hover:bg-tertiary hover:border-tertiary hover:text-white" href="#">Portfolio</Link>
                    </span>
                    <p className="max-w-96 lg:mt-4 tracking-wide leading-snug font-montserrat">
                        Aku Yani, seorang Freelancer Digital Worker dengan pengalaman di bidang desain, editing, dan berbagai proyek digital. Dikenal cepat beradaptasi dan selalu semangat belajar, aku menggabungkan kreativitas dan ketelitian dalam setiap pekerjaan.</p>
                    <p className="max-w-96 tracking-wide leading-snug font-montserrat">Dari membuat desain grafis hingga membantu proyek akademik dan digital, aku hadir sebagai sosok yang fleksibel, bisa diandalkan, dan terus berkembang.</p>
                </div>
            </div>
        </main>
    )
}

export default Hero