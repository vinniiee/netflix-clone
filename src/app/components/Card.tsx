"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  src: string;
  size: "sm" | "md" | "lg";
};

const sizes = {
  sm: "min-w-[300px] w-[300px] min-h-[170px] h-[170px]",
  md: "min-w-[150px] w-[150px] min-h-[400px] h-[400px]",
  lg: "min-w-[430px] w-[430px] min-h-[220px] h-[220px]",
};

function Card(props: CardProps) {
  const h = 250;
  const { src, size } = props;
  
  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 50 }}
      className={`relative ${sizes[size]} shadow-lg cursor-pointer rounded-md`}
    >
      <Image
        className="shadow-black shadow-md rounded-md"
        src={src}
        alt="card-img"
        fill={true}
        style={{objectFit:'cover'}}
      />
    </motion.div>
  );
}

export default Card;
