import { Link } from "react-router-dom";
import BG from "../../assets/video.mp4";

export const Page404 = () => {
  return (
    <div className="w-full h-[90vh] text-white">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={BG}
        autoPlay="autoplay"
        loop
        muted
        preload="auto"
      />
      <div className='flex flex-col max-w-[1240px] m-auto items-center py-36'>
        <h1 className='text-9xl'>404</h1>
        <p className='text-4xl'>Сторінка не знайдена</p>
        <button className='m-6 hover:animate-pulse'><Link to='/'>Повернутися назад</Link></button>
      </div>
    </div>
  );
};
