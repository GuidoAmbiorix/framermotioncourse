"use client";
import { motion } from "framer-motion";
import React from "react";

const Box4 = () => {
  return (
    <div className="pb-20">
      <motion.div
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "20%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 10,
        }}
        className="w-48 h-48 bg-[aquamarine] flex flex-col items-center"
      ></motion.div>
    </div>
  );
};

export default Box4;
