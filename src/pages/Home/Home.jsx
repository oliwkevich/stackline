import BG from "../../assets/video.mp4";
import { Link } from "react-router-dom";
import Typical from 'react-typical';

export const Home = () => {
  return (
    <div className="w-full h-[90vh] top-[90px] text-white">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={BG}
        autoPlay="autoplay"
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="uppercase w-full h-[90%] flex flex-col justify-center items-center text-center px-4">
        <h1>
          welcome to <span className="text-[#00d8ff]">stack-line</span>
        </h1>
        <h1>have a nice day</h1>
        <p className="py-4">якщо ти не знаєш, що робити, тисни клавішу{' '}        
        <Typical
          loop={Infinity}
          steps={[
            ' внизу',
            1000,
            ' знизу',
            1000,
            ' під текстом',
            1000,
            ' синю таку, внизу',
            1000,
          ]}
        />
        </p>
        <div>
          <button className="px-12 sm:my-8 sm:px-40 hover:animate-pulse py-2">
            <Link to="/about">FAQ</Link>
          </button>
        </div>
      </div>
      <div className="text-center uppercase font-bold">
        <p>
          Зареєстрованих користувачів: <span className="px-4">1</span>
        </p>
      </div>
    </div>
  );
};
