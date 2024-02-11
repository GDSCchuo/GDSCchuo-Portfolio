import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CommonMenuButton } from "./commonButton";
import { MenuItems } from "../MenuItems";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const DrawerMenu = (props: Props) => {
  // React Routerのページ遷移フック
  const navigate = useNavigate();

  const onClickMenu = (path: string) => {
    // ページ遷移
    navigate(path);
    // ドロワーメニューを閉じる
    props.onClose();
  };

  return (
    <Drawer placement="left" isOpen={props.isOpen} onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent bg="gray.300">
        <DrawerBody px={0} py={6}>
          <Flex direction="column">
            {MenuItems.map((item) => (
              <Box>
                {/* 共通のメニューボタンコンポーネント */}
                <CommonMenuButton
                  iconType={item.icon}
                  title={item.name}
                  onClick={() => onClickMenu(item.path)}
                />
              </Box>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
