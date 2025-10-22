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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        I'm a Computer Science student with a strong foundation in Data Structures Algorithms and Object-Oriented
Programming. Hands-on experience in full-stack development and building cloud-native applications using AWS
and Firebase.Passionate about building scalable, high-performance cloud software and eager to apply my skills to complex
challenges in distributed systems and network security.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");