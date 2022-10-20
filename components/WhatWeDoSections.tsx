import React from "react";

type WhatWeDoSectionsProps = {
  title: string;
  p1: string;
  p2: string;
  link: string;
};
const WhatWeDoSections = ({ title, p1, p2, link }: WhatWeDoSectionsProps) => {
  return (
    <div className="w-full flex justify-between my-24">
      <h1 className="font-alliance font-medium text-[22px] w-[390px]">
        {title}
      </h1>

      <div className="flex flex-col gap-6 text-steel w-[500px] font-alliance">
        <p className="font-medium text-[28px]">{p1}</p>
        <p>{p2}</p>

        {link && (
          <div className="flex items-center gap-2 opacity-60  hover:opacity-40 duration-200 hover:cursor-pointer mt-5">
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
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
            <p className="underline ">{`${link}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeDoSections;
