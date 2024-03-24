import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  iconType: IconType;
  title: string;
  onClick: () => void;
};

// 共通のメニューボタン
export const CommonMenuButton = (props: Props) => (
  <Button
    w="100%"
    h="auto"
    px={6}
    py={3}
    variant="ghost"
    justifyContent="start"
    onClick={props.onClick}
  >
    {/* アイコン */}
    <Icon as={props.iconType} w={7} h={7} mr={2} mx={5} />
    {/* ボタンタイトル */}
    {props.title}
  </Button>
);
