"use client"
import MyModal from "@/app/projectos/desing/components/MyModal";
import ContainerOne from "./components/ContainerOne";
import ContainerTwo from "./components/ContainerTwo";
function SectionHome() {

  return (
    <div>
      <section
        id="about"
        className=" max-[425px]:flex max-[425px]:h-full max-[425px]:flex-col w-full flex justify-around  justify-items-center text-white h-screen  text-center items-center"
      >
        <div>
        <img
            className="hidden mt-2 max-[320px]:mb-4 max-[320px]:mt-2 w-24 h-24 max-[320px]:w-14 max-[320px]:h-14 rounded-full shadow-lg max-[425px]:flex"
            src="https://i.imgur.com/ITW6pUq.jpg"
            alt=""
          />
        </div>
        <ContainerOne />
        <MyModal />
        <ContainerTwo />
      </section>
    </div>
  );
}

export default SectionHome;