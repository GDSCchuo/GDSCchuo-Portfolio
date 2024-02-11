import { Flex, Text } from "@chakra-ui/react";

export const Header = () => (
  <Flex
    as="header"
    position="fixed"
    bg="red.400"
    width="full"
    height="128px"
    py={6}
  >
    <Text fontSize="4xl">GDSCchuo-Portfolio</Text>
  </Flex>
);
