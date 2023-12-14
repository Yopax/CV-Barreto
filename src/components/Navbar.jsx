"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Example from './EnlaceOne';

function Navbar() {
  return (
    <>
      <nav className="bg-white fixed w-full py-[4px] ">
        <div className="flex justify-between items-center  mx-auto py-3 rsp">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/">
              <div className="flex  logo  ml-[50px] max-[425px]:ml-0 ">
                <h5 className="font-bold  mr-1 text-sky-500 hover:text-gray-500 max-[768px]:text-[16px] ">
                  Darli
                </h5>
                <h5 className="font-bold font hover:text-sky-500 max-[768px]:text-[16px]">Barreto</h5>
                <h5 className="font-bold font max-[768px]:text-[16px]">.</h5>
              </div>
            </Link>
          </motion.button>
          <ul className="flex gap-x-10 text-[14px]  mr-0 md:mr-[50px] max-[470px]:gap-4 max-[470px]:text-[12px] max-[320px]:text-[10px] max-[320px]:gap-x-3 ">
            <Example />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li className="font font-semibold hover:text-sky-500 max-[768px]:text-[12px] max-[320px]:text-[10px]">
                <Link href="/about" >Sobre mi</Link>
              </li>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li className="font font-semibold hover:text-sky-500 max-[768px]:text-[12px] max-[320px]:text-[10px]">
                <Link href="/contact">Contacto</Link>
              </li>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li className="font font-semibold hover:text-sky-500 max-[768px]:text-[12px] max-[768px]:mr-6 max-[425px]:mr-0 max-[320px]:text-[10px]">
                <Link href="/certificaciones">Certificaciones</Link>
              </li>
            </motion.button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar