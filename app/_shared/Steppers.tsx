import {
  HiServerStack,
  HiClipboardDocumentList,
  HiMiniSquaresPlus,
} from "react-icons/hi2";

export const Steppers = [
  {
    id: 1,
    name: "Category",
    icon: <HiServerStack />,
    path: "/create-course",
  },
  {
    id: 2,
    name: "Topic and Desc",
    icon: <HiClipboardDocumentList />,
    path: "/create-course/topic&desc",
  },
  {
    id: 3,
    name: "Options",
    icon: <HiMiniSquaresPlus />,
    path: "/create-course/options",
  },
];
