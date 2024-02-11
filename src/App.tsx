import {
  ChakraProvider,
  Box,
  Flex,
  theme,
  useDisclosure,
  Show,
} from "@chakra-ui/react";
// componentsフォルダ配下のTopHeader.tsx、SideMenu.tsxをインポート
import { Header } from "./components/header";
import { SideMenu } from "./components/sideMenu";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Product1 } from "./routes/product1";
import { Product2 } from "./routes/product2";
import { Product3 } from "./routes/product3";
import { Product4 } from "./routes/product4";
import { Product5 } from "./routes/product5";
import { Product6 } from "./routes/product6";
import { Product7 } from "./routes/product7";
import { NotFound } from "./routes/NotFound";
import { DrawerMenu } from "./components/drawerMenu";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Box h={{ base: "80px", lg: "100px" }}>
        <Header onOpen={onOpen} />
      </Box>
      <Box
        w="100vw"
        h={{ base: "calc(100vh - 80px)", lg: "calc(100vh - 100px)" }}
      >
        <Flex w="100%" h="100%">
          <BrowserRouter>
            <DrawerMenu isOpen={isOpen} onClose={onClose} />

            <Show above="lg">
              {/* サイドメニューコンポーネント */}
              <SideMenu width="20vw" />
            </Show>

            <Box
              w={{ base: "100vw", lg: "80vw" }}
              ml={{ base: "0vw", lg: "20vw" }}
              py={3}
            >
              {/* サイドメニューアイコンをクリックするとここが切り替わる */}
              <Routes>
                <Route path="/" element={<Product1 />} />
                <Route path="product1" element={<Product1 />} />
                <Route path="product2" element={<Product2 />} />
                <Route path="product3" element={<Product3 />} />
                <Route path="product4" element={<Product4 />} />
                <Route path="product5" element={<Product5 />} />
                <Route path="product6" element={<Product6 />} />
                <Route path="product7" element={<Product7 />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
