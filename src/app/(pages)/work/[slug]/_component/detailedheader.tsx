"use client"
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

function Detailedheader() {
  const { slug } = useParams();

  return (
    <div>
      <motion.h1>{slug}</motion.h1>
    </div>
  );
}

export default Detailedheader;
