import { Navigate } from "react-router-dom";

export const Amdin = () => {
  if (!window.localStorage.getItem("tokenAPI")) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full bg-black h-screen ">
      <div className="bg-black text-white w-max m-auto">
        <h1>Вітаємо в панелі Оператора :)</h1>
      </div>
    </div>
  );
};
