import React, { useState } from "react";
import "./index.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
} from "reactstrap";

const Navbar2 = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <div
                class="d-flex justify-content-between p-3 bg-white "
                style={{ position: "fixed", width: "100%", zIndex: "999" }}
            >
                <div>
                    <NavLink href="/">
                        {" "}
                        <img src="https://jiran360.my/assets/web/images/logo.svg" />{" "}
                    </NavLink>
                </div>
                <div>
                    <div
                        class="d-flex gap-5 aling-items-center p-1"
                        style={{
                            fontSize: "medium",
                            fontFamily: "Outfit-R",
                            color: "#6c757d",
                        }}
                    >
                        {" "}
                        <div className="box2">
                            <NavLink href="/about">About </NavLink>
                        </div>
                        <div className="box2">
                            <NavLink className="box2" href="/neighbours">
                                Neighbours{" "}
                            </NavLink>
                        </div>
                        <div className="box2">
                            <NavLink className="box2" href="/agencies">
                                Agencies{" "}
                            </NavLink>
                        </div>
                        <div className="box2">
                            <NavLink className="box2" href="/business">
                                Business{" "}
                            </NavLink>
                        </div>
                        <div className="box2">
                            <NavLink className="box2" href="/contact">
                                {" "}
                                Contact us
                            </NavLink>
                        </div>
                        <div className="pt-1">
                            <span
                                className="vr"
                                sx={{
                                    height: "50px",
                                    // padding: "12px 0 10px"
                                }}
                            ></span>
                        </div>
                        <NavLink href="/login">
                            {" "}
                            <span
                                style={{
                                    color: "red",
                                    borderBottom: "1px solid red",
                                    paddingBottom: "5px",
                                }}
                            >
                                SIGN IN <i class="bi bi-box-arrow-in-right"></i>
                            </span>
                        </NavLink>
                        <NavLink href="/signup">
                            <button
                                type="button"
                                style={{ color: "#9227ff", border: "1px solid #9227ff" }}
                                class=" box3 bg-beige rounded-pill pt-2 pb-2 pe-2 ps-2"
                            >
                                <i class="bi bi-person"></i>Create an Account
                            </button>{" "}
                        </NavLink>
                    </div>
                </div>
            </div>

            <div>{children}</div>
        </div>
    );
};

export default Navbar2;
