import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="eIBS- Core Banking System"
          des=" This Web Application developed to automate all financial activities of the bank. This system divided into 3 major modules.
          General banking module, Foreign exchange module and Investment module. This system also integrated about 1000+ exchange
          houses, over 1000 different service providers(like ekyc, screening, mobile wallet, internet banking etc.) through API integrations!"
          src={projectOne}
        />
        <ProjectsCard
          title="CPS- Automatic Cheque Processing System"
          des="Advanced imaging and automation transform cheque clearance, employing images to expedite processing via date 
          monitoring. Key features include scanning, vault record management, and post-dated cheque handling. This has integration with 
          different type of Core Banking System (like flexcube, Temenos T24, Ultimus etc). Seamless post-dated cheque management adds convenience, 
          bolstering reliability!"
          src={projectTwo}
        />
        <ProjectsCard
          title="EFT- Electronic Fund Transfer System"
          des="Upgrading Electronic Fund Transfer on continual manner through automated services which has integration with 
          different type of Core Banking System (like flexcube, Temenos T24, Ultimus etc.) including different transaction channels like Cheque Processing, iBanking system, 
          Mobile Finance System, Islami Banking, Credit cards, Cloud Based System, Share Dividend, UPay, FirstPay, Rocket 
          and other payment system!"
          src={projectTwo}
        />
        <ProjectsCard
          title="ERP-Bizness Roots 2.0"
          des="BiznessRoots provides a comprehensive cloud platform encompassing key features such as Import Management, 
          Local Procurement, and Warehouse Management for efficient operations. It includes modules like Production 
          Planning and Production, along with specialized functionalities like Product Promotion (PPM) and Dealer Management. 
          Additionally, the platform offers Sales, Distribution, and Collection management, coupled with CRM, Financial Accounting. 
          BiznessRoots ensures seamless operations with robust Security Control measures!"
          src={projectOne}
        />
        <ProjectsCard
          title="ERP-Bizness Arced"
          des=" This web-based ERP application comprises multiple modules including Land Management, Sales & Marketing, Project 
          Management, Procurement, Inventory Management, Budgeting, Financial Accounting, Email & SMS, Payment 
          Schedules, Alerting. It offers a comprehensive suite of functionalities to streamline various 
          aspects of business operations, ensuring efficiency and accuracy. With seamless integration, 
          it provides organizations with a powerful tool to optimize processes and enhance overall performance across all departments!"
          src={projectTwo}
        />
        <ProjectsCard
          title="ERP- School Management System"
          des="The School Management System automates diverse administrative tasks in educational institutions. It encompasses 
          student and teacher management, attendance tracking, class and exam scheduling, and SMS notifications, class 
          and exam schedules, results, and custom messages. It facilitates teacher salary and student fee management, and supports multiple campus and shift management. Additionally, it enables report card generation and 
          exam mark management. Overall, this software streamlines day-to-day operations of school!"
          src={projectThree}
        />
         <ProjectsCard
          title="ERP- Case Management System"
          des="This ERP is a Bangladesh government project used by NLASO. The software manages various 
          functions including advice, application, mediation, litigation, to-do lists. It also oversees court case management, 
          awareness initiatives, and financial activities. By integrating these diverse functions 
          into a single system, it enhances efficiency and coordination within NLASO. The system streamlines operations, facilitates 
          effective case handling, contributing to improved legal service delivery and organizational performance!"
          src={projectThree}
        />
        <ProjectsCard
          title="PSMS-Product Service Management System"
          des="Support ticketing tools streamline customer service workflows by automatically filling ticket properties upon 
          creation, saving time for representatives. Additionally, the software offers customizable templates for businesses 
          to distribute among their teams, ensuring consistency in tone and layout across customer-facing communications 
          department-wide. These features enhance efficiency and standardization in customer support operations, ultimately 
          improving the overall customer experience and satisfaction levels!"
          src={projectThree}
        />
        <ProjectsCard
          title="POS-Point of Sale"
          des="The Complete Shop Management System integrates finance, inventory, customer, purchase, sales, sales return, 
          and balance sheet functionalities. It streamlines operations, providing comprehensive tools for managing finances, 
          tracking inventory, handling customer interactions, and monitoring sales transactions. With features like sales 
          return and balance sheet, it ensures thorough financial oversight and reporting. 
          This system optimizes efficiency across all aspects of shop management and decision-making!"
          src={projectThree}
        />
        <ProjectsCard
          title="TMS-Tailoring Management System"
          des="This System is a comprehensive solution for tailoring businesses, designed to streamline 
          operations. Key features include finance management, inventory control, customer relationship management, purchase 
          tracking, sales monitoring, and detailed measurement tracking. It also handles sales returns. Tailoring businesses can effectively manage resources, track inventory, 
          process customer orders and measurements, and maintain financial records. This holistic approach improves operational 
          workflows, and enhances customer satisfaction!"
          src={projectThree}
        />
        <ProjectsCard
          title="FCS-Flexi Cash System"
          des="The Flexi Cash System is a versatile financial tool designed to provide flexible cash management solutions. 
          It allows users to access funds as needed, offering convenience and liquidity for various financial needs. Key 
          features include easy withdrawal options, and customizable repayment plans. This system is 
          ideal for fund transfer, cash management, emergency funds. By offering immediate access to cash with flexible terms, 
          it helps individuals. The Flexi Cash System ensures a reliable 
          approach to cash flow management!"
          src={projectThree}
        />
        <ProjectsCard
          title="DAS-Digital Archiving System"
          des="Digital Archiving is an essential system for organizing, storing, and retrieving electronic
           documents efficiently. It involves converting physical files into digital formats, ensuring secure storage and easy 
           access. Key features include advanced search capabilities, and automated backup processes. This system enhances 
           document security, reduces physical storage needs, and supports compliance with data retention policies. 
           It is ideal for businesses and organizations seeking to optimize document handling and maintain an organized digital archive!"
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects