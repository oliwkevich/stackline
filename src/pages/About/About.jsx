import { HomeIcon, ColorSwatchIcon, MapIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import BG from "../../assets/video.mp4";

export const About = () => {
  return (
    <div className="w-full h-screen text-white">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={BG}
        autoPlay="autoplay"
        loop
        muted
        preload="auto"
      />
      <div className="flex flex-col max-w-[1240px] m-auto items-center">
        <div className="my-6 mx-3 md:mt-10 font-bold">
          <h1 className="uppercase">Загальна інформація:</h1>
          <div className="my-3">
            <p>
              Сайт спроектовано та створено для робітників відділу <span className="text-[#00d8ff]">FORMATION
              STACK-LINE</span>
            </p>
            <p className="mt-3">
              Поки, що, сайт працює в тестовому режимі і деякі функції можуть
              працювати некоректно або взагалі не працювати
            </p>
            <p className="mt-8">Що реалізовано на даний момент:</p>
          </div>

          <div className="mt-20 text-black grid md:flex gap-2 py-7 justify-center bg-zinc-400/60 uppercase font-bold rounded-md items-center text-center">
            <div className="flex items-center ">
              <HomeIcon className="w-5" />
              <p className="flex px-3 md:pl-1 ">Головна сторінка</p>
            </div>
            <div className="flex items-center">
              <MapIcon className="w-5" />
              <p className="flex px-3 md:pl-1">Навігація</p>
            </div>
            <div className="flex items-center">
              <ColorSwatchIcon className="w-5" />
              <p className="flex px-3 md:pl-1">Дизайн</p>
            </div>
          </div>
          <button className="mt-12 flex m-auto md:mt-16 py-2 px-7">
            <Link to="/">Повернутися назад</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
