import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Auth = () => {

  const navigate = useNavigate();

  const [fields, setFields] = useState({
    login: "",
    password: "",
  });

  const onSubmin = async (event) => {
    event.preventDefault(); // не робить перезагрузку сайта при нажиманні клавіші УВІЙТИ


    const resp = await fetch(`https://mentor.archakov.im/api/mock/login?email=${fields.login}&password=${fields.password}`);

    if(resp.ok) {
      const { token } = await resp.json();
      
      window.localStorage.setItem('tokenAPI',token);


      navigate('/admin')
    } else {
      alert('Ой... щось введено не так :(')
    }
  }

  const handleChangeInput = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="h-[80vh] bg-black text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl text-white font-light">Вхід в акаунт</span>
        <div className="relative mt-4 bg-zinc-500 shadow-md sm:rounded-lg text-left">
          <div className="h-2 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] rounded-t-md"></div>
          <div className="py-6 px-8">
            <label className="block font-semibold">Логін</label>
            <input
              name="login"
              type="text"
              placeholder="Логін"
              value={fields.login}
              onChange={handleChangeInput}
              className="placeholder:text-zinc-600 bg-zinc-400 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            <label className="block mt-3 font-semibold">Пароль</label>
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              value={fields.password}
              onChange={handleChangeInput}
              className="placeholder:text-zinc-600 bg-zinc-400 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            <div className="flex justify-between items-baseline">
              <button onClick={onSubmin} className="mt-4 mr-2 bg-indigo-500 text-black px-4 py-1">
                Увійти
              </button>
              <a href="#" className="text-sm hover:underline">
                Забули пароль?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
