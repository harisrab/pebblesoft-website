import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import LogoWhite from "../components/LogoWhite";
import NavBar from "../components/NavBar";
import Originating from "../components/Originating";
import WhatWereBuildingSection from "../components/WhatWereBuildingSection";
import WhyWeDoSections from "../components/WhyWeDoSections";
import LogoLine from "../components/LogoLine";
import ProjectsCarousel from "../components/ProjectsCarousel";

const Home: NextPage = () => {
  const [contactUs, setContactUs] = useState(false);

  return (
    <div className="">
      <Head>
        <title>Pebblesoft</title>
        <meta
          name="description"
          content="We deliver software that weaves beauty and function."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div className="w-full bg-steel max-w-8xl relative">
     
        <NavBar contactUs={contactUs} setContactUs={setContactUs} />

        {/* Hero Section */}
        <div className="w-full flex items-center px-8 sm:px-20 py-40 mb-[10px] bg-[transparent]">
          <div className="w-full flex flex-col sm:items-start  h-full sm:px-[36px] ">
            <h1 className="font-alliance text-cwhite/[0.2] font-medium text-[38px] sm:text-[50px] max-w-[900px]">
              We deliver software that weaves
              <span className="text-cwhite"> beauty </span>
              and
              <span className="text-cwhite"> function </span>
            </h1>

            <button
              onClick={() => setContactUs(true)}
              className={`border w-[200px] items-center flex bg-cwhite text-steel sm:hidden  ${"bg-steel hover:text-[#fff] border-steel"} px-14 py-2 hover:bg-steel mt-10  duration-200`}
            >
              Get started
            </button>
          </div>
        </div>

        {/* Logos */}
        <LogoLine />

        {/* Projects carousel */}
        <ProjectsCarousel />

        {/* What we're building? */}
        <WhatWereBuildingSection />

        {/* Why we're here section */}
        <div className="w-full flex flex-col items-start px-8 sm:px-20  font-alliance text-cwhite overflow-hidden">
          <div className="border-y-[1px] border-[#7777772c] py-20 pb-[180px] sm:pb-20 w-full">
            <div className="relative w-full flex flex-col sm:flex-row justify-between font-alliance">
              <div id="why-were-here" className="absolute top-[-200px]"></div>
              <h1 className="font-medium text-[40px] mb-10 sm:mb-0 sm:text-[60px]">
                Why we&lsquo;re here?
              </h1>
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

        {/* Footer */}
        <div className="w-full  sm:h-[200px] bg-steel flex flex-col sm:flex-row items-center justify-between px-8 py-20 sm:py-0 sm:px-20">
          <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start">
            <LogoWhite />
            <p className="pl-[18px] sm:pl-[32px] mt-2 sm:mt-0  text-[#fff] opacity-50 font-alliance text-[12px] sm:text-[14px] text-center sm:text-start">
              Founded in 2022 © All rights reserved.
            </p>
          </div>
          {/* <Originating /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
