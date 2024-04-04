import { Box, Center, Image, Text, Flex, Heading } from "@chakra-ui/react";
import video_mp4 from "../images/iTLFreeClassroom/iTLFreeClassroom.mp4";
import login_png from "../images/iTLFreeClassroom/ログイン.jpg";
import select_png from "../images/iTLFreeClassroom/フロア選択.jpg";
import floor_png from "../images/iTLFreeClassroom/フロアガイド.jpg";
import current_png from "../images/iTLFreeClassroom/現在の授業.jpg";
import class_png from "../images/iTLFreeClassroom/授業情報.jpg";
import information1_png from "../images/iTLFreeClassroom/Class_Information1.jpg";
import information2_png from "../images/iTLFreeClassroom/Class_Information2.jpg";



import { useEffect, useRef } from "react";
import React from "react";

export const ITLFreeClassroom = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">iTLFreeClassroom</Text>
      <React.StrictMode>
        <video controls muted ref={videoRef}>
          <source src={video_mp4} type="video/mp4" />
        </video>
      </React.StrictMode>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        gap="6"
      >
        <Box width={{ base: "100%", md: "75%" }} textAlign="left">
          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            「今空いている教室はどこだろう？」「学内にフロアガイドがない！」
          </Text>
          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            そんなiTL生あるあるの悩みを解決するため、iTL空き教室可視化アプリを作成しました！
          </Text>

          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            ＜機能詳細＞
          </Text>

          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            ・ログイン機能
          </Text>
          <Center>
              <Image src={login_png} alt="ログイン画面" />
          </Center>

          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            ・フロアガイド
          </Text>
          <Center>
              <Image src={floor_png} alt="フロアガイド" />
          </Center>
          <Center>
              <Image src={select_png} alt="フロア選択" />
          </Center>

          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            ・授業情報
          </Text>
          <Center>
              <Image src={class_png} alt="授業情報" />
          </Center>
          <Center>
              <Image src={information1_png} alt="information1" />
          </Center>
          <Center>
              <Image src={information2_png} alt="information2" />
          </Center>

          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            ・リアルタイム教室利用状況
          </Text>
          <Center>
              <Image src={current_png} alt="現在の授業" />
          </Center>

          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            ・授業リコメンド機能
          </Text>

        </Box>
      </Flex>
    </>
  );
};
