import { wrap } from "@popmotion/popcorn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const sliderVariants = {
	incoming: (direction: number) => ({
		x: direction > 0 ? "0%" : "0%",
		scale: 1.2,
		opacity: 0,
	}),
	active: { x: 0, scale: 1, opacity: 1 },
	exit: (direction: number) => ({
		x: direction > 0 ? "0%" : "0%",
		scale: 1,
		opacity: 0,
	}),
};

const sliderTransition = {
	duration: 0.5,
	ease: [0.56, 0.03, 0.12, 1.04],
};

const ImageSlider = ({ images }: any) => {
	const [[imageCount, direction], setImageCount] = useState([0, 0]);
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const [secsPassed, setSecsPassed] = useState(0);

	const swipeToImage = (swipeDirection: number) => {
		// setSecsPassed(secsPassed + 1);
		setImageCount([imageCount + swipeDirection, swipeDirection]);
	};

	useEffect(() => {
		if (images.length > 1) {
			const interval = setInterval(() => {
				setActiveImageIndex((activeImageIndex + 1) % images.length);
				// console.log(secsPassed);
			}, 3000);
		}
		// return () => {
		// 	clearInterval(interval);
		// };
	}, []);

	useEffect(() => {
		console.log("Active Image: ", activeImageIndex);
	}, [activeImageIndex]);

	return (
		<AnimatePresence initial={false} custom={direction}>
			<motion.div
				className="relative w-full h-full flex flex-row"
				key={imageCount}
				custom={direction}
				variants={sliderVariants}
				initial="incoming"
				animate="active"
				exit="exit"
				transition={sliderTransition}
				style={{
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundImage: `url(${images[activeImageIndex]})`,
				}}
			>
				{/* <Image
					src={images[activeImageIndex]}
					alt="Pebblesoft_img"
					layout="fill"
					objectFit="cover"
					loading="eager"
				/> */}
			</motion.div>
		</AnimatePresence>
	);
};

export default ImageSlider;
