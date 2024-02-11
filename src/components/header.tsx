import { Flex, Text } from "@chakra-ui/react";

export const Header = () => (
  <Flex
    as="header"
    position="fixed"
    bg="red.300"
    width="full"
    height="128px"
    py={6}
  >
    <Text fontSize="5xl">GDSCchuo-Portfolio</Text>
  </Flex>
);
