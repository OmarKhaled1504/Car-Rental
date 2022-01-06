import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiFillCar } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";
import {IoCarSportOutline} from "react-icons/io5";
export const SidebarData = [
  {
    title: 'Customers',
    path: '/admin/Customers',
    icon: <FiUsers/>,
    cName: 'nav-text'
  },
  {
    title: 'Cars',
    path: '/admin/Cars',
    icon: <IoCarSportOutline/>,
    cName: 'nav-text'
  },
  {
    title: 'Reservations',
    path: '/admin/Reservations',
    icon: <AiIcons.AiFillCopy/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/admin/Reports',
    icon: <BiMoney/>,
    cName: 'nav-text'
  },
  {
    title: 'LogOut',
    path: '/',
    icon: <BiLogOut/>,
    cName: 'nav-text'
  }
];