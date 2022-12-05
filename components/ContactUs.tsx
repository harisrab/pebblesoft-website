import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextField from "@mui/material/TextField";
import axios from "axios";

const ContactUs = () => {
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

	const customTextFieldStyles = {
		"& .MuiInputLabel-root.Mui-focused": {
			borderBottom: "#fff",
			color: "rgba(200, 200, 200, 5)",
			fontFamily: "Alliance",
		},
		"& .MuiFormLabel-root": {
			borderBottom: "#fff",
			color: "rgba(150, 150, 150, 5)",
			fontFamily: "Alliance",
		},
		"& .MuiInput-root": {
			borderBottom: "2px solid rgba(150, 150, 150, 5)",
			transition: "0.2s",
		},
		"& .MuiInput-input": {
			borderBottom: "0px solid white",
			color: "white",
			fontFamily: "Alliance",
		},

		"& .MuiInput-root:hover": {
			borderBottom: "2px solid rgba(250, 250, 250, 5) !important",
		},

		"& .MuiInput-root:after": {
			borderBottom: "0px solid transparent !important",
		},

		"& .MuiInput-root:before": {
			borderBottom: "0px solid transparent !important",
		},

		"& .MuiInput-root:after:hover": {
			borderBottom: "0px solid transparent !important",
		},
	};

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [businessEmail, setBusinessEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [company, setCompany] = useState("");
	const [country, setCountry] = useState("");
	const [message, setMessage] = useState("");

	const [emailSuccessfullySent, setEmailSuccessfullySent] = useState(false);

	const handleSubmission = (e: any) => {
		e.preventDefault();
		console.log(
			firstName,
			lastName,
			businessEmail,
			phoneNumber,
			company,
			country,
			message
		);

		axios
			.post("/api/sendEmail", {
				firstName,
				lastName,
				businessEmail,
				phoneNumber,
				company,
				country,
				message,
			})
			.then((res) => {
				console.log(res);
				setEmailSuccessfullySent(true);
			})
			.catch((err) => {
				setEmailSuccessfullySent(true);
				console.log(err);
			});
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			exit="exit"
			className="absolute w-full h-screen bg-steel left-0 top-0 z-[0] flex flex-col justify-center px-8 sm:pl-[200px]"
		>
			{emailSuccessfullySent ? (
				<div>
					<h1 className="font-alliance font-medium text-[30px] text-[#fff] mb-10">
						Your message has been delivered successfully.
					</h1>
				</div>
			) : (
				<form onSubmit={handleSubmission}>
					<h1 className="font-alliance font-medium text-[24px] sm:text-[30px] text-[#fff] mb-10">
						Want to solve problems with Pebblesoft?
					</h1>

					<div className="max-w-[650px] flex flex-col gap-3">
						<div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
							<div className="sm:flex-1 sm:flex">
								<TextField
									fullWidth
									sx={customTextFieldStyles}
									id="standard-basic"
									label="First Name"
									variant="standard"
									value={firstName}
									onChange={(e) =>
										setFirstName(e.currentTarget.value)
									}
								/>
							</div>
							<div className="hidden sm:flex-1 sm:flex">
								<TextField
									fullWidth
									sx={customTextFieldStyles}
									id="standard-basic"
									label="Last Name"
									variant="standard"
									value={lastName}
									onChange={(e) =>
										setLastName(e.currentTarget.value)
									}
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
							<div className="sm:flex-1 sm:flex">
								<TextField
									fullWidth
									sx={customTextFieldStyles}
									id="standard-basic"
									label="Business email"
									variant="standard"
									value={businessEmail}
									onChange={(e) =>
										setBusinessEmail(e.currentTarget.value)
									}
								/>
							</div>
							<div className="sm:flex-1 sm:flex">
								<TextField
									fullWidth
									sx={customTextFieldStyles}
									id="standard-basic"
									label="Phone number"
									variant="standard"
									value={phoneNumber}
									onChange={(e) =>
										setPhoneNumber(e.currentTarget.value)
									}
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
							<div className="sm:flex-1 sm:flex">
								<TextField
									fullWidth
									sx={customTextFieldStyles}
									id="standard-basic"
									label="Company or institution"
									variant="standard"
									value={company}
									onChange={(e) =>
										setCompany(e.currentTarget.value)
									}
								/>
							</div>{" "}
							<div className="hidden sm:flex-1 sm:flex">
								<TextField
									fullWidth
									sx={customTextFieldStyles}
									id="standard-basic"
									label="Country"
									variant="standard"
									value={country}
									onChange={(e) =>
										setCountry(e.currentTarget.value)
									}
								/>
							</div>
						</div>

						<h2 className="font-alliance text-[#a0a0a0] -mb-2 mt-5">
							Tell us about your problem
						</h2>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.currentTarget.value)}
							className="border-[#909090] rounded-none border-2 bg-steel max-h-[100px] min-h-[100px] focus:border-2 focus:border-[#fff] focus:outline-none duration-150 text-[#fff] p-2 focus:text-[#fff]"
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full sm:w-[150px] mt-10 h-10 bg-[#fff] font-alliance"
					>
						Submit
					</button>
				</form>
			)}
		</motion.div>
	);
};

export default ContactUs;
