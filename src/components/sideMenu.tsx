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
    <Box w={props.width} position="fixed" h="full" py={3} bg="green.200">
      {MenuItems.map((item) => (
        <Box textAlign="left">
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
