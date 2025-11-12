import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
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
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='group relative bg-[#1a1a2e] p-6 rounded-2xl w-full min-h-[240px] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-card'
      >
        <div>
          <h3 className='text-white font-bold text-[26px] mb-4'>{name}</h3>
          <p className='text-secondary text-[15px] leading-relaxed'>{description}</p>
        </div>

        <div className='mt-8 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[13px] font-medium ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-8 flex gap-4'>
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className='flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 py-2.5 px-5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity'
          >
            <img src={github} alt='GitHub' className='w-5 h-5' />
            GitHub
          </button>
          <button
            onClick={() => window.open(demo_link, "_blank")}
            className='flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 py-2.5 px-5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity'
          >
            Demo
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1400px] mx-auto'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");