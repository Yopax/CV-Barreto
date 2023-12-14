"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Card from './components/Card';
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
          <h2 className="fonth2 font-extrabold max-[1024px]:font-semibold max-[768px]:text-[44px] max-[425px]:text-[30px] max-[375px]:text-[24px] max-[425px]:w-[280px] max-[375px]:w-[250px] max-[425px]:h-[60px] max-[375px]:h-[60px] text-[54px] bg-gradient-to-r items-center pt-5 rounded-t-full rounded-b-xl  from-sky-400 to-sky-200 w-[500px] max-[768px]:w-[430px]  h-[70px]  ">
            DISEÑO UI/UX
          </h2>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="font text-[18px] font-semibold max-[768px]:text-[16px] max-[425px]:text-[12px] max-[375px]:text-[10px] max-[425px]:font-normal">
            Login - Dasboard - App Web - Landing Pages - Mobile App
          </h2>
          <img className="w-[250px] self-center " src="https://i.imgur.com/xxK89XA.png" alt="pintor" />
          <p className="prose mb-16 text-justify text-gray-500 text-[16px] leading-normal w-[970px] max-[1024px]:w-[700px]  font-normal max-[768px]:text-[14px] max-[768px]:w-[500px] max-[425px]:w-[300px] max-[375px]:w-[270px] max-[320px]:w-[230px] max-[320px]:self-center max-[425px]:text-justify">
            Aquí encontrarás una selección de proyectos en los que he trabajado
            como diseñador UX/UI. Mi enfoque principal es crear experiencias de
            usuario intuitivas y atractivas, centrándome en la usabilidad y la
            estética. A través de una combinación de investigación, prototipado
            y pruebas de usuario, me esfuerzo por comprender las necesidades y
            los deseos de los usuarios para diseñar interfaces que sean tanto
            funcionales como visualmente impactantes.
          </p>
        </div>
        <div className='flex'>
          <h2 className='font font-bold'>Proyectos</h2>
        </div>
        
        <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-8 mb-8 ">
          <div>
            <Card title="Login 01 Web site" enlace="https://drive.google.com/uc?export=download&id=1ePR8np1h-Kh5FmxRlRJeT4EOnBS-CJjb" parrafo="Diseño de minimalista de inicion de sesion para una pagina web" img="https://i.imgur.com/9VZeBBN.png" />
          </div>
          <div>
            <Card title="Login 02 Web site" enlace="https://drive.google.com/uc?export=download&id=1mJLkaYnMm7Gln74rPdZJJklpjdO3tuEF" parrafo="Diseño de minimalista de inicion de sesion para una pagina web" img="https://i.imgur.com/6hVqoWe.png" />
          </div>
          <div>
            <Card title="Dashboar" enlace="https://drive.google.com/uc?export=download&id=1JtFJJUtEZdIHZXxhrAFq04mOnVYUmsWE" parrafo="Diseño de minimalista de inicion de sesion para una pagina web" img="https://i.imgur.com/OL8nJJh.png" />
          </div>
          <div>
            <Card title="Landing Page" enlace="https://drive.google.com/uc?export=download&id=1AoJrmgQd42KhDZnmr3Zh3vOj7PdiF-IU" parrafo="Diseño de minimalista de inicion de sesion para una pagina web" img="https://i.imgur.com/OleJh2H.png" />
          </div>
          <div>
            <Card title="Container One" enlace="https://drive.google.com/uc?export=download&id=1Ap0q65Sk4hxfX3QEUe31o24VwX4WC3Zg" img="https://i.imgur.com/4n7ZrbH.png" />
          </div>
          <div>
            <Card title="Container One" enlace="https://drive.google.com/uc?export=download&id=11tK0YSJ8A869RTDStEGpi1qmTmSJtrr_" img="https://i.imgur.com/ykO4wjj.png"/>
          </div>
          <div>
            <Card title="Container One" enlace="https://drive.google.com/uc?export=download&id=1bL29779Qr30-NcL-22YQIbYgrL-78u8H" img="https://i.imgur.com/trVp9Ps.png"/>
          </div>
          <div>
            <Card title="Container One" enlace="https://drive.google.com/uc?export=download&id=1_wRJFYL5UxysPTvhkcjfep9QwXPjXwtf" img="https://i.imgur.com/PpjjH2k.png" />
          </div>
          <div>
            <Card title="Container One" enlace="https://drive.google.com/uc?export=download&id=17trmTSKC5WagJGaYZKiR_C9NVh2JSy6G" img="https://i.imgur.com/ubGZZlo.png" />
          </div>

        </div>
        
      </div>
    </motion.div>
  );
}

export default page