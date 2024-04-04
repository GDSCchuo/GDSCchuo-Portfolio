import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Text, Link } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
export const MagicCircle = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <>
      <Text fontSize="5xl">iTL Mgic Circle HP</Text>
      <Text fontSize="4xl">編集中！！</Text>
      <Text>iTL Mgic Circle HP</Text>
      <Text>開発期間</Text>
      <Text>2022.12 - 2023.7</Text>
      <Text>背景・概要</Text>
      <Text>
        マジックサークルさんからHP作成の依頼があり、GDSCとして作成を担当。
      </Text>
      <Text>
        部員の募集やサークル紹介、公演依頼の受付などの要件を満たすHPを作成した。
      </Text>
      <a href="https://itl-magic-circle.netlify.app/">
        Go To iTL Magic Circle HP
      </a>
      <Link href="https://itl-magic-circle.netlify.app/" isExternal>
        <Text fontSize="3xl">
          Go To iTL Magic Circle HP
          <ExternalLinkIcon mx="2px" />
        </Text>
      </Link>
    </>
  );
};
