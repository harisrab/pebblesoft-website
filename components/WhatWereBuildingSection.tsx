import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatWereBuildingSection = () => {
  return (
    <div className=" w-full flex flex-col items-start px-20 mt-20">
      <div className="border-b-[1px] border-[#00000042] pb-20 w-full">
        <div className="w-full flex flex-col justify-between font-alliance">
          <h1 className="font-medium text-[60px]">{"What we're building?"}</h1>
          <p className="w-[500px] font-medium text-[24px] mt-10">
            We at Pebblesoft make results beautiful. And the effort invisible.
            Doing only the work that we consider great work.
          </p>
        </div>

        <div className="w-full pl-[300px] mt-32 font-alliance">
          {/* Future School OS */}
          <div className="w-full border-y-steel border-y-[1px] border-opacity-40 py-10 flex flex-col">
            <h1 className="font-medium text-[26px] mb-5 flex items-center gap-5">
              Future School Operating System
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </h1>
            <div className="w-full h-[400px] relative z-0">
              <Image
                src={"/fsOS.png"}
                alt="Pebblesoft_img"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="font-normal text-[20px] w-[600px] my-8">
              Remote classrooms with online teachers.<br></br> Villagers too can
              have world class teaching experiences.
            </h2>

            <div className="w-full flex opacity-60 gap-10 text-[14px]">
              <p className="w-full">
                We believe the major bottleneck to people’s prosperity is their
                in-ability to communicate in English language and mastery over
                basic scientific knowledge, which is handicap that bars to them
                all books, internet resources, universities, and all knowledge
                of our modern world.{" "}
              </p>
              <p className="w-full">
                Bringing in teachers to modularized schools in these villages
                without moving them from their comfort will create a much needed
                international exposure.
              </p>
            </div>
          </div>

          {/* Rentya */}
          <div className="w-full border-y-steel border-y-[1px] border-opacity-40 py-10 flex flex-col">
            <Link href="https://rentya.co/">
              <h1 className="font-medium text-[26px] mb-5 flex items-center gap-5">
                Rentya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h1>
            </Link>
            <div className="w-full h-[400px] relative z-0">
              <Image
                src={"/rentya.png"}
                alt="Pebblesoft_img"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="font-normal text-[20px] w-[600px] my-8">
              Everything for everyone. <br></br>
              Changing how ownership works
            </h2>

            <div className="w-full flex opacity-60 gap-10 text-[14px]">
              <p className="w-full">
                We enable people to flexibly rent any product at fractional
                price of original cost. This is a platform for people to
                subscribe and rent products that they otherwise can’t afford to
                buy. Purchase of expensive products leaves people throwing them
                away and selling for low price. There exists no mechanism to
                rent and return.
              </p>
              <p className="w-full">
                There are major problems of trust building, damage protections,
                and recycling when products are circulated on such platforms,
                and Rentya is being designed, built, and deployed to solve these
                major challenges.{" "}
              </p>
            </div>
          </div>

          {/* Dragon Prep */}
          <div className="w-full border-y-steel border-y-[1px] border-opacity-40 py-10 flex flex-col">
            <Link href="https://dragon-prep.vercel.app/">
              <h1 className="font-medium text-[26px] mb-5 flex items-center gap-5">
                Dragon Prep - Online College Testing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h1>
            </Link>
            <div className="w-full h-[400px] relative z-0">
              <Image
                src={"/dragonprep.png"}
                alt="Pebblesoft_img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="font-normal text-[20px] w-[600px] my-8">
              SAT Test has moved online. <br></br>
              We give elite preparation to compete at highest level.
            </h2>

            <div className="w-full flex opacity-60 gap-10 text-[14px]">
              <p className="w-full">
                Major standardized tests are moving online and there’s a need
                for a platform that gamifies the experience of private test
                trainings. Partnering up with Dragon Prep, we are developing web
                applications, mobile apps to support its pivot into this new
                arena of online test taking.{" "}
              </p>
              <p className="w-full">
                We work closely with our partners at Dragon Prep, where their
                deep understanding of test taking space, and our expertise in
                engineering frontend for applications and developing robust
                backend architectures combines to make that move into new market
                as effortless as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWereBuildingSection;
