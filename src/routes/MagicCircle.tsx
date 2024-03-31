import { Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import video_mp4 from "../videos/目がイってる猫.mp4";
import React from "react";
export const MagicCircle = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">product4</Text>
      <Text>iTL Mgic Circle HP</Text>
      <React.StrictMode>
        <video controls muted ref={videoRef}>
          <source src={video_mp4} type="video/mp4" />
        </video>
      </React.StrictMode>
      <Text>開発期間</Text>
      <Text>2022.12 - 2023.7</Text>
      <Text>背景・概要</Text>
      <Text>マジックサークルさんからHP作成の依頼があり、GDSCとして作成を担当。</Text>
      <Text>部員の募集やサークル紹介、公演依頼の受付などの要件を満たすHPを作成した。</Text>
      <a href="https://itl-magic-circle.netlify.app/">Go To iTL Magic Circle HP</a> 
    </>
  );
};
