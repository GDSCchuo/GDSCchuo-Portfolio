import { Button, Flex, Hide, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};
export const Header = (props: Props) => (
  <Flex
    as="header"
    position="fixed"
    bg="teal.200"
    width="full"
    height="100px"
    textAlign="right"
    py={{ base: 4, lg: 1 }}
    px={{ base: 4, lg: 6 }}
  >
    <Hide above="lg">
      <Button
        variant="ghost"
        fontSize={{ base: "4xl", lg: "4xl" }}
        boxSize={{ base: 16, lg: 24 }}
        onClick={() => props.onOpen()}
      >
        <HamburgerIcon />
      </Button>
    </Hide>
    <Text fontSize={{ base: "3xl", lg: "6xl" }} py={{ base: 2, lg: 0 }}>
      GDSCchuo-Portfolio
    </Text>
  </Flex>
);
