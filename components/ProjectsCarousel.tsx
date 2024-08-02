import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PORJECTS = [
  {
    title: "Govern X",
    link: "https://governcorp.com",
    images: [
      "/images/govern-x/governx_1.png",
      "/images/govern-x/governx_2.png",
    ],
    blurb: "Proactively plan and order inventory with confidence",
    descOne:
      "We are building state of the art forecasting models to predict demand on D2C channels using marketing data, price actions, inventory position, and many other internal and external variables.",
    descTwo:
      "You have the ease of connecting all your e-commerce data, produce forecasts, ability to plan seasonal and new product launches, dispatch purchase orders, and manage all your suppliers all in one automated platform.",
    technologies: [
      "ERP",
      "Machine Learning",
      "Forecasting",
      "Frontend",
      "Backend",
      "Design",
      "Shopify",
      "Instagram",
      "Data Engineering",
    ],
  },
  {
    title: "Health App - Doctor's Operating Terminal",
    link: "https://health.governcorp.com/",
    images: [
      "/images/health-app/governhealth_1.png",
      "/images/health-app/governhealth_2.png",
      "/images/health-app/governhealth_3.png",
      "/images/health-app/governhealth_4.png",
    ],
    blurb: "Common operating terminal for people in healthcare",
    descOne:
      "At Govern Health, we've built a copilot to assist doctors in their daily workflows. Its designed to schedule appointments, perform patient service, assist doctors in pulling out medical records, recommend medicines, etc.",
    descTwo:
      "Doctors can create new workflows to enable intelligent automation in their daily work at the clinic like adding new AI models, variety of data sources like Medical ERPs, Internet, personal files, and new ways to interact like Telegram and WhatsApp.",
    technologies: [
      "ERP",
      "AI",
      "Frontend",
      "Backend",
      "Orchestration",
      "WhatsApp APIs",
      "Telegram",
      "Chatbot",
    ],
  },
  {
    title: "Kno Global",
    link: "https://kno.vercel.app",
    images: ["/images/kno-global/kno_1.png", "/images/kno-global/kno_2.png"],
    blurb:
      "Convert real-time data into actionable targets for factory managers.",
    descOne:
      "Kno Global's vision is to humanise the supply chain. Brands want to avoid the next factory scandal, factories want to reduce cost and make sales, workers want a voice. Kno Global's approach starts with building relationships with workers.",
    descTwo:
      "We convert real-time data into actionable targets for factory managers to improve upon. Brands get visibility into supplier performance and improve operational efficiency. Our customers include the world's biggest brands with the goal of reaching 10m workers and establishing a new standard of Transparency for industry.",
    technologies: [
      "Compliance",
      "AI",
      "Frontend",
      "Backend",
      "Maps",
      "Databases",
      "Real Time Data",
      "Data Cleaning",
      "Data Engineering",
    ],
  },
  {
    title: "Elite Portal",
    link: "https://kno.vercel.app",
    images: [
      "/images/elite-portal/eliteportal_1.png",
      "/images/elite-portal/eliteportal_2.png",
    ],
    blurb:
      "Convert real-time data into actionable targets for factory managers.",
    descOne:
      "Elite Portal is an internal software used by Elite Education to manage admissions, applications, and track records for students who are applying to universities and colleges in the United States, United Kingdom, and Hong Kong.",
    descTwo:
      "Different stakeholders can log into the system such as teachers and tutors who can not only manage student records, but quickly create applications on Common App, direct applications to universities and schools.",
    technologies: [
      "CMS",
      "Frontend",
      "Backend",
      "Notifications",
      "Databases",
      "Student Management",
    ],
  },
  {
    title: "Elite Education - Main Website",
    link: "https://www.eliteedu.com.hk/",
    images: [
      "/images/elite-education/elitewebsite_1.png",
      "/images/elite-education/elitewebsite_2.png",
      "/images/elite-education/elitewebsite_3.png",
    ],
    blurb:
      "Convert real-time data into actionable targets for factory managers.",
    descOne:
      "Kno Global's vision is to humanize the supply chain. Brands want to avoid the next factory scandal, factories want to reduce cost and make sales, workers want a voice. Kno Global's approach starts with building relationships with workers.",
    descTwo:
      "We convert real-time data into actionable targets for factory managers to improve upon. Brands get visibility into supplier performance and improve operational efficiency. Our customers include the world's biggest brands with the goal of reaching 10m workers and establishing a new standard of Transparency for industry.",
    technologies: [
      "Compliance",
      "AI",
      "Frontend",
      "Backend",
      "Maps",
      "Databases",
      "Real Time Data",
      "Data Cleaning",
      "Data Engineering",
    ],
  },
  {
    title: "Fantastick AI - News article generator",
    link: "https://fantasktic.ai/solution-02",
    images: [
      "/images/fantastick-ai/fai_1.png",
      "/images/fantastick-ai/fai_2.png",
    ],
    blurb: "Tool for Generating Articles for English Learning",
    descOne:
      "We curate articles daily from SCMP, New Yorker, NYT, and many popular outlets to generate articles according to the reading level of students. We also identify key vocabulary, difficult phrases, and generate quizzes based on the new articles.",
    descTwo:
      "We build a system that not only helps with automatic curation, but also summarizes them, administrators can approve the articles, students can read them and quiz on them, increasing difficulty level as needed.",
    technologies: [
      "GPT-4o",
      "Llama 3",
      "Machine Learning",
      "FastAPI",
      "Python",
      "Databases",
    ],
  },
  {
    title: "Dragon Prep – Online SAT Testing Platform",
    link: "https://dragonprep.com/",
    images: [
      "/images/dragon-prep/dragonprep_1.png",
      "/images/dragon-prep/dragonprep_2.png",
      "/images/dragon-prep/dragonprep_3.png",
      "/images/dragon-prep/dragonprep_4.png",
      "/images/dragon-prep/dragonprep_5.png",
    ],
    blurb: "We give elite preparation to compete at the highest level.",
    descOne:
      "Major standardized tests are moving online and there's a need for a platform that gamifies the experience of private test training. Partnering up with Dragon Prep, we are developing web applications, mobile apps to support its pivot into this new arena of online test taking.",
    descTwo:
      "We work closely with our partners at Dragon Prep, where their deep understanding of test taking space, and our expertise in engineering frontend for applications and developing robust backend architectures combine to make that move into the new market as effortless as possible.",
    technologies: [
      "Compliance",
      "AI",
      "Frontend",
      "Backend",
      "Maps",
      "Databases",
      "Real Time Data",
      "Data Cleaning",
      "Data Engineering",
    ],
  },
  {
    title: "Dragon Prep Words Memorization App",
    link: "https://apps.apple.com/us/app/vocabdragon/id6449729518",
    images: [
      "/images/dragon-prep-words/main.png",
      "/images/dragon-prep-words/1.png",
      "/images/dragon-prep-words/2.png",
      "/images/dragon-prep-words/3.png",
      "/images/dragon-prep-words/dp_app.png",
    ],
    blurb: "Memorize words with the power of spaced repetition.",
    descOne:
      "Dragon Prep Words Memorization is a user-friendly mobile app designed to help students study and learn with flashcards. It features a range of tools that make it easy for students to create and study their own flashcard decks, including the powerful SN2 spaced repetition algorithm.",
    descTwo:
      "Students can compete on the leaderboard and earn rewards, while parents receive weekly notifications to track their child's progress. Teachers also have access to an associated admin panel, where they can review students' performance and revision statistics. Teachers can also create and assign flashcard decks to their students, and track their progress. It also allows control over redeeming paid cards for internal classes.",
    technologies: [
      "React Native",
      "Databases",
      "Design",
      "Adaptive Repetition Algorithm",
      "Anki",
    ],
  },
  {
    title: "Rentya",
    link: "https://rentya.co",
    images: [
      "/images/rentya/main.png",
      "/images/rentya/pay-until-you-own-it.png",
      "/images/rentya/rent-it-like-you-own-it.png",
      "/images/rentya/zero-deposits.png",
      "/images/rentya/rentya-protect.png",
    ],
    blurb:
      "Convert real-time data into actionable targets for factory managers.",
    descOne:
      "We enable people to flexibly rent any product at fractional price of original cost. This is a platform for people to subscribe and rent products that they otherwise can't afford to buy. Purchase of expensive products leaves people throwing them away and selling them for low price. There exists no mechanism to rent and return.",
    descTwo:
      "There are major problems of trust building, damage protections, and recycling when products are circulated on such platforms, and Rentya is being designed, built, and deployed to solve these major challenges.",
    technologies: [
      "React Native",
      "Databases",
      "Design",
      "Adaptive Repetition Algorithm",
      "Anki",
    ],
  },
  {
    title: "The Dating Arts",
    link: "https://thedatingarts.com/",
    images: [
      "/images/dating-arts/datingarts_1.png",
      "/images/dating-arts/datingarts_2.png",
    ],
    blurb: "We refashion men, turning them into virtuosos of game.",
    descOne:
      "For over a decade, The Dating Arts has secured its highly acclaimed reputation as the premier dating and social strategy consulting agency for professionals looking to better their lifestyles, social skills, and relationships with a goal to live and date fearlessly.",
    descTwo:
      "The Dating Arts has helped thousands of clients who are having issues with dating and social dynamics to discover the proper mindset and systems to overcome their insecurities so they can have amazing, long-lasting connections and moments with the kinds of relationships they desire.",
    technologies: [
      "React Native",
      "Databases",
      "Design",
      "Adaptive Repetition Algorithm",
      "Anki",
    ],
  },
];

// const SIZES = {
// 	selectedSlide: {
// 		xl: [800, 471],
// 		sm: [640, 376],
// 		xs: [357, 218],
// 	},
// 	slide: {
// 		xl: [300, 176],
// 		sm: [260, 153],
// 		xs: [211, 124],
// 	},
// };

// const SIZES_SELECTED_STRING_WIDTH = `w-[${SIZES.selectedSlide.xs[0]}px] md:w-[${SIZES.selectedSlide.sm[0]}px] xl:w-[${SIZES.selectedSlide.xl[0]}px]`;
// const SIZES_SELECTED_STRING_HEIGHT = `h-[${SIZES.selectedSlide.xs[1]}px] md:h-[${SIZES.selectedSlide.sm[1]}px] xl:h-[${SIZES.selectedSlide.xl[1]}px]`;
// const SIZES_STRING_WIDTH = `w-[${SIZES.slide.xs[0]}px] md:w-[${SIZES.slide.sm[0]}px] xl:w-[${SIZES.slide.xl[0]}px]`;
// const SIZES_STRING_HEIGHT = `h-[${SIZES.slide.xs[1]}px] md:h-[${SIZES.slide.sm[1]}px] xl:h-[${SIZES.slide.xl[1]}px]`;

const ProjectsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartPosition = useRef(0);
  const [windowAvailable, setWindowAvailable] = useState(false);
  const [projects, setProjects] = useState(PORJECTS);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentSlideImage, setCurrentSlideImage] = useState(0);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [clickAllowed, setClickAllowed] = useState(true);

  const dragThreshold = 5;

  const runCarousel = (index?: number) => {
    setCurrentSlideImage(0);

    if (index) {
      setCurrentSlide((slide) => {
        if (index > slide) setProjects([...projects, ...PORJECTS]);
        const newSlide = index;
        snapToSlide(newSlide);
        return newSlide;
      });
    } else {
      setCurrentSlide((slide) => {
        setProjects([...projects, projects[slide - 1]]);
        const newSlide = slide + 1;
        snapToSlide(newSlide);
        return newSlide;
      });
    }
  };

  const snapToSlide = (slideIndex: number) => {
    const newPosition =
      (window.innerWidth < 768
        ? 211 * slideIndex + 10 * slideIndex - 32
        : window.innerWidth < 1280
        ? 260 * slideIndex + 10 * slideIndex - 85
        : 300 * slideIndex + 10 * slideIndex - 85) * -1;

    setCarouselPosition(newPosition);
  };

  const handleDragStart = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    dragStartPosition.current = info.point.x;
  };

  const handleDragEnd = (
    _event: Event | MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const slideWidth =
      window.innerWidth < 768
        ? 211 + 10
        : window.innerWidth < 1280
        ? 260 + 10
        : 300 + 10;

    const draggedDistance = info.point.x - dragStartPosition.current;

    const velocity = info.velocity.x;

    const slidesMoved = Math.round(draggedDistance / slideWidth);

    let newSlide = Math.max(
      1,
      Math.min(projects.length, currentSlide - slidesMoved)
    );

    if (Math.abs(velocity) > 0.5) {
      newSlide =
        velocity > 0
          ? Math.max(1, newSlide - 1)
          : Math.min(projects.length, newSlide + 1);
    }

    setCurrentSlide(newSlide);
    snapToSlide(newSlide);
    setProjects([...projects, ...PORJECTS]);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    dragStartPosition.current = event.clientX;
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!clickAllowed) return;

    const draggedDistance = event.clientX - dragStartPosition.current;

    if (Math.abs(draggedDistance) < dragThreshold) {
      const slideIndex = Number(event.currentTarget.dataset.index);
      if (slideIndex && slideIndex !== currentSlide) {
        runCarousel(slideIndex);

        setClickAllowed(false);
        setTimeout(() => setClickAllowed(true), 300);
      }
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    dragStartPosition.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!clickAllowed) return;

    const draggedDistance =
      event.changedTouches[0].clientX - dragStartPosition.current;

    if (Math.abs(draggedDistance) < dragThreshold) {
      const slideIndex = Number(event.currentTarget.dataset.index);
      if (slideIndex && slideIndex !== currentSlide) {
        runCarousel(slideIndex);

        setClickAllowed(false);
        setTimeout(() => setClickAllowed(true), 300);
      }
    }
  };

  useEffect(() => {
    if (projects.length === 0) {
      return;
    }

    const timer = setTimeout(() => {
      runCarousel();
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentSlide, currentSlideImage]);

  useEffect(() => {
    setWindowAvailable(true);
    snapToSlide(currentSlide);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-start mt-20 text-cwhite">
      <div className="w-full border-b-[1px] border-[#00000042] pb-20 overflow-hidden">
        {windowAvailable && (
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{
              right:
                (window.innerWidth < 768
                  ? 211 + 10 - 32
                  : window.innerWidth < 1280
                  ? 260 + 10 - 85
                  : 300 + 10 - 85) * -1,
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{ x: carouselPosition }}
            className={`w-fit h-[calc((100vw-64px)/1.7)] md:h-[376px] xl:h-[471px] relative flex place-content-start place-items-start gap-[10px] translate-x-[-262px] sm:translate-x-[-506px] touch-none cursor-grab active:cursor-grabbing ${
              !clickAllowed ? "pointer-events-none" : ""
            }`}
          >
            {projects.map(({ title, images }, index) => (
              <motion.div
                key={index}
                layout
                data-index={index}
                className={`${
                  index === currentSlide
                    ? "w-[calc(100vw-64px)] md:w-[640px] xl:w-[800px] h-[calc((100vw-64px)/1.7)] md:h-[376px] xl:h-[471px]"
                    : "w-[211px] md:w-[260px] xl:w-[300px] h-[124px] md:h-[153px] xl:h-[176px]"
                }`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <button
                  data-index={index}
                  className="w-full h-full relative pointer-events-none"
                >
                  <Image
                    src={
                      index === currentSlide
                        ? images[currentSlideImage]
                        : images[0]
                    }
                    alt={`${title} - Project Image`}
                    layout="fill"
                    objectFit="cover"
                    loading="eager"
                  />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="w-full px-8 md:px-20 font-alliance flex items-start flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentSlide].title + currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full"
            >
              {windowAvailable && (
                <ul className="w-full xl:w-[800px] h-[65px] xl:h-[53px] mt-[10px] px-[5px] hidden md:flex place-content-start place-items-start gap-[10px]">
                  {projects[currentSlide].images
                    .slice(0, window.innerWidth < 1280 ? 2 : 4)
                    .map((src, index) => (
                      <li key={index} className="h-full">
                        <button
                          disabled={index === currentSlideImage}
                          onClick={() => setCurrentSlideImage(index)}
                          className="w-[110px] xl:w-[90px] h-full relative"
                          style={{
                            opacity: index === currentSlideImage ? 1 : 0.5,
                          }}
                        >
                          <Image
                            src={src}
                            alt={`${
                              projects[currentSlide].title
                            } - Project Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            loading="eager"
                          />
                        </button>
                      </li>
                    ))}
                </ul>
              )}
              <div className="w-full xl:w-[800px]">
                <div className="mt-[53px] sm:mt-[68px] mb-[27px] sm:mb-[5px] flex flex-col xl:flex-row place-content-between place-items-start xl:place-items-center gap-3 xl:gap-20">
                  {/* Title */}
                  <p className="font-semibold text-[20px] sm:text-[26px]">
                    {projects[currentSlide].title}
                  </p>
                  {/* Link */}
                  <Link href={projects[currentSlide].link}>
                    <a
                      target={"_blank"}
                      className="xl:max-w-[30%] text-[14px] sm:text-[14px] text-[#9f9f9f] hover:text-[#ffffff] inline-block break-words transition-colors duration-200"
                    >
                      {projects[currentSlide].link}
                    </a>
                  </Link>
                </div>
                {/* Blurb */}
                <p className="font-medium text-[16px] sm:text-[16px] text-[#9f9f9f]">
                  {projects[currentSlide].blurb}
                </p>

                <div className="mt-[59px] sm:mt-[31px] mb-[50px] sm:mb-[50px] flex flex-wrap place-content-start place-items-start gap-[12px]">
                  {projects[currentSlide].technologies.map(
                    (technology, index) => (
                      <span
                        key={index}
                        className="px-[12px] py-[8px] font-semibold text-[12px] sm:text-[12px] flex place-content-center place-items-center bg-[#002139]"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="w-[86vw] flex flex-col sm:flex-row place-content-between place-items-stretch gap-[40px] sm:gap-[110px]">
                <p className="font-normal text-[15px]">
                  {projects[currentSlide].descOne}
                </p>
                <p className="font-normal text-[15px]">
                  {projects[currentSlide].descTwo}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
