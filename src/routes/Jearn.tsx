import { Box, Center, Image, Text, Flex, Heading } from "@chakra-ui/react";
import old_img from "../images/JEARN/old_JEARN.png";
import new_img from "../images/JEARN/new_JEARN.png";

export const Jearn = () => {
  return (
    <Box padding={{ base: "4", md: "8", lg: "12" }}>
      <Center>
        <Heading size="2xl" marginTop="6" marginBottom="6">
          JEARN
        </Heading>
      </Center>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        gap="6"
      >
        <Box width={{ base: "100%", md: "75%" }} textAlign="left">
          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            GDSCchuoは非営利団体JEARN様からの依頼を受け、ホームページの刷新プロジェクトを引き受けました。
          </Text>
          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            当プロジェクトでは、現在のHPのコンテンツを洗い出し、課題を提起するとともに、JEARNのご意向を考慮しながら新規ホームページの設計を行いました。
          </Text>
          <Text mb="5" fontSize={{ base: "md", md: "lg" }}>
            そして設計が完成した後、デザインを作成し、JEARNからの承諾を得た後に開発工程に移りました。
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
              旧デザイン(一部分)
            </Text>
            <Center>
              <Image src={old_img} alt="旧デザインのHP" />
            </Center>
          </Box>
          <Box textAlign="center">
            <Text fontSize="1xl" fontWeight="bold">
              刷新後(一部分)
            </Text>
            <Center>
              <Image src={new_img} alt="刷新後のHP" />
            </Center>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};
