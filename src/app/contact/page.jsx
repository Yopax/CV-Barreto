"use client"
import React from 'react'
import { motion } from 'framer-motion'
import S1 from './components/S1'
import  { ContactUs } from './components/S2'

function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" text-3xl pt-16 max-[712px]:pt-20"
    >
      <div>
      <section
        id="about"
        className=" justify-center items-center h-[80%] mt-12 flex"
      >
        <div className="flex mx-20 max-[768px]:flex-col max-[768px]:items-center ">
          <S1 />
          <ContactUs/>
        </div>
      </section>
    </div>
    </motion.div>
  )
}

export default page