import React from "react";
import WhatWeDoSections from "./WhatWeDoSections";

const WhyWeDoSections = () => {
  return (
    <div className=" w-full flex flex-col items-start px-8 sm:px-20 mt-[80px] sm:mt-20">
      <div className="border-b-[1px] border-[#00000042] sm:pb-20 w-full">
        <div className="w-full flex flex-col sm:flex-row justify-between font-alliance">
          <h1 className="font-medium text-[40px] sm:text-[60px]">What we do?</h1>
          <p className="w-full mt-10 sm:mt-0 sm:w-[300px] font-medium text-[20px] sm:text-[24px]">
            We’re building software experiences that advance human progress.
          </p>
        </div>

        <WhatWeDoSections
          title={
            "We make products that weave beauty, utility into fabrics of great user experiences."
          }
          p1={
            "We believe our choices in design, user experience, engineering tools, and stacks define durability and standard. We love what we do and we want our customers to love the products we make."
          }
          p2={
            "We start at the user experience. The paint at the surface. We imagine how it should feel, how it should work, how it should be. Then we work backwards to the technology. We cater both form and function."
          }
          link={"See what we've been busy building"}
        />
        <WhatWeDoSections
          title={"We build our company around visionary engineering"}
          p1={"We’re engineers on a mission. Neither academics nor developers."}
          p2={
            "Engineering software systems is means to solve important problems. We have assembled a team that combines practical expertise in backend architectures, frontend engineering, user experience design, and data science. At Pebblesoft, we strive for a culture where every missionary is bound to execute ruthlessly in the service of the mission."
          }
          link={"Our missionaries"}
        />
        <WhatWeDoSections
          title={"We meet problems at their roots"}
          p1={
            "Our customers have novel ideas and deep understanding of problems they face. We have an  engineering mindset, and designers who have great taste."
          }
          p2={
            "We are present where the problems reside to work directly with our customers – deploying products, building infrastructure, integrating data, optimizing workflow, taking feedback and re-deploying amends on the fly. We strive for very few partnerships, but ones that are meaningful so that we can get the most out of handful of our products and our engineering expertise."
          }
          link={""}
        />
        <WhatWeDoSections
          title={"We design technology that empowers human progress"}
          p1={
            "Man-machine symbiosis has powerful applications where complementing human capabilities with those of machine power and interconnectedness of high speed internet we can deliver value where it’s needed most. "
          }
          p2={
            "We design technology and business models that can bring valuable change in our neighbourhoods, our villages, our universities, and our societies. Missionaries at Pebblesoft look to what they have and build valuable services that are the dire need of this day. This includes building cashflows to support building of remote schools infrastructure and School Operating Systems, to developing services like Rentya to enable people to rent expensive items at fraction of costs."
          }
          link={"See what we’re building"}
        />

        <WhatWeDoSections
          title={"We devote ourselves to problems that need us the most"}
          p1={"We choose battles that matter."}
          p2={
            "There are far too many problems in this world and many businesses deliver incredible value by solving those challenges. We have chosen to work on building systems that can help us leverage data, software technologies, IoT infrastructure to build products that solve major challenges in EdTech, business intelligence, finance, and circular economy."
          }
          link={"See what we’re building"}
        />
      </div>
    </div>
  );
};

export default WhyWeDoSections;
