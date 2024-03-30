import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface ImagePartProps {
  src: string;
  delay: number;
}
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export const ImagePart: React.FC<ImagePartProps> = ({ src, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Stack>
      <motion.div
        ref={ref}
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        onViewportEnter={() => setIsInView(true)}
        transition={{ duration: 1, delay: delay }}
      >
        <img src={src} alt="" onLoad={() => setIsLoaded(true)} />
      </motion.div>
    </Stack>
  );
};
