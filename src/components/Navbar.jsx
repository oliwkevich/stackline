import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(window.localStorage.getItem('tokenAPI')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [pathname])


  const handleClickAuth = () => {
    if(isAuth && window.confirm('Ви точно хочете вийти з профілю?')) {
      window.localStorage.removeItem('tokenAPI');
      navigate('/') 
      setIsAuth(false);
      } else if (isAuth) {
        navigate('/about');
      }
    }

  const handleClick = () => {
    setNav(prev => !prev);
  };
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] cursor-pointer">
            <Link to="/">STACKLINE</Link>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white">
            <li className="duration-300 hover:text-blue-400">
              <Link to='/' className={pathname === '/' ? "text-blue-400" : null}>Домашня</Link>
            </li>
            <li className="duration-300 hover:text-blue-400">
            <Link to='/about' className={pathname === '/about' ? "text-blue-400" : null}>Про сайт</Link>
            </li>
            <button onClick={handleClickAuth} className="mx-7 hover:animate-pulse px-7">
              <Link to="/auth">{isAuth ? 'Вийти' : 'Увійти'}</Link>
            </button>
          </ul>
        </div>
        <div onClick={handleClick} className="block md:hidden">
          {!nav ? (
            <MenuIcon className="w-6 text-white" />
          ) : (
            <XIcon className="w-6 text-white" />
          )}
        </div>
        <div
          className={
            nav
              ? "duration-300 w-full bg-black h-[30vh] text-white font-bold absolute top-[90px] left-0 flex justify-center text-center"
              : "duration-300 absolute top-[-100%]" //
          }
        >
          <ul>
            <li onClick={handleClick} className="text-xl"><Link to="/">Домашня</Link></li>
            <li onClick={handleClick} className="text-xl"><Link to="/about">Про Сайт</Link></li>
            <button onClick={handleClickAuth} className="m-4 px-24 py-2"><Link to="/auth">{isAuth ? 'Вийти' : 'Увійти'}</Link></button>
          </ul>
        </div>
      </div>
    </div>
  );
};
