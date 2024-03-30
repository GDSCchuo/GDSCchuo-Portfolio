import React from "react";
import { Box, Text, Heading, Divider } from '@chakra-ui/react';

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
        <b>作品概要:</b>災害時に位置情報を共有することで、相手が現在どこにいるのか、安全な場所にいるのかといった安否を確認したり、
        離れ離れになってしまった相手と再会したり、
        万が一相手が危険な状況にある場合に迅速に救助を要求したりすることができます。
        災害時に家族や友人が安全であることを知ることは、精神的な安心感につながります。
        このアプリによって、位置情報を通じて連絡を取り合い、互いに励まし合って精神的に支え合うことができます。
      </Text>
      <Text fontSize="md" mb={4}>
        <b>使用したGoogleの技術:</b> Firebase, Google Map<br />
        これらの技術により、リアルタイムでの位置情報共有と高度な地図機能を実現しています。
      </Text>     
    </Box>
  );
};
