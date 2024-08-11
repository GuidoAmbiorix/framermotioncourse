"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Box3 = () => {
  const [boxes, setBoxex] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]);

  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const listVariant = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },
  };

  return (
    <div className="pb-20">
      <motion.div
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        className="w-48 h-48 bg-[aquamarine] flex flex-col items-center"
      >
        {boxes.map((box) => {
          return (
            <motion.li
              variants={listVariant}
              key={box.id}
              className="bg-white w-10 h-10 p-2 list-none m-3"
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;
