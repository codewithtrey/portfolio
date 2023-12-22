import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Trejon McGee | Resume</title>
        <meta
          name="description"
          content="I’m a software engineer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Trejon McGee</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/trejonmcgee/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/codewithtrey"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Technical Proficiency <span className="px-1">|</span> Problem
              Solving <span className="px-1">|</span> Leadership and
              Collaboration
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Technical Proficiency</p>
            <p className="py-2">Problem Solving</p>
            <p>Leadership and Collaboration</p>
          </div>
        </div>
        <p>
          Exhibiting technical proficiency in a diverse set of programming
          languages, system design concepts, and AWS services, I am a software
          engineer with a passion for crafting robust and scalable solutions
          that drive business success and elevate user experiences. Continuously
          refining my skills and embracing new challenges, I thrive in
          collaborative environments where innovation is valued. My ability to
          communicate complex technical concepts to both technical and
          non-technical stakeholders allows me to bridge the gap between
          development and business objectives effectively. I am dedicated to
          delivering high-quality software products that not only meet but
          exceed expectations, and I am always eager to contribute to projects
          that push the boundaries of what technology can achieve.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>JavaScript
            <span className="px-2">|</span> Python
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>React
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>PostgreSQL
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Django
            <span className="px-2">|</span>Tailwind CSS
            <span className="px-2">|</span> Bootstrap
            <span className="px-2">|</span> FastAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Certifications</span>
            <span className="px-2">|</span>AWS Certified Solutions Architect
            Associate (01/2023 – 01/2026)
            <span className="px-2">|</span>AWS Certified Cloud Practitioner
            (01/2023 – 01/2026)
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">Amazon Web Services (AWS)</span>
            <span className="px-2">|</span>Cloud Support Associate (2022 - 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Handled critical and highly complex customer issues related to
              various Amazon Web Services
            </li>
            <li>
              Demonstrated exceptional efficiency by consistently exceeding SLA
              timeframes and resolving issues promptly
            </li>
            <li>
              Employed advanced troubleshooting techniques to deliver tailored
              solutions, resulting in a significant boost in customer
              satisfaction and positive feedback from customer surveys
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">Wolters Kluwer</span>
            <span className="px-2">|</span>IT Support Specialist (2021 - 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Provided technical support to Tax and IT professionals for
              installation and troubleshooting of industry-leading software
              solutions
            </li>
            <li>
              Managed phone, email, and chat support for product and
              content-related issues
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">Amazon Web Services (AWS)</span>
            <span className="px-2">|</span>Cloud Support Associate Intern (2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Collaborated with AWS engineers and interns in a virtual classroom
              to acquire in-depth knowledge about troubleshooting methodologies
            </li>
            <li>
              Acquired extensive knowledge about various components and services
              offered by Amazon Web Services
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
