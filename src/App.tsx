import { ChakraProvider, Box, Flex, theme } from "@chakra-ui/react";
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

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100wh">
        <Header />
        <Box mt="128px">
          <Flex>
            <BrowserRouter>
              <SideMenu />
              <Box w="70vw" ml="180px">
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
      </Flex>
    </ChakraProvider>
  );
};
