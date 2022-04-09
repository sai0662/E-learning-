import React from 'react';
import Header from '../../global/component/Header'
import "./AdminDash.css"
import { sideBarData } from '../sidebarData';
export default function AdimDashBoard() {
  return<div id='ad-dash'>
     <Header list={sideBarData}/>
  </div>;
}
