import { useState } from "react";
import Logo from "./Logo";
import Originating from "./Originating";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, bottom: -30 },
  show: {
    opacity: 1,
    bottom: 0,
    transition: { duration: 1.5, type: "spring" },
  },
};

const subtitle = {
  hidden: { opacity: 0, width: 0 },
  show: {
    opacity: 1,
    width: "100px",
    transition: { duration: 1.5, type: "spring" },
  },
};



const NavBar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuPop = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div
      id="nav-bar"
      className="sticky top-0 w-full h-[150px] bg-red-100 flex items-center justify-between px-20 z-[10000]"
    >
      {menuActive && (
        <div className="absolute w-full h-screen bg-steel left-0 top-0 z-[0] flex flex-col justify-center pl-[200px]">
          <AnimatePresence>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col justify-between font-alliance text-[#fff]"
            >
              <div>
                <motion.div
                  variants={item}
                  className="w-[500px] bg-[#fff] h-[1px] opacity-50"
                ></motion.div>
                <motion.div 
                variants={subtitle}
                className="overflow-hidden relative h-7 flex items-center mt-[2px]">
                  <motion.p className="text-[14px] absolute  opacity-50">
                    Navigation
                  </motion.p>
                </motion.div>
              </div>

              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex relative flex-col gap-3 font-alliance font-medium text-[#fff] text-[26px] pl-[100px] py-20"
              >
                <div className="overflow-hidden relative h-10 hover:cursor-pointer hover:opacity-50 duration-200 w-[400px]">
                  <motion.li
                    variants={item}
                    className="hover:cursor-pointer absolute hover:opacity-50 duration-200"
                  >
                    {"Why we're here"}
                  </motion.li>
                </div>
                <div className="overflow-hidden relative h-10 hover:cursor-pointer hover:opacity-50 duration-200 w-[400px]">
                  <motion.li
                    variants={item}
                    className="hover:cursor-pointer absolute hover:opacity-50 duration-200"
                  >
                    {"What we do?"}
                  </motion.li>
                </div>
                <div className="overflow-hidden relative h-10 hover:cursor-pointer hover:opacity-50 duration-200 w-[400px]">
                  <motion.li
                    variants={item}
                    className="hover:cursor-pointer absolute hover:opacity-50 duration-200"
                  >
                    {"What we're building?"}
                  </motion.li>
                </div>
                <div className="overflow-hidden relative h-10 hover:cursor-pointer hover:opacity-50 duration-200 w-[400px]">
                  <motion.li
                    variants={item}
                    className="hover:cursor-pointer absolute hover:opacity-50 duration-200"
                  >
                    {"Talk to us"}
                  </motion.li>
                </div>
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      <div id="logo" className="z-[1000]">
        <Logo menuActive={menuActive} />
      </div>
      <div
        id="right-btns"
        className="flex items-center gap-6 font-alliance font-normal z-[1000]"
      >
        <button
          className={`border ${
            menuActive
              ? "bg-transparent hover:bg-[#fff] text-[#fff] hover:text-steel border-[#fff]"
              : "bg-[#fff] hover:text-[#fff] border-steel"
          } px-14 py-2 hover:bg-steel  duration-200`}
        >
          Get started
        </button>
        <button
          onClick={handleMenuPop}
          className={
            menuActive
              ? "border border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-steel h-[42px] w-[42px] flex items-center justify-center hover:bg-transparent duration-200"
              : "border border-steel bg-[#fff] h-[42px] w-[42px] flex items-center justify-center hover:bg-steel hover:text-[#fff] duration-200"
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
