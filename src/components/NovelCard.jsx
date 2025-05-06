const NovelCard = ({ novelTitle, novelGenre , novelDescription}) => {
    return (
        <div className="w-full max-w-lg bg-white flex flex-col lg:flex-row shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)]">
            <div className=" w-full py-4 min-h-72 lg:py-20 flex">

                <div className="h-12 w-[2.5%] bg-secondary"></div>

                <div className="px-6 lg:w-[97.5%]">
                    <h1 className="text-xl text-secondary font-bold">{novelTitle}</h1>
                    <h2 className="text-sm font-semibold font-montserrat">{novelGenre}</h2>

                    <p className="mt-4 lg:mt-10 font-montserrat text-sm leading-relaxed">{novelDescription}</p>
                </div>

            </div>
        </div>
    )
}

export default NovelCard