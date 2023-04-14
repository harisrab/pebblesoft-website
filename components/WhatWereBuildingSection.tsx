import Link from "next/link";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";

const WhatWereBuildingSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const projects = [
    {
      title: "Scholarly AI - Intelligent Tutoring Assistant",
      link: "https://www.getscholarly.io",
      images: ["/assignment_solver/scholarly.png"],
      blurb:
        "The way education works is changing.\nA Swiss Army Knife for Learning.",
      descOne:
        "Based on GPT-4, Scholarly AI is a game-changing product that helps students of all backgrounds solve any assignment quickly and easily. Simply input your assignment or questions in any form, and get accurate answers in PDF format. Say goodbye to struggling with difficult assignments and say hello to Scholarly AI Tutoring Assistant.",
      descTwo:
        "The Scholarly AI has the potential to transform education. It allows students to easily get answers to assignments, leading to open book exams and a focus on understanding concepts. It could enhance the educational experience by distinguishing engaged students from those just going through the motions.",
    },
    {
      title: "Dragon Prep Words Memorization App",
      link: "#",
      images: ["/dp/dp_app.png"],
      blurb:
        "Memorize words with the power of spaced repitition.\nExpertly selected sets of words to ace SSATs.",
      descOne:
        "Dragon Prep Words Memorization is a user-friendly mobile app designed to help students study and learn with flashcards. It features a range of tools that make it easy for students to create and study their own flashcard decks, including the powerful SN2 spaced repetition algorithm. Students can compete on the leaderboard and earn rewards, while parents receive weekly notifications to track their child's progress.",
      descTwo:
        "Teachers also have access to an associated admin panel, where they can review students' performance and revision statistics. Teachers can also create and assign flashcard decks to their students, and track their progress. It also allows control over redeeming paid cards for internal classes.",
    },
    {
      title: "Rentya",
      link: "https://www.rentya.co",
      images: [
        "/rentya/main.png",
        "/rentya/pay-until-you-own-it.png",
        "/rentya/rent-it-like-you-own-it.png",
        "/rentya/zero-deposits.png",
        "/rentya/rentya-protect.png",
      ],
      blurb: "Everything for everyone.\nChanging how ownership works.",
      descOne:
        "We enable people to flexibly rent any product at fractional price of original cost. This is a platform for people to subscribe and rent products that they otherwise can’t afford to buy. Purchase of expensive products leaves people throwing them away and selling for low price. There exists no mechanism to rent and return.",
      descTwo:
        "There are major problems of trust building, damage protections, and recycling when products are circulated on such platforms, and Rentya is being designed, built, and deployed to solve these major challenges.",
    },

    {
      title: "Dragon Prep – Online College Testing Platform",
      link: "https://www.dragonprep.com",
      images: ["/dp/main.png", "/dp/1.png", "/dp/2.png", "/dp/3.png"],
      blurb:
        "SAT Test has moved online.\nWe give elite preparation to compete at highest level.",
      descOne:
        "Major standardized tests are moving online and there’s a need for a platform that gamifies the experience of private test trainings. Partnering up with Dragon Prep, we are developing web applications, mobile apps to support its pivot into this new arena of online test taking.",
      descTwo:
        "We work closely with our partners at Dragon Prep, where their deep understanding of test taking space, and our expertise in engineering frontend for applications and developing robust backend architectures combines to make that move into new market as effortless as possible.",
    },
    {
      title: "Des Lettres – Thoughts and Letters",
      link: "https://pebblesoft.co/#",
      images: ["/dl/main.png", "/dl/1.png"],
      blurb:
        "Writing is timeless record.\nA hot-bed of literary expressions and agitated ideas.",
      descOne:
        "Des Lettres is a platform for people to share their thoughts and opinions on various topics, ideas, and issues. ",
      descTwo:
        "Community blog and forum focused on discussion of issues of state, economy, biases, philosophy, technology, automation, among other topics. ",
    },
    {
      title: "The Dating Arts – Become a Specialist of Game",
      link: "https://www.thedatingarts.com",
      images: ["/tda/main.png"],
      blurb:
        "Pandemic has made relationships difficult.\nWe refashion men, turning them into virtuosos of game.",
      descOne:
        "For over a decade, The Dating Arts has secured its highly acclaimed reputation as the premier dating and social strategy consulting agency for professionals looking to better their lifestyles, social skills, and relationships with a goal to live and date fearlessly.",
      descTwo:
        "The Dating Arts has helped thousands of clients who are having issues with dating and social dynamics discover the proper mindset and systems to overcome their insecurities so they can have amazing, long-lasting connections and moments with the kinds of relationships they desire.",
    },

    // {
    // 	title: "Future School Operating System",
    // 	images: ["/futureSchoolOS/fsOS.png"],
    // 	blurb: "Remote classrooms with online teachers.\nVillagers too can have world class teaching experiences.",
    // 	descOne:
    // 		"We believe the major bottleneck to people’s prosperity is their in-ability to communicate in English language and mastery over basic scientific knowledge, which is handicap that bars to them all books, internet resources, universities, and all knowledge of our modern world.",
    // 	descTwo:
    // 		"Bringing in teachers to modularized schools in these villages without moving them from their comfort will create a much needed international exposure.",
    // },
  ];
  return (
    <div className="relative w-full flex flex-col items-start px-8 sm:px-20 mt-20 text-cwhite">
      <div id="what-were-building" className="absolute top-[-200px]"></div>

      <div className="border-b-[1px] border-[#00000042] pb-20 w-full">
        <div className="w-full flex flex-col justify-between font-alliance">
          <h1 className="font-medium text-[40px] sm:text-[60px]">
            {"What we're building?"}
          </h1>
          <p className="sm:w-[500px] font-medium text-[20px] sm:text-[24px] mt-10">
            We at Pebblesoft make results beautiful. And the effort invisible.
            Doing only the work that we consider great work.
          </p>
        </div>

        <div className="w-full mt-32 font-alliance flex items-end flex-col">
          {projects.map(
            ({ title, link, images, blurb, descOne, descTwo }, index) => (
              <div
                key={index}
                className="sm:w-[750px] border-y-[#a3a3a32b] last:border-b-0 sm:border-y-[#c0c0c02b] border-y-[1px] border-opacity-40 py-10 flex flex-col"
              >
                <Link href={link}>
                  <a target={"_blank"}>
                    <h1 className="font-medium text-[18px] sm:text-[26px] mb-5 flex items-center gap-5  hover:opacity-70 hover:cursor-pointer duration-200">
                      {title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 sm:w-6 sm:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </h1>
                  </a>
                </Link>

                <div className="w-full h-[200px] sm:h-[400px] relative z-0">
                  <div className="absolute top-0 left-0 w-full  h-full overflow-hidden">
                    <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
                      {images.map((img, i) => (
                        <div key={img + i} className="w-full h-full">
                          {/* <Image
														src={img}
														alt="Pebblesoft_img"
														layout="fill"
														objectFit="cover"
														loading="eager"
													/> */}
                          <img src={img} alt="" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <h2 className="font-medium text-[16px] sm:w-[600px] my-8 sm:text-[20px] whitespace-pre-line">
                  {blurb}
                </h2>

                <div className="w-full flex flex-col sm:flex-row opacity-60 gap-10 text-[14px]">
                  <p className="w-full">{descOne}</p>
                  <p className="w-full">{descTwo}</p>
                </div>
                <div className="w-full h-20"></div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatWereBuildingSection;
