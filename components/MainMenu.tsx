import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MainMenu = ({ setMenuActive }: any) => {
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
		exit: {
			opacity: 0,
			transition: {
				when: "beforeChildren",
				delay: 0.2,
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
		exit: {
			opacity: 0,
			bottom: -30,
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
		exit: {
			opacity: 0,
			width: "0px",
			transition: { duration: 1.5, type: "spring" },
		},
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			exit="exit"
			className="absolute w-full h-screen bg-steel left-0 top-0 z-[0] flex flex-col justify-center px-8 sm:pl-[200px]"
		>
			<motion.div
				key="23423423"
				initial="hidden"
				animate="show"
				exit="exit"
				className="flex flex-col justify-between font-alliance text-[#fff]"
			>
				<div>
					<motion.div
						key="2sd3423423"
						variants={item}
						className="sm:w-[500px] bg-[#fff] h-[1px] bg-opacity-30 sm:opacity-50"
					></motion.div>
					<motion.div
						key="2sd3423423sdf"
						variants={subtitle}
						className="overflow-hidden relative h-7 flex items-center mt-[2px]"
					>
						<motion.p className="text-[14px] absolute  opacity-50">
							Navigation
						</motion.p>
					</motion.div>
				</div>

				<motion.ul
					key="2sd3423423sdfsf"
					variants={container}
					initial="hidden"
					animate="show"
					className="flex relative flex-col gap-3 font-alliance font-medium text-[#fff] text-[26px] pl-[30px] sm:pl-[100px] py-20"
				>
					<Link href="#what-were-building">
						<a>
							<div
								onClick={() => setMenuActive(false)}
								className="overflow-hidden relative h-10 hover:cursor-pointer hover:opacity-50 duration-200 sm:w-[400px]"
							>
								<motion.li
									key="2sd3423423sdfsfsdfsdfsdf"
									variants={item}
									className="hover:cursor-pointer absolute hover:opacity-50 duration-200"
								>
									{"What we're building?"}
								</motion.li>
							</div>
						</a>
					</Link>
					<Link
						// onClick={() => setMenuActive(false)}
						href="#why-were-here"
					>
						<a>
							<div
								onClick={() => setMenuActive(false)}
								className="overflow-hidden relative h-10 hover:cursor-pointer hover:opacity-50 duration-200 sm:w-[400px]"
							>
								<motion.li
									key="2sd3423423sdfsfsdf"
									variants={item}
									className="hover:cursor-pointer absolute hover:opacity-50 duration-200"
								>
									{"Why we're here?"}
								</motion.li>
							</div>
						</a>
					</Link>
					<Link href={"#what-we-do"}>
						<a>
							<div
								onClick={() => setMenuActive(false)}
								className="overflow-hidden relative h-10 hover:cursor-pointer hover:opacity-50 duration-200 sm:w-[400px]"
							>
								<motion.li
									key="2sd3423423sdfsfsdfsdf"
									variants={item}
									className="hover:cursor-pointer absolute hover:opacity-50 duration-200"
								>
									{"What we do?"}
								</motion.li>
							</div>
						</a>
					</Link>

					<div className="overflow-hidden relative h-10 hover:cursor-pointer hover:opacity-50 duration-200 sm:w-[400px]">
						<motion.li
							key="2sd3423423sdfsfsdfsdfsdfdfsd"
							variants={item}
							className="hover:cursor-pointer absolute hover:opacity-50 duration-200"
						>
							{"Talk to us"}
						</motion.li>
					</div>
				</motion.ul>
			</motion.div>
		</motion.div>
	);
};

export default MainMenu;
