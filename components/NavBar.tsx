import { useEffect, useState } from "react";
import Logo from "./Logo";
import Originating from "./Originating";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MainMenu from "./MainMenu";
import ContactUs from "./ContactUs";

const NavBar = ({ contactUs, setContactUs }: any) => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY < 10) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    });
  }, []);

  const handleMenuPop = () => {
    setContactUs(false);
    setMenuActive(!menuActive);
  };

  const handleContactPop = () => {
    setMenuActive(false);
    setContactUs(!contactUs);
  };

  // Create a function that changes state if scrollY is 0

  return (
    <div
      id="nav-bar"
      className={`sticky -top-[1px] w-full ${
        atTop
          ? "h-[150px] border-b-[1px] border-opacity-0 border-cwhite"
          : "h-[100px] backdrop-blur-md bg-opacity-60 border-b-[1px] border-cwhite border-opacity-10"
      } duration-150 bg-red-100 flex items-center justify-between px-8 sm:px-20 z-[10000] bg-steel`}
    >
      <AnimatePresence>
        {menuActive && (
          <MainMenu
            contactUs={contactUs}
            setContactUs={setContactUs}
            setMenuActive={setMenuActive}
          />
        )}

        {contactUs && <ContactUs />}
      </AnimatePresence>
      <div id="logo" className="z-[1000]">
        <Logo
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          contactUs={contactUs}
          setContactUs={setContactUs}
        />
      </div>
      <div
        id="right-btns"
        className="flex items-center gap-6 font-alliance font-normal z-[1000]"
      >
        <button
          onClick={handleContactPop}
          className={`border hidden sm:flex ${
            menuActive
              ? "bg-transparent hover:bg-[#fff] text-[#fff] hover:text-steel border-[#fff]"
              : contactUs
              ? "bg-steel hover:text-steel border-[#fff] text-[#fff] hover:bg-[#fff]"
              : "bg-steel text-[#fff] hover:text-steel border-white hover:border-cwhite hover:bg-cwhite"
          } px-14 py-2 hover:bg-steel  duration-200`}
        >
          Get started
        </button>
        <button
          onClick={handleMenuPop}
          className={
            menuActive
              ? "border border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-steel h-[42px] w-[42px] flex items-center justify-center hover:bg-transparent duration-200"
              : contactUs
              ? "border border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-steel h-[42px] w-[42px] flex items-center justify-center hover:bg-transparent duration-200"
              : "border border-[#fff] bg-[transparent] h-[42px] w-[42px] flex items-center justify-center hover:bg-cwhite text-cwhite hover:text-steel duration-200"
          }
        >
          {menuActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          ) : contactUs ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
