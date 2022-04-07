import React from "react";
import { useForm } from "react-hook-form";

export const FAQ = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => console.log(values);

  return (
    <div className="h-[80vh] bg-black text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl text-white font-light">
          Щоб отримати FAQ по сайту введіть дані нижче, якщо у вас не відображається форма,
          увійдіть на сайт через ПК версію
        </span>
        <div className="hidden md:flex relative mt-4 bg-zinc-500 shadow-md sm:rounded-lg text-left px-20">
          <div className="py-6 px-8">
            <label className="block font-semibold">Імя</label>
            <input
              name="name"
              type="text"
              {...register("name", {
                required: 'Це обовязкове поле!'
              })}
              placeholder='Введіть імя'
              className="pr-36 pl-2 placeholder:text-zinc-600 bg-zinc-400 border w-full h-5 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.name ? errors.name.message : null}
            <label className="block mt-3 font-semibold">Поштова скринька</label>
            <input
              name="email"
              type="text"
              {...register("email", {
                required: 'Це обовязкове поле!',
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Неправильний тип поштового адресу'
                }
              })}
              placeholder='Введіть пошту'
              className="pr-36 pl-2 placeholder:text-zinc-600 bg-zinc-400 border w-full h-5 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.email ? errors.email.message : null}
            <label className="block mt-3 font-semibold">Коментарій</label>
            <input
              name="comment"
              type="text"
              {...register("comment", {
                required: 'Це обовязкове поле!'
              })}
              placeholder='Введіть коментар'
              className="pr-36 pl-2 pb-24 pt-3 placeholder:text-zinc-600 bg-zinc-400 border w-full h-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.comment ? errors.comment.message : null}
            <div className="flex justify-between items-baseline">
              <button
                onClick={handleSubmit(onSubmit)}
                className="bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] text-black p-3 mt-3"
              >
                Відправити
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
