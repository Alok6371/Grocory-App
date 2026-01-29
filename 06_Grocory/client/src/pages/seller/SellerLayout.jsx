import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { MdOutlineDashboard } from "react-icons/md"
import { GoVersions } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";


const SellerLayout = () => {

    const dashboardicon = (
        <MdOutlineDashboard />
    );

    const overviewicon = (
        <GoVersions />
    );

    const chaticon = (
        <IoChatboxEllipsesOutline />
    );

    const sidebarLinks = [
        { name: "Dashboard", path: "/", icon: dashboardicon },
        { name: "Overview", path: "/overview", icon: overviewicon },
        { name: "Chat", path: "/chat", icon: chaticon },
    ];

    return (
        <div>Alok</div>
    );
}

export default SellerLayout