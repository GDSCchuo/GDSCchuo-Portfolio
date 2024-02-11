import { Text } from "@chakra-ui/react";
import video_mp4 from "../videos/猫パンチ.mp4";
import { useEffect, useRef } from "react";
import React from "react";
export const Product5 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">product5</Text>
      <React.StrictMode>
        <video controls muted ref={videoRef}>
          <source src={video_mp4} type="video/mp4" />
        </video>
      </React.StrictMode>
    </>
  );
};
