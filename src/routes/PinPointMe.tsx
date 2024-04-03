import React from "react";
import { Box, Text, Heading, Flex, Image, Divider } from '@chakra-ui/react';
import PinPointMeScreenshot from '../images/PinPointMe/PinPointMeScreenshot.png';

export const PinPointMe = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="2xl" mb={4} color="teal.400">
        PinPointMe
      </Heading>
      <Text fontSize="lg" mb={4}>
        「PinPointMe」は、災害時の位置情報共有アプリです。<br />
        緊急時における情報の可視化を通じて、安心と安全を提供します。
      </Text>
      <Divider mb={4} />
      <Text fontSize="md" mb={4}>
        <b>制作期間:</b> 2022年12月～2023年3月
      </Text>
      <Text fontSize="md" mb={4}>
        <b>制作目的:</b> SDGsの目標11「住み続けられるまちづくりを」に基づいて制作し、Solution Challengeに提出しました。
      </Text>
      <Text fontSize="md" mb={4}>
        <b>作品概要:</b>災害時に位置情報を共有することで、避難状況を確認したり、
        危険な状況にある住民を発見し迅速に救助を要求したりすることができます。<br />
        災害時に近隣の住民が安全であることを知ることは、精神的な安心感につながります。<br />
        このアプリは、位置情報を共有することによって、不安を軽減し、適切な行動をとるのに役立ちます。
      </Text>
      <Text fontSize="md" mb={12}>
        <b>使用したGoogleの技術:</b> Firebase, Google Map<br />
        これらの技術により、リアルタイムでの位置情報共有と地図機能を実現しています。
      </Text>
      <Divider mb={4} />
      <Flex direction="column" align="center" mb={8}>
        <Heading as="h2" size="md" mb={2} color="teal.400">
          アプリ画面
        </Heading>
        <Image
          src={PinPointMeScreenshot}
          alt="PinPointMeアプリのスクリーンショット"
          objectFit="contain"
          maxWidth="100%"
          maxHeight="400px" />
        <Text mt={2}>
          マップ上でピンを選択すると、そのピンに対応するユーザの性別と年齢を表示します。
        </Text>
      </Flex>      
    </Box>
  );
};
