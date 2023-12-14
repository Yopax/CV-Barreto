import Link from 'next/link';
import React from 'react'

function CardIng({title, img, parrafo,enlace}) {
  return (
    <>
      
      <div className=" border border-sky-200 mx-[15px] my-[15px] rounded-t-md rounded-b-md mb-3">
        <div className=" rounded-md border border-sky-200  w-[215px] h-[130px] rounded-t-md ">
          <img className="h-32 rounded-md" src={img} alt="" />
        </div>

        <div className="flex bg-white  w-48 h-[220px] text-sm rounded-b-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-2 ml-3 mt-[9px] text-sky-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
          <div className="flex flex-col">
            <p className="mt-2 font font-medium">{title}</p>
            <div className="justify-center">
              <p className="mt-4 font w-[150px] h-[135px] ">{parrafo}</p>
            </div>
            <Link href={`${enlace}`} >
              <button download  className="flex mt-2 underline  text-justify  text-gray-500 hover:text-[#0866FF]">Descargar el Proyecto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardIng