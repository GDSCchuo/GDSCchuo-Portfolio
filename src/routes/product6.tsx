import { Text } from "@chakra-ui/react";
import video_mp4 from "../videos/頭を抱える猫.mp4";
import React, { useEffect, useRef } from "react";

export const Product6 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">product6</Text>
      <React.StrictMode>
        <video controls muted ref={videoRef}>
          <source src={video_mp4} type="video/mp4" />
        </video>
      </React.StrictMode>
    </>
  );
};
