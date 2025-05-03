const ProfesionalCard = () => {
    return (
        <div className='w-full bg-white py-10 px-6 lg:py-20 lg:px-12 mt-8 shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)]'>
            <div>
                <h2 className='text-2xl font-bold'>Professional skillset</h2>
                <ul className='mt-8 capitalize flex flex-wrap gap-x-16 gap-y-7 text-sm font-light font-montserrat'>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>Communicative</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>Creative & Innovative</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>Teamwork & Collaboration</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>Time Management</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>Nimble and responsible</p>
                    </li>
                </ul>
            </div>
            <div className='mt-12 lg:mt-20'>
                <h2 className='text-2xl font-bold'>Freelance</h2>
                <ul className='mt-8 capitalize flex flex-wrap gap-x-16 gap-y-7 text-sm font-light font-montserrat'>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>Visual Design</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>Commission Art</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>Essay Writing</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-secondary"></span>
                        <p className='ml-2'>novel & short story writing</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfesionalCard