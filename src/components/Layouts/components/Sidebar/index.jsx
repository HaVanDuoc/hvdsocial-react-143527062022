import React from "react";
import NavItem from "./NavItem";
import "./Sidebar.scss";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import GroupsIcon from "@mui/icons-material/Groups";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";

const Sidebar = () => {
    const navItems = [
        {
            id: 1,
            path: "/",
            icon: <HomeIcon />,
            text: "Trang chủ",
        },
        {
            id: 2,
            path: "/friends",
            icon: <PeopleOutlineIcon />,
            text: "Bạn bè",
        },
        {
            id: 3,
            path: "/groups",
            icon: <GroupsIcon />,
            text: "Nhóm",
        },
        {
            id: 4,
            path: "/pages",
            icon: <EmojiFlagsIcon />,
            text: "Trang",
        },
        {
            id: 5,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 6,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 7,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 8,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 9,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 10,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 11,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 12,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 13,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 14,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
        {
            id: 15,
            path: "/pages",
            icon: <MusicVideoIcon />,
            text: "Watch",
            suggestion: "true",
        },
    ];
    return (
        <div id="hvd_Sidebar">
            <div className="navSidebar">
                {navItems.map((item) => {
                    let param;
                    if (item.id < 5) {
                        param = <NavItem key={item.id} {...item} />;
                    }
                    return param;
                })}
            </div>

            <div className="suggestionSidebar">
                <div className="title">Gợi ý</div>
                {navItems.map((item) => {
                    let param;
                    if (item.id > 4) {
                        param = <NavItem key={item.id} {...item} />;
                    }
                    return param;
                })}
            </div>
        </div>
    );
};

export default Sidebar;
