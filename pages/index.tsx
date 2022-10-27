import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Logo from "../components/Logo";
import LogoWhite from "../components/LogoWhite";
import NavBar from "../components/NavBar";
import Originating from "../components/Originating";
import WhatWeDoSections from "../components/WhatWeDoSections";
import WhatWereBuildingSection from "../components/WhatWereBuildingSection";
import WhyWeDoSections from "../components/WhyWeDoSections";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Pebblesoft</title>
        <meta
          name="description"
          content="We deliver software that weaves beauty and function."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-[#ffffff] max-w-8xl">
        <NavBar />

        {/* Hero Section */}
        <div className="w-full flex items-center px-8 sm:px-20 py-40 mb-[100px]">
          <div className="w-full flex flex-col sm:items-start  h-full sm:px-[36px] ">
            <h1 className="font-alliance text-[#1e2124bb] font-medium text-[38px] sm:text-[50px] max-w-[900px]">
              We deliver software that weaves
              <span className="text-steel"> beauty </span>
              and
              <span className="text-steel"> function </span>
            </h1>

            <button className={`border w-[200px] items-center flex sm:hidden text-[#fff] ${"bg-steel hover:text-[#fff] border-steel"} px-14 py-2 hover:bg-steel mt-10  duration-200`}>
          Get started
        </button>
          </div>
        </div>

        {/* Why we're here section */}
        <div className="w-full flex flex-col items-start px-8 sm:px-20  font-alliance">
          <div className="border-y-[1px] border-[#7777772c] py-20 pb-[180px] sm:pb-20 w-full">
            <div className="w-full flex flex-col sm:flex-row justify-between font-alliance">
              <h1 className="font-medium text-[40px] mb-10 sm:mb-0 sm:text-[60px]">Why we&lsquo;re here?</h1>
              <p className="w-full sm:w-[330px] font-medium text-[20px] sm:text-[24px] ">
                We feel there’s a need for us to exist, and we think it takes a
                different kind of company to solve these problems.{" "}
              </p>
            </div>
            <h1 className="font-alliance font-normal text-[20px] sm:text-[33px] sm:max-w-[800px] mt-10 sm:mt-[150px] sm:w-[1000px]">
              We believe with right technology and right people we can solve
              hard problems that face our societies and inhibit their potential.
            </h1>
            <div className="flex flex-col sm:flex-row justify-between text-[15px] sm:text-[16px] mt-10 sm:mt-20 gap-10 sm:gap-24 font-normal opacity-70 sm:w-[1000px]">
              <p className="w-full">
                Today we see our society full of bureaucratic tasks and
                processes that are systemic and mundane in nature, opposing
                everything that stands in favor of societal development while
                the data we have available is ubiquitous, internet reach that
                extends to remote villages, post COVID-19 technology that’s
                refined for remote operations, and technology that almost seems
                magical.
              </p>
              <p className="w-full">
                Problems of bureaucracy and education are important problems
                that live at heart of stagnant societies and we at Pebblesoft
                are seeking answers, refining ourselves to stand up to these
                challenges, designing products and services in vein of building
                a better world. Better than we took it.
              </p>
            </div>
          </div>
        </div>

        {/* Why we do? section */}
        <WhyWeDoSections />

        {/* What we're building? */}
        <WhatWereBuildingSection />

        {/* Footer */}
        <div className="w-full  sm:h-[200px] bg-steel flex flex-col sm:flex-row items-center justify-between px-8 py-20 sm:py-0 sm:px-20">
          <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start">
            <LogoWhite />
            <p className="pl-[18px] sm:pl-[32px] mt-2 sm:mt-0  text-[#fff] opacity-50 font-alliance text-[12px] sm:text-[14px] text-center sm:text-start">
              Founded in 2022 © All rights reserved.
            </p>
          </div>
          <Originating />
        </div>
      </div>
    </div>
  );
};

export default Home;
