"use client";
import { motion } from "framer-motion";
import React from "react";

const Box2 = () => {
  return (
    <div className="pb-20">
      <motion.div
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 20,
          bottom: -20,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 1.0,
        }}
        className="w-48 h-48 bg-[aquamarine] flex flex-col items-center"
      ></motion.div>
    </div>
  );
};

export default Box2;
