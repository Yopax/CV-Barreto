import React from 'react'

function S1() {
  return (
    <div className="w-1/2 max-[425px]:w-[110%] max-[320px]:w-[90%] mx-10 max-[768px]:w-[80%] max-[768px]:mb-12 ">
            <span className="font max-[320px]:text-3xl font-bold block mb-4 text-primary text-5xl">
              Contact Us
            </span>
            <h2 className="font max-[320px]:text-lg">GET IN TOUCH WITH US</h2>
            <p className="font max-[320px]:text-[14px] max-[320px]:text-justify text-[16px]  leading-6  mt-4 text-base text-body-color mb-4">
              ¡Hola! Gracias por visitar mi portafolio. Si desea ponerse en
              contacto conmigo, puede hacerlo a través del formulario de
              contacto a continuación o enviándome un correo electrónico
              directamente a correo electrónico aquí. Si tiene alguna pregunta o
              comentario, no dude en ponerse en contacto conmigo. ¡Espero saber
              de usted pronto!
            </p>
            <div className="w-full flex space-x-4 mt-10 max-[678px]:flex-col max-[425px]:flex-col max-[425px]:items-center   ">
              <div className="max-[425px]:my-2 max-[425px]:ml-4 bg-sky-600 w-[250px] h-24 rounded-lg text-center ">
                <p className="text-white mt-2 mb-4 text-[14px]">Telefono</p>
                <p className="text-white text-sm ">+51 912 144 458</p>
              </div>
              <div className="max-[425px]:my-2 bg-sky-600 w-[250px] h-24 rounded-lg text-center">
                <p className="text-white mt-2 mb-4 text-[14px]">Email</p>
                <p className="text-white text-sm ">n00167313@gmail.pe</p>
              </div>
              <div className="max-[425px]:my-2 bg-sky-600 w-[250px] h-24 rounded-lg text-center">
                <p className="text-white mt-2 mb-4 text-[14px]">
                  Email Personal
                </p>
                <p className="text-white text-sm">n00167313@upn.pe</p>
              </div>
            </div>
          </div>
  )
}

export default S1