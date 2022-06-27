import React from "react";
import { Feed, Rightbar, Sidebar, Topbar } from "../components/";

const DefaultLayout = ({ children }) => {
    return (
        <div id="defaultLayout">
            <Topbar />
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    );
};

export default DefaultLayout;
