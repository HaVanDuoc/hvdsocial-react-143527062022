import React from "react";
import "./DefaultLayout.scss";
import { Topbar } from "../components/";

const DefaultLayout = ({ children }) => {
    return (
        <div id="hvd_DefaultLayout">
            <Topbar />
            {children}
        </div>
    );
};

export default DefaultLayout;
