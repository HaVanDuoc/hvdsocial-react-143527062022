import "./Topbar.scss";
import React from "react";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";

const Topbar = () => {
    return (
        <div id="hvd_Topbar">
            <div className="container">
                <div className="logo">
                    <a href="/">HVDSocial</a>
                </div>
                <div className="search">
                    <div className="SearchIconWrapper">
                        <SearchIcon />
                    </div>
                    <input type="text" placeholder="Tìm kiếm trên HVDSocial" />
                </div>
                <div className="buttonIcons">
                    <div className="wrap">
                        <MessageIcon />
                        <div className="bagde">
                            1
                        </div>
                    </div>
                    <div className="wrap">
                        <NotificationsActiveIcon />
                        <div className="bagde">
                            3
                        </div>
                    </div>
                    <div className="wrap account">
                        <PersonIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
