import BG from '../assets/video.mp4'

const Hero = () => {
    return (
        <div className='w-full h-[90vh] top-[90px] text-white'>
            <video className='object-cover h-full w-full absolute -z-10' src={BG} autoPlay loop muted/>
            <div className='uppercase w-full h-[90%] flex flex-col justify-center items-center text-center px-4'>
                <h1>welcome to <span className='text-[#00d8ff]'>stack-line</span></h1>
                <h1>have a nice day</h1>
                <p className='py-4'>якщо ти не знаєш, що робити, тисни клавішу внизу</p>
                <div>
                    <button className='px-12 sm:mt-8 sm:px-40'>FAQ</button>
                </div>
            </div>
            <div className='text-center uppercase font-bold'>
                <p>Зареєстрованих користувачів: <span className='px-4'>1</span></p>
            </div>
        </div>
    )
}

export default Hero;