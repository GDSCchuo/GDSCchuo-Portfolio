import {
  Box,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
  FlexProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ImagePart } from "../components/ImagePart";
import { ImageLink } from "../components/ImageLink";
import GDSC1 from "../images/AboutUs/GDSCとは.png";
import GDSC2 from "../images/AboutUs/GDSCとは2.png";
import benkyoukai from "../images/AboutUs/benkyoukai_kunrenkou.png";
import frienads from "../images/AboutUs/friends_papatomo.png";
import programmer from "../images/AboutUs/job_programmer.png";
import instagram from "../images/AboutUs/Instagram_Glyph_Gradient.png";
import x from "../images/AboutUs/logo-black.png";
export const AboutUs = () => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  }) as FlexProps["direction"];
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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Text fontSize="6xl" padding={3} fontWeight={500}>
            Hello World
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Text fontSize="6xl" padding={3} fontWeight={500}>
            We are
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Text fontSize="6xl" padding={3} fontWeight={500}>
            GDSCchuo!!!!!
          </Text>
        </motion.div>
      </Box>
      <VStack>
        <Box margin="16px">
          <Text fontSize="6xl">GDSCとは</Text>
          <Divider borderWidth="4px" borderColor="yellow" />
        </Box>
        <Box alignItems="center" justifyContent="center" margin={5}>
          <ImagePart src={GDSC1} delay={1.5} />
        </Box>
        <Box alignItems="center" justifyContent="center" margin={5}>
          <ImagePart src={GDSC2} delay={1.5} />
        </Box>
      </VStack>
      <VStack>
        <Box margin="16px">
          <Text fontSize="6xl">主な活動</Text>
          <Divider borderWidth="4px" borderColor="blue" />
        </Box>
      </VStack>
      <Flex
        direction={direction}
        gap={4}
        align="center"
        justify="center"
        borderWidth="2px"
      >
        <Box w={{ base: "75%", md: "30%" }}>
          <Text fontSize="4xl" textAlign="center">
            開発
          </Text>
          <img src={programmer} alt=""></img>
        </Box>
        <Divider
          orientation={direction === "row" ? "vertical" : "horizontal"}
        />
        <Box w={{ base: "75%", md: "30%" }}>
          <Text fontSize="4xl" textAlign="center">
            勉強会
          </Text>
          <img src={benkyoukai} alt=""></img>
        </Box>
        <Divider
          orientation={direction === "row" ? "vertical" : "horizontal"}
        />
        <Box w={{ base: "75%", md: "30%" }}>
          <Text fontSize="4xl" textAlign="center">
            イベント開催
          </Text>
          <img src={frienads} alt=""></img>
        </Box>
      </Flex>
      <VStack>
        <Box margin="16px">
          <Text fontSize="6xl">SNS</Text>
          <Divider borderWidth="4px" borderColor="red" />
        </Box>
      </VStack>
      <Flex
        direction={direction}
        gap={4}
        align="center"
        justify="center"
        borderWidth="2px"
      >
        <Box display="flex" justifyContent="center" margin={8}>
          <div style={{ width: 200, height: 200 }}>
            <motion.div
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <ImageLink
                link="https://www.instagram.com/gdsc_chuo/?img_index=1"
                src={instagram}
              />
            </motion.div>
          </div>
        </Box>
        <Box display="flex" justifyContent="center" margin={8}>
          <div style={{ width: 200, height: 200 }}>
            <motion.div
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <ImageLink link="https://twitter.com/GDSC_chuo" src={x} />
            </motion.div>
          </div>
        </Box>
      </Flex>
    </>
  );
};
