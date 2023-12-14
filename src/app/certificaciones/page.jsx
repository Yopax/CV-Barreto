"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" text-3xl pt-16 max-[712px]:pt-20"
    >
      <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-center  lg:py-12">
        <div className="w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
          <div className="flex max-w-prose mx-auto lg:text-lg">
            <h1 className="prose text-4xl font-bold text-sky-500 mr-2">
              Speed
            </h1>
            <h2 className="prose text-4xl font-bold text-gray-500">
              Enterprise
            </h2>
          </div>
          <div className="flex max-w-prose mx-auto lg:text-lg">
            <p className="prose text-[16px] font-normal text-gray-500">
              <em>Fundado por Barreto Darli ©2022</em>
            </p>
          </div>
          <div className=" mt-4 prose prose-slate mx-auto lg:prose-lg">
            <blockquote>
              <p className="leading-normal text-[14px] text-gray-600 font-semibold">
                Speed Enterprise es un proyecto personal que tiene como objetivo
                crear soluciones eficientes para los problemas presentados en la
                industria de la construcción.
              </p>
            </blockquote>
            <img
              className="rounded-md"
              src="https://i.imgur.com/70mJEaX.jpg"
              alt="Bachiller en Ingenieria Civil - Universidad Privada del Norte"
            />
            <img
              className="rounded-md"
              src="https://i.imgur.com/d1hcMoE.jpg"
              alt="Bachiller en Ingenieria Civil - Universidad Privada del Norte"
            />
            <h5 className="font-normal text-[14px]">
              {" "}
              <em>
                {" "}
                Bachiller en Ingenieria Civil - Universidad Privada del Norte
              </em>
            </h5>
            <p>
              Obtuve el título de Bachiller en Ingeniería Civil de la
              prestigiosa Universidad Privada del Norte. Durante mi formación,
              adquirí conocimientos sólidos en los principios fundamentales de
              la ingeniería civil, incluyendo diseño estructural, hidrología,
              geotecnia y gestión de proyectos. A través de un riguroso plan de
              estudios, desarrollé habilidades analíticas y resolutivas, así
              como la capacidad de aplicar conceptos teóricos a situaciones
              prácticas. Este certificado representa mi dedicación y compromiso
              con la excelencia académica en el campo de la ingeniería civil y
              me proporciona una base sólida para enfrentar los desafíos del
              sector de la construcción.
            </p>
            <hr className="bg-gray-500"></hr>
            <img
              className="shadow-md rounded-md"
              src="https://i.imgur.com/5acBKOG.jpg"
              alt="certificado Metodologia Lean Construction y La Productividad"
            />
            <h5 className="font-normal text-[14px]">
              {" "}
              <em>
                {" "}
                Metodologia Lean Construction y La Productividad - CAPECO
              </em>
            </h5>
            <p>
              He obtenido el certificado en Metodología Lean Construction y la
              Productividad, otorgado por la Cámara Peruana de la Construcción
              (CAPECO). Durante este programa de formación, adquirí
              conocimientos especializados sobre la metodología Lean
              Construction, que se centra en la eliminación de desperdicios y la
              optimización de los procesos en la industria de la construcción.
              Aprendí a identificar y reducir actividades que no agregan valor,
              mejorar la eficiencia en la planificación y ejecución de
              proyectos, y fomentar la colaboración entre los diferentes actores
              involucrados en la construcción.
            </p>
            <p>
              Este certificado me capacita para implementar principios y
              herramientas Lean en proyectos de construcción, con el objetivo de
              aumentar la productividad, reducir los costos y mejorar la
              calidad. Estoy preparado para aplicar enfoques innovadores y
              eficientes en la gestión de proyectos, contribuyendo así al éxito
              y la rentabilidad de futuras iniciativas constructivas.
            </p>
            <hr className="bg-gray-500"></hr>

            <img
              className=" rounded-md"
              src="https://i.imgur.com/42DrfYX.jpg"
              alt="Albaliñeria Confinada con ETABS Y SAFE - Colegio de Ingenieros del Perú"
            />
            <img
              className=" rounded-md"
              src="https://i.imgur.com/9LtpFjc.jpg"
              alt="Albaliñeria Confinada con ETABS Y SAFE - Colegio de Ingenieros del Perú"
            />
            <h5 className="font-normal text-[14px]">
              {" "}
              <em>
                {" "}
                Albaliñeria Confinada con ETABS Y SAFE - Colegio de Ingenieros
                del Perú
              </em>
            </h5>
            <p>
              He obtenido el certificado en Albañilería Confinada con ETABS
              (Extended Three-dimensional Analysis of Building Systems) y SAFE,
              otorgado por el Colegio de Ingenieros del Perú. Durante este curso
              especializado, adquirí conocimientos avanzados sobre el diseño y
              análisis estructural de sistemas de albañilería confinada
              utilizando las herramientas ETABS y SAFE, ampliamente reconocidas
              en la industria de la ingeniería.
            </p>

            <p>
              A través de este programa, adquirí habilidades para modelar y
              analizar estructuras de albañilería confinada, considerando
              aspectos como la capacidad de carga, la estabilidad sísmica y la
              resistencia al fuego. Aprendí a utilizar de manera efectiva el
              software ETABS y SAFE para realizar simulaciones y evaluaciones de
              la respuesta estructural ante diferentes cargas y solicitaciones,
              lo que me permite diseñar estructuras seguras y eficientes.
            </p>
            <p>
              Este certificado respalda mi capacidad para abordar proyectos de
              diseño y análisis estructural en el campo de la albañilería
              confinada, utilizando herramientas de vanguardia y siguiendo las
              mejores prácticas de la ingeniería. Estoy preparado para enfrentar
              desafíos en la construcción de estructuras de albañilería,
              garantizando la seguridad y la calidad en cada proyecto.
            </p>
            <hr className="bg-gray-500"></hr>
            <img
              className="rounded-md"
              src="https://i.imgur.com/rdqlw3X.jpg"
              alt="Formacion de empresas constructoras - TEDI"
            />
            <img
              className="rounded-md"
              src="https://i.imgur.com/cAeeQ9t.jpg"
              alt="Formacion de empresas constructoras - TEDI"
            />
            <h5 className="font-normal text-[14px]">
              {" "}
              <em> Formacion de empresas constructoras - TEDI</em>
            </h5>
            <p>
              Durante este curso, adquirí habilidades empresariales clave, como
              la planificación estratégica, la gestión financiera, el análisis
              de costos y presupuestos, la gestión de riesgos y la elaboración
              de propuestas comerciales. Además, aprendí sobre las regulaciones
              y normativas específicas del sector de la construcción, así como
              las mejores prácticas en relación con la contratación de personal,
              la gestión de proyectos y la administración eficiente de los
              recursos.
            </p>
            <p>
              Este certificado demuestra mi preparación para emprender y dirigir
              una empresa constructora de manera exitosa y sostenible. Estoy
              capacitado para identificar oportunidades de negocio, establecer
              sólidas estrategias de crecimiento, gestionar eficientemente los
              recursos y garantizar la rentabilidad de los proyectos. Con esta
              formación, estoy listo para enfrentar los retos del mercado de la
              construcción y contribuir al desarrollo de proyectos exitosos.
            </p>
            <hr className="bg-gray-500"></hr>
            <img
              className="rounded-md"
              src="https://i.imgur.com/7dckG2u.jpg"
              alt="Responsive Web Design - FreeCodeCamp"
            />
            <h5 className="font-normal text-[14px]">
              {" "}
              <em> Responsive Web Design - FreeCodeCamp</em>
            </h5>
            <p>
              A lo largo del curso, aprendí a utilizar tecnologías y técnicas
              como HTML5, CSS3, Flexbox y Media Queries para crear diseños web
              que sean flexibles y se ajusten de manera dinámica a diferentes
              resoluciones y dispositivos, incluyendo computadoras de
              escritorio, tablets y teléfonos móviles. Aprendí a estructurar y
              organizar el contenido, aplicar estilos y efectos visuales, y
              optimizar la experiencia del usuario en cada dispositivo.
            </p>
            <p>
              Este certificado valida mis conocimientos en el diseño web
              responsivo y demuestra mi capacidad para crear sitios web modernos
              y adaptativos. Estoy preparado para desarrollar proyectos web que
              brinden una experiencia de usuario consistente y atractiva en
              cualquier dispositivo, lo que es crucial en el mundo actual, donde
              el acceso a Internet se realiza a través de una amplia variedad de
              dispositivos y pantallas.
            </p>
            <hr className="bg-gray-500" />
            <img
              className="rounded-md"
              src="https://i.imgur.com/GXssY3C.jpg"
              alt="Diseño Web con HTML5+CSS - Movistar"
            />
            <h5 className="font-normal text-[14px]">
              {" "}
              <em> Diseño Web con HTML5+CSS - Movistar</em>
            </h5>
            <p>
              aprendí los principios básicos de HTML5 y CSS, incluyendo la
              estructura de una página web, la creación de elementos y
              etiquetas, la aplicación de estilos y diseños, y la implementación
              de diferentes efectos visuales. También adquirí conocimientos
              sobre buenas prácticas en el diseño web, la optimización del
              rendimiento y la accesibilidad.
            </p>
            <p>
              Este certificado avala mi capacidad para crear sitios web
              atractivos y funcionales utilizando HTML5 y CSS. Estoy preparado
              para desarrollar proyectos web desde cero, aplicando las últimas
              técnicas y estándares de diseño y garantizando una experiencia de
              usuario óptima. Con esta formación, puedo contribuir al desarrollo
              de sitios web de alta calidad y adaptados a las necesidades de los
              usuarios.
            </p>
            <Link href="/">
            <button className="prose rounded-lg bg-sky-500 px-4 py-2 text-white font-medium">
              Volver al Inicio
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
