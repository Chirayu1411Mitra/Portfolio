import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechIcon = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className='flex flex-col items-center justify-center'
  >
    <img
      src={icon}
      alt={name}
      className='w-16 h-16 object-contain mb-2'
    />
    <h3 className='text-white text-[14px] font-medium text-center'>
      {name}
    </h3>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((technology, index) => (
          <TechIcon key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
