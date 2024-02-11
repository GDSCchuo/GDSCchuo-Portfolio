import { Box, Button, Icon } from "@chakra-ui/react";
import {
  MdMessage,
  MdDashboard,
  MdEmail,
  MdAccountBox,
  MdInsertChart,
  MdWbSunny,
  MdRateReview,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";

export const SideMenu = () => {
  const sideMenuItems = [
    {
      name: "Product1",
      icon: MdDashboard,
      path: "product1",
    },
    {
      name: "Product2",
      icon: MdAccountBox,
      path: "product2",
    },
    {
      name: "Product3",
      icon: MdEmail,
      path: "product3",
    },
    {
      name: "Product4",
      icon: MdMessage,
      path: "product4",
    },
    {
      name: "Product5",
      icon: MdInsertChart,
      path: "product5",
    },
    {
      name: "Product6",
      icon: MdWbSunny,
      path: "product6",
    },
    {
      name: "Product7",
      icon: MdRateReview,
      path: "product7",
    },
  ];
  const navigate = useNavigate();
  return (
    <Box w="15vw" m="0px" bg="green.300">
      {sideMenuItems.map((item) => (
        <label>
          <Box mt="20px" ml="10px">
            <Button variant="ghost" onClick={() => navigate(item.path)}>
              <Icon as={item.icon} w={7} h={7} mr="13px" />
              {item.name}
            </Button>
          </Box>
        </label>
      ))}
    </Box>
  );
};
