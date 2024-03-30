import { MdGroup, MdMessage } from "react-icons/md";
import { IoMdBasketball } from "react-icons/io";
import {
  FaCalculator,
  FaRegBuilding,
  FaBookOpen,
  FaMagic,
  FaHandPointRight,
  FaRegLightbulb,
} from "react-icons/fa";

export const MenuItems = [
  {
    name: "AboutUs",
    icon: MdGroup,
    path: "AboutUs",
  },
  {
    name: "BallCountGame",
    icon: IoMdBasketball,
    path: "BallCountGame",
  },
  {
    name: "CreditCal",
    icon: FaCalculator,
    path: "CreditCal",
  },
  {
    name: "iTLFreeClassroom",
    icon: FaRegBuilding,
    path: "iTLFreeClassroom",
  },
  {
    name: "iTLStudentBoard",
    icon: MdMessage,
    path: "iTLStudentBoard",
  },
  {
    name: "JEARN",
    icon: FaBookOpen,
    path: "Jearn",
  },
  {
    name: "MagicCircle",
    icon: FaMagic,
    path: "MagicCircle",
  },
  {
    name: "PinPointMe",
    icon: FaHandPointRight,
    path: "PinPointMe",
  },
  {
    name: "SolutionChallenge",
    icon: FaRegLightbulb,
    path: "SolutionChallenge",
  },
];
