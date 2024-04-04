import React from "react";
import {
  Box,
  Divider,
  HStack,
  StackDivider,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import { ImagePart } from "../components/ImagePart";
import { ImageLink } from "../components/ImageLink";
import CreditCal_img from "/Users/loulou/Desktop/pf_GDSC/GDSCchuo-Portfolio/src/images/Credit Calc/GDSC総会2023.12.21.jpg";
import second_slide from "/Users/loulou/Desktop/pf_GDSC/GDSCchuo-Portfolio/src/images/Credit Calc/GDSC総会2023.12.21 (1).jpg";

export const CreditCal = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Box
        w="100%"
        h="100%"
        position="fixed"
        top={0}
        left={0}
        zIndex={-1}
        style={{
          backgroundColor: "#fff",
          backgroundImage: `
      repeating-linear-gradient(to bottom,
        transparent 25px,
        rgba(0, 0, 0, 0.2) 26px,  rgba(0, 0, 0, 0.2) 26px,
        transparent 27px,  transparent 51px, 
        rgba(0, 0, 0, 0.2) 52px,  rgba(0, 0, 0, 0.2) 52px,
        transparent 53px,  transparent 77px, 
        rgba(0, 0, 0, 0.2) 78px,  rgba(0, 0, 0, 0.2) 78px,
        transparent 79px,  transparent 103px, 
        rgba(0, 0, 0, 0.2) 104px,  rgba(0, 0, 0, 0.2) 104px,
        transparent 105px,  transparent 129px, 
        rgba(0, 0, 0, 0.2) 130px,  rgba(0, 0, 0, 0.2) 130px),
      repeating-linear-gradient(to right,
        transparent 25px,
        rgba(0, 0, 0, 0.2) 26px,  rgba(0, 0, 0, 0.2) 26px,
        transparent 27px,  transparent 51px, 
        rgba(0, 0, 0, 0.2) 52px,  rgba(0, 0, 0, 0.2) 52px,
        transparent 53px,  transparent 77px, 
        rgba(0, 0, 0, 0.2) 78px,  rgba(0, 0, 0, 0.2) 78px,
        transparent 79px,  transparent 103px, 
        rgba(0, 0, 0, 0.2) 104px,  rgba(0, 0, 0, 0.2) 104px,
        transparent 105px,  transparent 129px, 
        rgba(0, 0, 0, 0.2) 130px,  rgba(0, 0, 0, 0.2) 130px)
    `,
        }}
      />
      <Box
        w="100%"
        h="60vh"
        bgColor={"#EE2D58"}
        alignItems="center"
        justifyContent="center"
        color="white"
        margin={3}
      >
        <motion.path
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Text fontSize="6xl" padding={3} fontWeight={500}>
            Hello ^_^
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Text fontSize="6xl" padding={3} fontWeight={500}>
            This is
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Text fontSize="6xl" padding={3} fontWeight={500}>
          Credit Calculator for Chuo Student😏
          </Text>
        </motion.div>
      </Box>

      
      {/* 画像を挿入 */}
      <Image src={CreditCal_img} alt="Image Alt Text" />
      <Image src={second_slide} alt="Image Alt Text" />
    </>
  );
};
