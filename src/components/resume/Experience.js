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
            des="* Determining application functions and Objects<br/>
                * Designing system models.<br/>
                * Defining constraints of models.<br/>
                * Designing the use cases.<br/>
                * Development-Programming (Intellij Idea,VS Code, Studio).<br/>
                * Java 8, Spring, Spring Boot, Struts-2, Hibernate ORM.<br/>
                * C# WPF, Restful API, JavaScript.<br/>
                * Auth0, Auth2,JWT.<br/>
                * Database: Oracle, MongoDB. "
          />
          <ResumeCard
            title="Sr. Software Engineer <br/> & Team Lead"
            subTitle="Databiz Software Limited - (2015 - 2027)"
            result="2 Years"
            des="* ASP.NET MVC, .NET Framework 4.5, C# WPF, <br/>
                * jQuery, Angular JS, HTML5,CSS3 <br/>
                * Excel, XML, Text etc. <br/>
                * MSSQL, MySQL <br/>
                * Sub version (SVN) <br/>
                * Bugzilla, Mantis <br/>
                * Crystal Report, RDLC, pdfSharp, iTextSharp"
          />
          <ResumeCard
            title="Software Programmer"
            subTitle="Versorium Limited (2013 - 2014)"
            result="1 Year"
            des="* ASP.NET Form & MVC, .NET Framework 4.5,IIS, C# WPF, <br/>
              * jQuery, Angular JS, HTML5,CSS3 <br/>
              * MSSQL, MySQL <br/>
              * Sub version (SVN) <br/>
              * Bugzilla, Mantis <br/>
              * Crystal Report, RDLC, pdfSharp, iTextSharp"
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
            title="Sr. Software Engineer <br/> & Product Manager"
            subTitle="Flora Limited - (2017 - 2020)"
            result="3 Years"
            des="* ASP.NET,JavaScript, JQuery, MSSQL, EF, HTML5, CSS.<br/>
                * SOAP/Web Services, RESTful API, Flat File, WCF.<br/>
                * Bulk Upload: Excel, XML, Text etc.<br/>
                * oAuth (Token based authentication),JWT<br/>
                * Bitbucket and Sub version (SVN)<br/>
                * Bugzilla, Mantis.<br/>
                * SSRS, iTextSharp, Excel <br/>
                * Temenos, Flexcube, BankUltimus, FloraBank, HSBC-HUB"
          />
        <ResumeCard
            title="Software Engineer"
            subTitle="Soft System BD - (2014 - 2015)"
            result="1 Year"
            des="* C# WPF, WCF, .NET Framework 4.5, ASP.Net 4,4.5 <br/>
                * jQuery, JavaScript, HTML5,CSS3 <br/>
                * MSSQL, MySQL <br/>
                * Sub version (SVN) <br/>
                * Bugzilla, Mantis <br/>
                * Crystal Report, RDLC, pdfSharp"
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
