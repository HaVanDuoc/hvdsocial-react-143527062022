import React from "react";
import { Feed, Rightbar, Sidebar, Topbar } from "../components/";

const DefaultLayout = ({ children }) => {
    return (
        <div id="hvd_DefaultLayout">
            <Topbar />
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    );
};

export default DefaultLayout;
