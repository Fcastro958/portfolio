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
      >
      As a passionate full-stack developer and USMC veteran, my journey in software engineering began with a curiosity and love for coding. My military service helped me develop strong leadership skills and a sense of teamwork. I&apos;m eager to join an organization that values innovation, collaboration, and growth, where I can contribute my unique experience and passion for coding.
On a personal note, I&apos;m outgoing and enjoy working out and watching and playing soccer in my free time. I&apos;m a huge Marvel fan and love collecting pop figures! My enthusiasm for software development is genuine, and I believe we can make a difference through technology.
My dedication, strong work ethic, and love for coding, combined with my interests and approachable nature, will make me a valuable asset to any team. I&apos;m excited to take on new challenges and make my mark in the tech industry.
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
