import { ExternalLinkIcon } from "@chakra-ui/icons";
import {Box, Text, Link, Center, Image, Flex} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import HPimg1 from "../images/MagicCircle/aboutus.png";
import HPimg2 from "../images/MagicCircle/home.png";

export const MagicCircle = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl" ml={6}>iTL Magic Circle HP</Text>
      <Text fontSize="md" mt={4} ml={8} mb={1}><b>＜開発期間＞</b></Text>
      <Text ml={10} mb={4}>2022.12 - 2023.7</Text>
      <Text ml={8} mb={1}><b>＜背景・概要＞</b></Text>
      <Text ml={10}>
        マジックサークルさんからHP作成の依頼があり、GDSCとして作成を担当。
      </Text>
      <Text ml={10} mb={4}>
        部員の募集やサークル紹介、公演依頼の受付などの要件を満たすHPを作成しました。
      </Text>

      <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          gap="50" mt="10" >
            <Center>
              <Image src={HPimg1} alt="About us"  />
            </Center>
        
            <Center>
              <Image src={HPimg2} alt="Home" />
            </Center>
      </Flex>
          
      <Center>
        <Link href="https://itl-magic-circle.netlify.app/" isExternal>
          <Text fontSize="2xl" color={"blue.500"} mt={10} >
            Go To iTL Magic Circle HP
            <ExternalLinkIcon mx="2px" /> 
          </Text>
        </Link>
      </Center>
    </>
  );
};
