import { Box, Center, Image, Text, Flex, Heading } from "@chakra-ui/react";
import BCGlevel from "../images/BallCountGame/BCG Level.png";
import BCGgame from "../images/BallCountGame/BCG Game.png";
import BCGSDGS from "../images/BallCountGame/BCG SDGs.png";
import BCGanswer from "../images/BallCountGame/BCG Answer.png";

export const BallCountGame = () => {
  return (
    <>
      <Box padding={{ base: "4", md: "8", lg: "12" }}>
        <Center>
          <Heading size="2xl" marginTop="6" marginBottom="6">
            BallCountGame
          </Heading>
        </Center>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          gap="6"
        >
          <Box width={{ base: "100%", md: "75%" }} textAlign="left">
            <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
              GDSCchuoでは2022.12～2023.03の1年間のSollutionCharengeで,SDGs課題の4番目である「質の高い教育をみんなに」をもとに、BallCountGameを作成しました。
            </Text>
            <Box textAlign="center">
              <Text fontSize="1xl" fontWeight="bold">
                SDGs 4番目の課題
              </Text>
              <Center>
                <Image src={BCGSDGS} width="300" height="240" alt="SDGs4" />
              </Center>
            </Box>
            <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
              このBallCountGameは、算数障害の課題解決に向けて作ったウェブアプリです。つくるさいにGoogoleの技術は用いていないです。
            </Text>
            <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
              箱の中にボールが出たり入ったりするので、最終的に箱にボールがいくつ入っているか、を当てるゲームです。
            </Text>
          </Box>
        </Flex>
        <Center>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="center"
            mt="6"
            gap="45"
          >
            <Box textAlign="center">
              <Text fontSize="1xl" fontWeight="bold">
                ①レベルの設定を、 「Easy」「Normal」「Hard」 からする
              </Text>
              <Center>
                <Image src={BCGlevel} alt="レベル分け" />
              </Center>
            </Box>
            <Box textAlign="center">
              <Text fontSize="1xl" fontWeight="bold">
                ②このように青い箱の中に入るボールを数える。たまに入ったボールが出ることがあるからよく見る！！
              </Text>
              <Center>
                <Image src={BCGgame} alt="game内容" />
              </Center>
            </Box>
            <Box textAlign="center">
              <Text fontSize="1xl" fontWeight="bold">
                ③答えを入力する。 ☆が3つそろえば、ゲームクリア!!
              </Text>
              <Center>
                <Image src={BCGanswer} alt="入力画面" />
              </Center>
            </Box>
          </Flex>
        </Center>
      </Box>
    </>
  );
};
