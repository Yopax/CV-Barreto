"use client"
import React from 'react'
import { motion } from 'framer-motion'
import CardIng from './components/CardIng';
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
          <h2 className="fonth2 font-extrabold max-[1024px]:font-semibold max-[768px]:text-[44px] max-[425px]:text-[24px] max-[375px]:text-[24px] max-[425px]:w-[280px] max-[375px]:w-[250px] max-[425px]:h-[60px] max-[375px]:h-[60px] text-[54px] bg-gradient-to-r items-center pt-5 rounded-t-full rounded-b-xl  from-sky-400 to-sky-200 w-[600px] max-[768px]:w-[430px]  h-[70px]  ">
            INGENIERIA CIVIL
          </h2>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="font text-[18px] font-semibold max-[768px]:text-[16px] max-[425px]:text-[12px] max-[375px]:text-[10px] max-[425px]:font-normal">
            Gestion de proyectos - Analisis Estructural
          </h2>
          <img
            className="w-[250px] self-center "
            src="https://i.imgur.com/pmjaRIF.png"
            alt="pintor"
          />
          <p className=" mb-16 self-center prose text-justify text-gray-500  leading-normal w-[970px] max-[1024px]:w-[700px]  font-normal max-[768px]:text-[14px] max-[768px]:w-[500px] max-[425px]:w-[300px] max-[375px]:w-[270px] max-[320px]:w-[230px] max-[320px]:self-center max-[425px]:text-justify">
            En esta sección, podrás explorar una selección de proyectos en los
            que he participado como ingeniero civil. Mi enfoque principal se
            centra en el diseño y la construcción de infraestructuras seguras y
            eficientes. A través de mi experiencia en ingeniería civil, he
            desarrollado habilidades para enfrentar desafíos complejos y
            entregar soluciones de alta calidad.
          </p>
          <h4 className=" text-gray-700 max-[425px]:text-[24px] ">Habilidades Destacadas</h4>
           
          <Toogle
            title="¿Que se sobre conceptos de topografia?"
            parrafo="Levantamientos topográficos: Poseo experiencia en la realización de levantamientos topográficos utilizando equipos y tecnologías modernas, como estaciones totales, GPS y software de procesamiento de datos. Puedo realizar mediciones precisas de terrenos, incluyendo la determinación de coordenadas, alturas y pendientes."
          />
          <Toogle title="¿Que se sobre metrados para obras civiles?" parrafo="Como ingeniero, tengo conocimientos sólidos en metrados para obras civiles. Mis habilidades incluyen la cuantificación precisa de materiales, la lectura e interpretación de planos, el cumplimiento de normativas y estándares de construcción, el uso de software especializado y el análisis de costos. Con experiencia en identificar y cuantificar los materiales necesarios, puedo leer y comprender planos arquitectónicos, estructurales y de instalaciones, y aplicar normativas y estándares pertinentes. Utilizo software de diseño y construcción para agilizar el proceso y generar informes detallados. Además, puedo realizar estimaciones de costos para ayudar en la planificación y gestión eficiente de los recursos en los proyectos de construcción." />
          <Toogle title="¿Que se sobre Presupuestos de obra?" parrafo="Como ingeniero, tengo sólidos conocimientos en la elaboración de presupuestos de obra. Puedo realizar un análisis detallado de costos, desglosando los elementos del proyecto y considerando precios actualizados. Además, cuantifico los recursos necesarios, elaboro presupuestos base realistas e implemento un control continuo de costos durante la ejecución. Utilizo análisis de precios unitarios y bases de datos de costos para establecer precios competitivos y tomar decisiones informadas. Con estas habilidades, puedo planificar, estimar y controlar eficientemente los costos de los proyectos de construcción." />
          <Toogle title="Mis habilidades en Gestión de proyectos - Lean Construction" parrafo="Como ingeniero, mis habilidades en la gestión de proyectos con enfoque Lean Construction son destacadas. Tengo la capacidad de desarrollar planes de proyecto eficientes, identificando y eliminando desperdicios, optimizando flujos de trabajo y estableciendo metas claras. Además, fomento la colaboración y la comunicación efectiva entre los equipos, promoviendo un entorno de trabajo colaborativo. Aplico el principio de mejora continua, utilizando herramientas como A3 Thinking, ciclo PDCA y Kaizens para impulsar la innovación y el perfeccionamiento constante. Mi enfoque en Lean Construction me permite maximizar la eficiencia, minimizar los tiempos de entrega y garantizar la satisfacción del cliente en cada proyecto de construcción que gestiono." />
          <Toogle title="Control de calidad y aseguramiento seguro" parrafo="Como profesional en control de calidad y aseguramiento seguro, cuento con habilidades sólidas en esta área. Tengo la capacidad de implementar y supervisar sistemas de control de calidad en proyectos, asegurando que se cumplan los estándares y requisitos establecidos." />
          <Toogle title="Colaboración efectiva y seguridad" parrafo="La colaboración efectiva y la seguridad son aspectos fundamentales en cualquier entorno de trabajo. Como profesional, cuento con habilidades que me permiten fomentar la colaboración entre los miembros del equipo y garantizar un entorno seguro para todos. Puedo facilitar la comunicación abierta y transparente, promoviendo la participación activa de todos los involucrados. Además, tengo conocimientos en normativas y prácticas de seguridad, lo que me permite implementar medidas de prevención y mitigación de riesgos. Mi enfoque se basa en la creación de un ambiente colaborativo donde se valora la seguridad de todos los trabajadores. Trabajo en equipo, promoviendo la conciencia de seguridad, brindando capacitación adecuada y estableciendo procedimientos claros. Mi objetivo es asegurar la integridad física y emocional de cada miembro del equipo, al tiempo que se alcanzan los objetivos del proyecto de manera eficiente y exitosa." />
          <Toogle title="SSOMA (Seguridad, Salud Ocupacional y Medio Ambiente)" parrafo="El enfoque en SSOMA (Seguridad, Salud Ocupacional y Medio Ambiente) es esencial para garantizar un entorno de trabajo seguro y sostenible. Como profesional consciente de la importancia de estos aspectos, cuento con habilidades en la implementación y gestión efectiva de programas de SSOMA. Puedo identificar y evaluar los riesgos laborales, desarrollar e implementar políticas y procedimientos de seguridad, así como promover prácticas saludables en el lugar de trabajo. Además, tengo conocimientos en legislación y normativas ambientales, lo que me permite gestionar adecuadamente los aspectos relacionados con el medio ambiente y la sostenibilidad en los proyectos. Trabajo en colaboración con el equipo, fomentando la conciencia y el compromiso de todos los miembros para lograr una cultura de SSOMA sólida. Mi objetivo es proteger la salud y seguridad de los trabajadores, minimizar el impacto ambiental y cumplir con los estándares y regulaciones establecidos. A través de una gestión integral de SSOMA, busco crear un entorno de trabajo saludable, seguro y respetuoso con el medio ambiente." />
        </div>
        <div className="flex">
          <h4 className="text-gray-700 mt-9">Proyectos</h4>
        </div>

        <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-8 mb-8 ">
          <div >
            <CardIng
              title="Login 01 Web site"
              enlace="https://drive.google.com/uc?export=download&id=1klmp2CXCbptojB9Wd0RQ18BeIu4E0Dwh"
              parrafo="Diseño de minimalista de inicion de sesion para una pagina web"
              img="https://i.imgur.com/9VZeBBN.png"
            />
          </div>
          <div>
            <CardIng
              title="Login 02 Web site"
              enlace="https://drive.google.com/uc?export=download&id=1-9MHa2GvKSOGDdnAEd68LaSUzFUX0gMI"
              parrafo="Diseño de minimalista de inicion de sesion para una pagina web"
              img="https://i.imgur.com/6hVqoWe.png"
            />
          </div>
          <div>
            <CardIng
              title="Dashboar"
              parrafo="Diseño de minimalista de inicion de sesion para una pagina web"
              img="https://i.imgur.com/OL8nJJh.png"
            />
          </div>
          <div>
            <CardIng
              title="Landing Page"
              parrafo="Diseño de minimalista de inicion de sesion para una pagina web"
              img="https://i.imgur.com/OleJh2H.png"
            />
          </div>
          <div>
            <CardIng title="Container One" />
          </div>
          <div>
            <CardIng title="Container One" />
          </div>
          <div>
            <CardIng title="Container One" />
          </div>
          <div>
            <CardIng title="Container One" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page