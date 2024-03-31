import { Text } from "@chakra-ui/react";
import video_mp4 from "../videos/うるさいヤギ.mp4";
import { useEffect, useRef } from "react";
import React from "react";
export const ITLStudentBoard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">product3</Text>
      <React.StrictMode>
        <h1>sollution challenge 2024</h1>
        <video controls muted ref={videoRef}>
          <source src={video_mp4} type="video/mp4" />
        </video>
      </React.StrictMode>
    </>
  );
};
