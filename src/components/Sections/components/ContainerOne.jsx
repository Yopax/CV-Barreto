import { motion } from "framer-motion";
import DescriptionHome from "./DescriptionHome";

function ContainerOne() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="ml-[100px] max-[425px]:ml-[90px]  mr-[50px] mt-10 flex flex-col  justify-center w-4/5 h-[50%] leading-10 max-[425px]:h-[305px] max-[425px]:mt-0 max-[320px]:ml-[74px] 	"
    >
      <DescriptionHome />
    </motion.div>
  );
}

export default ContainerOne;