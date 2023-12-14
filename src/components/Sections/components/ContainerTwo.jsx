import { motion } from "framer-motion";

function ContainerTwo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" mt-6 flex flex-col w-1/5 justify-center mr-[40px] h-[90%] max-[425px]:hidden "
    >

        <img
        className="object-cover w-full h-full max-[768px]:h-[70%] max-[768px]:w-[100%]   max-[425px]:hidden max-[1024px]:h-[90%] max-[1024px]:w-[100%] "
          src="https://i.imgur.com/KabjX7q.png"
          alt="Engineer Civil"
        />
    </motion.div>
  );
}

export default ContainerTwo;