import BG from "../../assets/video.mp4";
export const Auth = () => {

    return (
        <div className="min-h-screen bg-black text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl mx-auto text-center">
    <span className="text-2xl text-white font-light">Вхід в акаунт</span>
    <div className="relative mt-4 bg-zinc-500 shadow-md sm:rounded-lg text-left">
      <div className="h-2 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] rounded-t-md"></div>
      <div className="py-6 px-8">
        <label className="block font-semibold">Логін</label>
        <input type="text" placeholder="Логін" className="placeholder:text-zinc-600 bg-zinc-400 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <label className="block mt-3 font-semibold">Пароль</label>
        <input type="password" placeholder="Пароль" className="placeholder:text-zinc-600 bg-zinc-400 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <div className="flex justify-between items-baseline">
          <button className="mt-4 mr-2 bg-indigo-500 text-white">Увійти</button>
          <a href="#" className="text-sm hover:underline">Забули пароль?</a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
