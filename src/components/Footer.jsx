import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa"
import { FaThreads } from "react-icons/fa6";
import { SiWattpad } from "react-icons/si";

const Footer = () => {

   const currentYear = new Date().getFullYear();
    return (
        <footer className="lg:h-28 py-8 flex bg-white">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between w-10/12 lg:w-11/12 mx-auto lg:text-sm">
                <p className="order-2 lg:order-1">© {currentYear} xandoalka. All rights reserved.</p>
                <div className="order-1 lg:order-2 flex flex-wrap items-center gap-6 lg:gap-8 lg:text-center">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Call</p>
                        <a href="https://wa.me/+628381073409">0838-1073-409</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Write</p>
                        <a href="mailto:smyani1205@gmail.com">smyani1205@gmail.com</a>
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-2">
                        <p className="font-semibold">Follow</p>
                        <span className="flex gap-4">
                            <a className="text-2xl lg:text-base" href="https://www.instagram.com/yxycnd" target="_blank"><FaInstagram /></a>
                            <a className="text-2xl lg:text-base" href="https://www.tiktok.com/@minunarlert" target="_blank"><FaTiktok /></a>
                            <a className="text-2xl lg:text-base" href="https://discord.gg/W9GHU6vs" target="_blank"><FaDiscord /></a>
                            <a className="text-2xl lg:text-base" href="https://www.threads.com/yxycnd" target="_blank"><FaThreads /></a>
                            <a className="text-2xl lg:text-base" href="https://www.wattpad.com/user/yaani_12" target="_blank"><SiWattpad /></a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer