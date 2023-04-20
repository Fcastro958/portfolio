/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { world } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,

}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full h-full flex flex-col"
      >
        <div className="relavtive w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2x1"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover z-10">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={world}
                alt="world"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[24x] ">{name}</h3>
          <div className="mt-2 text-secondary text-[14px] min-h-[80px] overflow-hidden">{description}</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          varients={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px] w-full md:w-3/4 lg:w-1/2"
        >
         In this project section, you&apos;ll discover an assortment of projects that I&apos;ve brought to life through my love for coding and exploration. These creations reflect my current accomplishments and the ongoing journey to expand my skills and knowledge. Each project includes a brief description, showcasing the various technologies I&apos;ve utilized and the challenges I&apos;ve tackled along the way. At the top right corner of each project card, you&apos;ll find a GitHub icon linking to my code repository, and a web icon directing you to the live demo of the project. Ive hosted these websites using Amazon Web Services (AWS), with domain names purchased through Route, and stored the files in S3 buckets.I hope these projects convey my enthusiasm for software development and serve as an impressive testament to my capabilities.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
