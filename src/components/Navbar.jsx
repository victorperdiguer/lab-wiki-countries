import React from "react";

const Navbar = (props) => {
    const {children} = props;
    return (
        <div className="navbar-container">
            <nav>
                <h1>{children}</h1>
            </nav>
        </div>
    )
}

export default Navbar;