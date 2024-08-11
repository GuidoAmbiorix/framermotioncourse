"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="pb-20">
      <motion.div
        animate={{
          x: isAnimating ? 400 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 40,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
        className="w-48 h-48 bg-[aquamarine] flex flex-col items-center"
      ></motion.div>
    </div>
  );
};

export default Box1;
