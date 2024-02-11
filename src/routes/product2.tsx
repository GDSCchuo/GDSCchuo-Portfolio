import { Text } from "@chakra-ui/react";
import video_mp4 from "../videos/ハァ？.mp4";
import { useEffect, useRef } from "react";
import React from "react";
export const Product2 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">product2</Text>
      <React.StrictMode>
        <video controls muted ref={videoRef}>
          <source src={video_mp4} type="video/mp4" />
        </video>
      </React.StrictMode>
    </>
  );
};
