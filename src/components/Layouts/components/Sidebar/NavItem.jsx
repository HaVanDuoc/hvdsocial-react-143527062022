import React from "react";

const NavItem = (props) => {
    const { path, icon, text } = props;

    return (
        <div className="navItem">
            <a href={path}>
                <i>{icon}</i>
                <span>{text}</span>
            </a>
        </div>
    );
};

export default NavItem;
