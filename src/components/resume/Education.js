import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2000 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="MSc in Computer Science"
            subTitle="University of South Asia"
            result="1 Year"
            des="MSc in Computer Science focuses on advanced studies in computing theories, algorithms, and cutting-edge technologie."
          />
          <ResumeCard
            title="BSc in Computer Science <br/>& Engineering"
            subTitle="Dhaka University of Engineering And Technology"
            result="4 Years"
            des="BSc in Computer Science & Engineering offers in-depth knowledge in computing and engineering principles."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"><br/></p>
          <h2 className="text-3xl md:text-4xl font-bold"><br/></h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Diploma in Computer Technology"
            subTitle="Bogura Polytechnic Institute"
            result="4 Years"
            des="A Diploma in Computer Technology provides foundational skills in programming, networking, and IT, preparing students for technology careers."
          />
          <ResumeCard
            title="Secondary School Certification"
            subTitle="Nurjahanpur High School"
            result="2 Years"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education