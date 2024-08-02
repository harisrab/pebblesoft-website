const WhyWeAreHere = () => {
  return (
    <div className="w-full flex flex-col items-start px-8 sm:px-20  font-alliance text-cwhite overflow-hidden">
      <div className="border-t-[1px] border-[#7777772c] py-20 pb-[180px] sm:pb-20 w-full">
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
          We believe with right technology and right people we can solve hard
          problems that face our societies and inhibit their potential.
        </h1>
        <div className="flex flex-col sm:flex-row justify-between text-[15px] sm:text-[16px] mt-10 sm:mt-20 gap-10 sm:gap-24 font-normal opacity-70 sm:w-[1000px]">
          <p className="w-full">
            Today we see our society full of bureaucratic tasks and processes
            that are systemic and mundane in nature, opposing everything that
            stands in favor of societal development while the data we have
            available is ubiquitous, internet reach that extends to remote
            villages, post COVID-19 technology that’s refined for remote
            operations, and technology that almost seems magical.
          </p>
          <p className="w-full">
            Problems of bureaucracy and education are important problems that
            live at heart of stagnant societies and we at Pebblesoft are seeking
            answers, refining ourselves to stand up to these challenges,
            designing products and services in vein of building a better world.
            Better than we took it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreHere;
