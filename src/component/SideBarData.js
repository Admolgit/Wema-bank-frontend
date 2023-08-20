import React from "react";
// import * as ImIcons from "react-icons/im";
// import * as RiIcons from "react-icons/ri";
// import * as FaIcons from "react-icons/fa";
// //import * as BiIcons from "react-icons/bi";
// import * as GiIcons from "react-icons/gi";
// import * as BsIcons from "react-icons/bs";
// import * as IoIcons from "react-icons/io";
import IconVerifiers from '../assets/Icon-Verifiers.svg';
import DealsIcon from '../assets/Deals.png';
import TransactionIcon from '../assets/Icon-Transactions.png';

export const SideBarData = [
  {
    title: "Verifiers",
    path: "/",
    icon: `${IconVerifiers}`,
  },
  {
    title: "Deals",
    path: "/deals",
    icon: `${DealsIcon}`,
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: `${TransactionIcon}`,
  },
];
