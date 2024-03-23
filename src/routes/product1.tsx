import { Text } from "@chakra-ui/react";
import React from "react";
import { useEffect, useRef } from "react";
import video_mp4 from "../videos/Dubidubidu猫（ちぴちゃぱ）.mp4";

export const Product1 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">これはテストです</Text>
      <Text fontSize="5xl">product1</Text>
      <React.StrictMode>
        <video controls muted ref={videoRef}>
          <source src={video_mp4} type="video/mp4" />
        </video>
      </React.StrictMode>
    </>
  );
};
