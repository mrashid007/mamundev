import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="A Largest Private Bank - (2020 - Present)"
            result="4 Years"
            des="Business requirement analysis, drawing flow charts, designing application architecture
                (Tool:Microsoft Visio).
                * Determining application functions and Objects
                * Designing system models.
                * Defining constraints of models.
                * Designing the use cases.
                * Development-Programming (Tool: Intellij Idea).
                * Unit Testing: Tool: Selenium
                * Interpreting briefs to create high-quality coding that functions according to specifications."
          />
          <ResumeCard
            title="Sr. Software Engineer & Product Manager"
            subTitle="Flora Limited - (2017 - 2020)"
            result="3 Years"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Sr. Software Engineer & Team Lead"
            subTitle="Databiz Software Limited - (2015 - 2027)"
            result="2 Years"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"><br/></p>
          <h2 className="text-4xl font-bold"><br/></h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Software Engineer"
            subTitle="Soft System BD - (2014 - 2015)"
            result="1 Year"
            des="Business requirement analysis, drawing flow charts, designing application architecture
                (Tool:Microsoft Visio).
                * Determining application functions and Objects
                * Designing system models.
                * Defining constraints of models.
                * Designing the use cases.
                * Development-Programming (Tool: Intellij Idea).
                * Unit Testing: Tool: Selenium
                * Interpreting briefs to create high-quality coding that functions according to specifications."
          />
          <ResumeCard
            title="Software Programmer"
            subTitle="Versorium Limited (2013 - 2014)"
            result="1 Year"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
