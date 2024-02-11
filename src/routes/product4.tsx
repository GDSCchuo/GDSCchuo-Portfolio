import { Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import video_mp4 from "../videos/目がイってる猫.mp4";
import React from "react";
export const Product4 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">product4</Text>
      <React.StrictMode>
        <video controls muted ref={videoRef}>
          <source src={video_mp4} type="video/mp4" />
        </video>
      </React.StrictMode>
    </>
  );
};
