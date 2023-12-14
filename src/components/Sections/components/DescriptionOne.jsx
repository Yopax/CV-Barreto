import React from 'react'

function DescriptionOne() {
  return (
    <div className="">
      <dl className="font  text-[14px] font-medium flex items-center row-start-2 max-[1024px]:text-[12px] max-[768px]:text-[10px] max-[425px]:justify-center max-[425px]:w-[300px] max-[375px]:w-[250px] max-[360px]:w-[250px] max-[320px]:w-[220px]">
        <dt className="sr-only">Reviews</dt>
        <dd className="text-sky-400 flex items-center dark:text-indigo-400 ">
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="text-yellow-400 animate-spin mr-1 stroke-current dark:stroke-indigo-500"
          >
            <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" />
          </svg>
          <span>Age: 24 </span>
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="flex items-center text-sky-400">
          <svg
            width="2"
            height="2"
            aria-hidden="true"
            fill="currentColor"
            className="mx-3 text-slate-300"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className=" animate-bounce mr-1 text-yellow-400"
          >
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          La Libertad, Trujillo
        </dd>
      </dl>
    </div>
  );
}

export default DescriptionOne