import { Box, Button, Flex, Hide, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};
export const Header = (props: Props) => (
  <Flex
    as="header"
    bg="red.400"
    width="full"
    height="100px"
    px={{ base: 2, lg: 4 }}
  >
    <Text fontSize="5xl">GDSCchuo-Portfolio</Text>
    <Hide above="lg">
      <Button
        justifyContent="flex-end"
        variant="ghost"
        fontSize={{ base: "4xl", lg: "4xl" }}
        boxSize={{ base: 16, lg: 24 }}
        onClick={() => props.onOpen()}
      >
        <HamburgerIcon />
      </Button>
    </Hide>
    <Box
      ml={{ base: 2, lg: 4 }}
      fontSize={{ base: "xl", lg: "3xl" }}
      fontWeight="bold"
    ></Box>
  </Flex>
);
