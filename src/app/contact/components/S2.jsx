
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  {useState } from 'react';



export const ContactUs = () => {
  const form = useRef();
const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);
const sendEmail = (e) => {
    e.preventDefault();
  
    setIsSending(true);
  
    emailjs
      .sendForm('service_g0jwgql', 'template_mqjeldc', form.current, 'orOTmS1_X0eShjUTP')
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setIsSent(false);
          setIsSending(false);
        }
      );
  };

  return (
    <form className='w-1/2 mx-10 max-[425px]:w-[110%] max-[320px]:w-1/2] max-[768px]:w-[80%] border border-sky-500 rounded-lg' ref={form} onSubmit={sendEmail}>
        <div className="mx-10 space-y-12  ">
          <div className="border-b  pb-12 ">
            <h2 className="text-base font-semibold leading-7 text-gray-600 mt-8">
              Inicio
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Comunicate conmigo, si tienes alguna duda
            </p>

            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Datos
                </label>
                <div className="mt-2">
                  <div className="flex w-[190px]  rounded-md shadow-sm ring-1 ring-inset ring-sky-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 max-[425px]:text-[14px] text-sky-500 sm:text-sm">
                      nombre/
                    </span>
                    <input
                      type="text"
                      name="user_name"
                      id="username"
                      autoComplete="username"
                      className="block max-[425px]:text-[14px] max-[425px]:py-0 flex-1 w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Jon Doe"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex rounded-md w-[190px]  shadow-sm ring-1 ring-inset ring-sky-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex  max-[425px]:text-[14px] select-none items-center pl-3 text-sky-500 sm:text-sm">
                      email/
                    </span>
                    <input
                      type="email"
                      name="user_email"
                      id="useremail"
                      autoComplete="useremail"
                      className="block flex-1 max-[425px]:text-[14px] max-[425px]:py-0 w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="user@abc.com"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  id="about"
                  name="message"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Mensaje
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="message"
                    rows="3"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-sky-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Su correo sera atendido en un maximo de 24 horas.
                </p>
                <button
                  type="submit"
                  value="Send"
                  className={`text-sm text-white bg-sky-500 rounded-md w-28 h-9 font-medium hover:bg-sky-700 ${
                    isSending
                      ? "animate-pulse opacity-50 pointer-events-none"
                      : ""
                  }`}
                  disabled={isSending}
                >
                  {isSending
                    ? "Enviando..."
                    : isSent
                    ? "Envío Exitoso"
                    : "Enviar"}
                </button>
              </div>
            </div>
          </div>
        </div>
    </form>
  );
};

