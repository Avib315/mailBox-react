import { MdMoveToInbox } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
export const navArr = [
    {
        name:"draft",
        to:"draft",
        icon: RiPencilFill
    },
    {
        name:"inbox",
        to:"inbox",
        icon:MdMoveToInbox
    },
    {
        name:"send",
        to:"send",
        icon:IoIosSend
    },
    {
        name:"star",
        to:"star",
        icon:FaStar
    },
    {
        name:"trash",
        to:"trash",
        icon:IoTrashBin
    },

]
