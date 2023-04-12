/* eslint-disable react/no-unknown-property */

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-grandient p-[1px] rounded-[20px] shadow-card"
        style={{ willChange: "transform, opacity" }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 200,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text -[17px] max-w-3x1 leading-[30px]"
      >As a passionate full-stack developer and USMC veteran, I've always been driven by the desire to make a meaningful impact and be part of something greater. My journey in software engineering began with an insatiable curiosity and love for coding, which has only grown stronger as I've honed my skills and gained valuable experience.

      Throughout my military service, I was privileged to educate and manage talented individuals, developing strong leadership skills and a profound sense of teamwork. I've successfully completed an 18-week Advanced Software Engineering Immersive at Galvanize Inc., where I dedicated over 1000 hours to perfecting my craft and becoming proficient in various programming languages and technologies.
      
      As I embark on my career in software engineering, my goal is to create groundbreaking solutions that inspire and shape the world around us. I am eager to join an organization that values innovation, collaboration, and growth, where I can contribute my unique combination of military experience, technical expertise, and unwavering passion for coding.
      
      My enthusiasm for software development is genuine and rooted in the belief that we can make a difference through technology. I am confident that my dedication, strong work ethic, and love for coding will make me an invaluable asset to any team. I am excited to take on new challenges and make my mark in the tech industry, and I hope you'll consider me as a candidate who is not only highly skilled but deeply committed to making a positive impact.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
