import { Box } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { CommonMenuButton } from "./commonButton";
import { MenuItems } from "../MenuItems";

type Props = {
  width: string;
};

export const SideMenu = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box w={props.width} h="full" position="fixed" py={3} bg="gray.300">
      {MenuItems.map((item) => (
        <Box>
          <CommonMenuButton
            iconType={item.icon}
            title={item.name}
            onClick={() => navigate(item.path)}
          />
        </Box>
      ))}
    </Box>
  );
};
