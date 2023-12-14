import React from 'react'

function ButtonTwo({text}) {
  return (
    <button
    className=" flex  gap-2 rounded-lg py-2  font-sans text-xs font-bold text-sky-400 ty-50 max-[768px]:text-[10px]"
    type="button"
    data-ripple-dark="true"
  >
    {text}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
      className="h-4 w-4 "
    >
      <path

        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      ></path>
    </svg>
  </button>
  )
}

export default ButtonTwo