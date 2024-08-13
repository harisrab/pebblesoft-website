import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Glare from "../components/Glare";
import LogoLine from "../components/LogoLine";
import LogoWhite from "../components/LogoWhite";
import NavBar from "../components/NavBar";
import ProjectsCarousel from "../components/ProjectsCarousel";
import WhyWeAreHere from "../components/WhyWeAreHere";

const Home: NextPage = () => {
  const [contactUs, setContactUs] = useState(false);

  return (
    <div className="">
      <Head>
        <title>Pebblesoft Inc.</title>
        <meta
          name="description"
          content="We deliver software that weaves beauty and function."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Pebblesoft Inc." />
        <meta
          property="og:description"
          content="We build software that weaves beauty and function."
        />
        <meta property="og:image" content="https://pebblesoft.co/og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pebblesoft.co" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pebblesoft Inc." />
        <meta
          name="twitter:description"
          content="We build software that weaves beauty and function."
        />
        <meta name="twitter:image" content="https://pebblesoft.co/og.jpg" />
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
        <Glare />

        {/* Hero Section */}
        <div className="w-full flex items-center px-8 sm:px-20 sm:pl-10 py-[150px] mb-[10px] bg-[transparent]">
          <div className="w-full flex flex-col items-center justify-between lg:flex-row lg:items-start  h-full sm:pl-[36px] ">
            <h1 className="font-alliance text-cwhite/[0.2] font-medium text-[38px] sm:text-[50px] max-w-[700px]">
              We <span className="text-cwhite"> build </span> software that
              weaves
              <span className="text-cwhite"> beauty </span>
              and
              <span className="text-cwhite"> function </span>
            </h1>

            <div className="lg:w-[45%] w-full relative mt-10 sm:mt-20 lg:mt-0 h-[250px] lg:h-[350px] overflow-hidden">
              <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 bg-steel opacity-50 z-10"></div>
              <video
                className="h-[150%] sm:h-[200%] lg:h-[120%] object-center object-cover z-1"
                autoPlay
                loop
                muted
                src="/hero_video.webm"
                style={{ filter: 'grayscale(60%)' }}
                playsInline
              />
            </div>

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
        {/* <WhatWereBuildingSection /> */}

        {/* Why we're here section */}
        <WhyWeAreHere />

        {/* Why we do? section */}
        {/* <WhyWeDoSections /> */}

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
