import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LOGOS = [
	{ src: '/logo-line/dragon_prep.png', alt: 'dragon_prep_logo' },
	{ src: '/logo-line/elite_education.png', alt: 'elite_education_logo' },
	{ src: '/logo-line/fanai.png', alt: 'fanai_logo' },
	{ src: '/logo-line/govern_health.png', alt: 'govern_health_logo' },
	{ src: '/logo-line/group_ib.png', alt: 'group_ib_logo' },
	{ src: '/logo-line/hku_med.png', alt: 'hku_med_logo' },
	{ src: '/logo-line/leverify.png', alt: 'leverify_logo' },
	{ src: '/logo-line/rentya.png', alt: 'rentya_logo' },
	{ src: '/logo-line/rino.png', alt: 'rino_logo' },
	{
		src: '/logo-line/scholarly_ai_copilot.png',
		alt: 'scholarly_ai_copilot_logo',
	},
	{
		src: '/logo-line/university_of_hong_kong.png',
		alt: 'university_of_hong_kong_logo',
	},
];

const LogoLine = () => {
	const [windowAvailable, setWindowAvailable] = useState(false);
	const [logos, setLogos] = useState<{ src: string; alt: string }[]>([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const selectRandomLogos = () => {
		const values = new Set<number>();

		while (
			values.size < (windowAvailable ? (window.innerWidth < 1024 ? 3 : 5) : 0)
		) {
			const randomValue = Math.floor(Math.random() * LOGOS.length);
			values.add(randomValue);
		}

		const randomLogos: { src: string; alt: string }[] = [];

		Array.from(values).map((value) => {
			randomLogos.push(LOGOS[value]);
		});

		setLogos([...randomLogos]);
	};

	useEffect(() => {
		selectRandomLogos();
	}, [activeIndex]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setActiveIndex((prevIndex) => prevIndex + 1);
		}, 3000);

		return () => clearTimeout(timer);
	}, [logos]);

	useEffect(() => {
		setWindowAvailable(true);
		setActiveIndex(1);
	}, []);

	return (
		<div className='relative w-full h-[50px] px-8 sm:px-20 flex place-content-between place-items-center gap-[2.5%]'>
			{logos.map((logo, index) => (
				<div
					key={index}
					className='w-[22.5%] lg:w-[12.5%] h-full overflow-hidden'
				>
					<AnimatePresence mode='wait'>
						<motion.div
							key={logo.src + logo.alt + activeIndex}
							initial={{ y: '100%', opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: '-100%', opacity: 0 }}
							transition={{
								duration: 0.3,
								ease: 'backOut',
								delay: index * 0.1,
							}}
							className='w-full h-full relative'
						>
							<Image
								src={logo.src}
								alt={logo.alt}
								layout='fill'
								objectFit='contain'
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			))}
		</div>
	);
};

export default LogoLine;
