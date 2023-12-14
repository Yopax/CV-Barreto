"use client"
import React from 'react'
import { motion } from 'framer-motion'
import CardDev from './components/CardDev';
import Toogle from './components/Toogle';
function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" text-3xl pt-32 max-[712px]:pt-20 max-[425px]:pt-28"
    >
      <div className="flex flex-col  justify-center items-center">
        <div className="flex text-center justify-center items-center  ">
          <h2 className="fonth2 font-extrabold max-[1024px]:font-semibold max-[768px]:text-[30px] max-[425px]:text-[20px] max-[375px]:text-[18px] max-[425px]:w-[280px] max-[375px]:w-[250px] max-[425px]:h-[60px] max-[375px]:h-[60px] text-[34px] bg-gradient-to-r items-center pt-5 rounded-t-full rounded-b-xl  from-sky-400 to-sky-200 w-[600px] max-[768px]:w-[430px]  h-[70px]  ">
            DESARROLLADOR WEB
          </h2>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="font text-[18px] font-semibold max-[768px]:text-[16px] max-[425px]:text-[12px] max-[375px]:text-[10px] max-[425px]:font-normal">
            Git-GitHub-React-NODEJS-NEXTJS-TailwindCSS-SQL
          </h2>
          <img
            className="w-[250px] self-center "
            src="https://i.imgur.com/RiiDzv8.png"
            alt="Desarrollador Web DEV"
          />
          <p className="mb-16 self-center prose text-justify text-gray-500 text-[16px] leading-normal w-[970px] max-[1024px]:w-[700px]  font-normal max-[768px]:text-[14px] max-[768px]:w-[500px] max-[425px]:w-[300px] max-[375px]:w-[270px] max-[320px]:w-[230px] max-[320px]:self-center max-[425px]:text-justify">
            Soy un desarrollador web con experiencia y habilidades en diversas
            tecnologías y herramientas que me permiten crear proyectos web de
            alta calidad y funcionalidad. Utilizo Git y GitHub para el control
            de versiones y la colaboración en equipos de desarrollo, React para
            el desarrollo frontend, Node.js y Next.js para el desarrollo
            backend, Tailwind CSS para el diseño y estilo, y SQL para el manejo
            de bases de datos relacionales. Con estas habilidades, puedo crear
            aplicaciones web completas y funcionales, desde el frontend hasta el
            backend y la gestión de la base de datos.
          </p>
          <h4 className=" text-gray-700 max-[425px]:text-[24px] ">
            Habilidades Destacadas
          </h4>

          <Toogle
            title="¿Qué conocimientos tengo en Git y GitHub?"
            parrafo="Tengo un amplio conocimiento en Git y GitHub, los cuales utilizo para gestionar el control de versiones y colaborar eficientemente en equipos de desarrollo web. Estas herramientas me permiten mantener un flujo de trabajo organizado y realizar un seguimiento preciso de los cambios realizados en el código fuente."          />
          <Toogle
            title="¿Cuáles son mis habilidades utilizando React?"
            parrafo="Mis habilidades en el desarrollo frontend utilizando React son sólidas. He trabajado en diversos proyectos donde he creado interfaces de usuario interactivas y dinámicas utilizando esta biblioteca JavaScript. Esto me ha permitido optimizar la experiencia del usuario en el navegador y brindar una interfaz de usuario moderna y atractiva."          />
          <Toogle
            title="¿Cómo he utilizado Next.js?"
            parrafo="He utilizado Next.js en varios proyectos para optimizar el desarrollo web. Este framework de React proporciona un rendimiento mejorado al permitir el renderizado del lado del servidor y un enrutamiento simplificado. Gracias a Next.js, he logrado crear aplicaciones web rápidas y eficientes con una experiencia de usuario fluida."          />
          <Toogle
            title="¿Cuál es mi nivel de experiencia en el uso de Tailwind CSS?"
            parrafo="Tengo un amplio dominio en el uso de Tailwind CSS. Este framework de diseño intuitivo y altamente personalizable me ha permitido crear interfaces estilizadas y modernas en mis proyectos web. Aprovecho la flexibilidad de Tailwind CSS para adaptar el diseño a las necesidades y preferencias específicas de cada proyecto."          />
          <Toogle
            title="¿Qué conocimientos tengo en SQL?"
            parrafo="Poseo conocimientos sólidos en SQL, el lenguaje de consulta estructurado. Esto me permite diseñar y gestionar bases de datos relacionales de manera eficiente. Utilizo SQL para almacenar y recuperar datos de forma segura, garantizando un manejo adecuado de la información en mis proyectos web."          />
        </div>
        <div className="flex">
          <h4 className="text-gray-700 mt-9">Proyectos</h4>
        </div>

        <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-8 mb-8 ">
          <div>
            <CardDev
              title="Login 01 Web site"
              enlace="https://drive.google.com/uc?export=download&id=1klmp2CXCbptojB9Wd0RQ18BeIu4E0Dwh"
              parrafo="Diseño de minimalista de inicion de sesion para una pagina web"
              img="https://i.imgur.com/9VZeBBN.png"
            />
          </div>
          <div>
            <CardDev
              title="Login 02 Web site"
              enlace="https://drive.google.com/uc?export=download&id=1-9MHa2GvKSOGDdnAEd68LaSUzFUX0gMI"
              parrafo="Diseño de minimalista de inicion de sesion para una pagina web"
              img="https://i.imgur.com/6hVqoWe.png"
            />
          </div>
          <div>
            <CardDev
              title="Dashboar"
              parrafo="Diseño de minimalista de inicion de sesion para una pagina web"
              img="https://i.imgur.com/OL8nJJh.png"
            />
          </div>
          <div>
            <CardDev
              title="Landing Page"
              parrafo="Diseño de minimalista de inicion de sesion para una pagina web"
              img="https://i.imgur.com/OleJh2H.png"
            />
          </div>
          <div>
            <CardDev title="Container One" />
          </div>
          <div>
            <CardDev title="Container One" />
          </div>
          <div>
            <CardDev title="Container One" />
          </div>
          <div>
            <CardDev title="Container One" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page