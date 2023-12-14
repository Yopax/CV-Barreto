import React from 'react'
import DescriptionOne from './DescriptionOne'
import Link from 'next/link'
import ButtonTwo from './ButtonTwo'

function DescriptionHome() {
  return (
    <div className="flex mt-8 flex-col text-start  w-full max-[425px]:mt-[50px]">
      <p className="font text-sm self-start mb-2 max-[1024px]:text-[12px] max-[768px]:text-[10px] max-[425px]:mt-[90px] max-[425px]:mb-0  ">
        Portafolio de Elaboracion propia.
      </p>
      <h1 className=" font self-start  text-[56px] font-bold  mb-5 mt-2 max-[425px]:mb-1 max-[425px]:mt-0 max-[1024px]:text-4xl max-[768px]:text-3xl max-[425px]:text-xl max-[425px]:text-center max-[425px]:mb-0 max-[360px]:text-lg max-[360px]:text-base max-[375px]:text-base max-[320px]:text-base ">
        Engineer Civil - Web developer
      </h1>
      <DescriptionOne />

      <p className="text-gray-500  text-[16px]  leading-6 w-[85%] mt-4 max-[1024px]:text-[14px] max-[768px]:text-[12px] max-[768px]:mt-1 max-[425px]:text-[12px] max-[425px]:leading-normal max-[425px]:text-justify max-[425px]:w-[89%] ">
      ¡Hola! Soy un ingeniero civil apasionado por la programación, combinando lo mejor de ambos mundos en mi carrera, apasionado por la investigación y por combinar mis habilidades para resolver problemas en la industria de la construcción. Tengo sólidos conocimientos en gestión de proyectos, diseño estructural y arquitectónico. En el ámbito de la programación, soy un desarrollador web front-end full stack, con experiencia en tecnologías como HTML, CSS, JS, React, Next.js, Framer Motion, Tailwind CSS y SQLite. Mi portafolio refleja mi pasión y evolución desde mis primeros cursos hasta convertirlo en un estilo de vida.
      <Link href="/about">
      <ButtonTwo text="¡Explora más aquí¡"></ButtonTwo>
        </Link>
      </p>
      <Link href="/contact">
      <button
        className="mr-5 self-start bg-sky-500 hover:bg-[#64748B] font-sans text-white text-sm font-medium py-2 px-3 rounded-lg mt-5 w-40 max-[1024px]:mt-[1px] max-[768px]:h-9 max-[768px]:w-32 max-[425px]:ml-[px] max-[425px]:w-[300px] max-[375px]:w-[270px] max-[360px]:w-[250px] max-[320px]:w-[230px] "
        type="button"
      >Contactame
      </button></Link>      
    </div>
  );
}

export default DescriptionHome