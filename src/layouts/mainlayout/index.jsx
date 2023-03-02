import React from "react";
import { Container } from "reactstrap";
import Footer2 from "./footer";
import Navbar2 from "./navbar";
const MainLayout = ({ children }) => {
    return (
        <Container>
            <Navbar2 />
            {children}
            <Footer2 />
        </Container>
    )

}
export default MainLayout;