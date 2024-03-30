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

import { AboutUs } from "./routes/AboutUs";
import { BallCountGame } from "./routes/BallCountGame";
import { CreditCal } from "./routes/CreditCal";
import { ITLFreeClassroom } from "./routes/iTLFreeClassroom";
import { ITLStudentBoard } from "./routes/iTLStudentBoard";
import { Jearn } from "./routes/Jearn";
import { MagicCircle } from "./routes/MagicCircle";
import { PinPointMe } from "./routes/PinPointMe";
import { SolutionChallenge } from "./routes/SolutionChallenge";
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
              ml={{ base: "0vw", lg: "19vw" }}
              p={{ base: "3", lg: "4" }}
            >
              {/* サイドメニューアイコンをクリックするとここが切り替わる */}
              <Routes>
                <Route path="/" element={<AboutUs />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="BallCountGame" element={<BallCountGame />} />
                <Route path="CreditCal" element={<CreditCal />} />
                <Route path="iTLFreeClassroom" element={<ITLFreeClassroom />} />
                <Route path="iTLStudentBoard" element={<ITLStudentBoard />} />
                <Route path="Jearn" element={<Jearn />} />
                <Route path="MagicCircle" element={<MagicCircle />} />
                <Route path="PinPointMe" element={<PinPointMe />} />
                <Route
                  path="SolutionChallenge"
                  element={<SolutionChallenge />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
