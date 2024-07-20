// React
import { useState } from "react";

// Styles
import styled from "styled-components";

// Assets
import Logo from "../assets/Logo";
import Close from "../assets/Close";
import Hamburger from "../assets/Hamburger";

// React Bootstrap
import {
    // Navbar
    Nav,
    Navbar,
    NavLink,
    NavbarBrand,
    NavbarToggle,
    NavbarOffcanvas,

    // Offcanvas=
    OffcanvasBody,
    OffcanvasTitle,
    OffcanvasHeader,
} from "react-bootstrap";

// React Router Dom
import { Link } from "react-router-dom";

const Navigation = () => {

    // Detects if the navbar is opened or not
    // ↪ Default is closed
    const [open, setOpen] = useState(false);

    return (
        <Navbar expand="lg" onToggle={() => setOpen(!open)}>

            {/* Logo */}
            <StyledNavbarBrand as={Link} to="/">
                <Logo width={35} height={35} />
            </StyledNavbarBrand>

            {/* Navbar Toggle */}
            <StyledNavbarToggle aria-controls="navbarScroll">
                <Hamburger />
            </StyledNavbarToggle>

            {/* Navbar Offcanvas */}
            <NavbarOffcanvas show={open}>

                {/* Navbar Offcanvas Header */}
                <StyledOffCanvasHeader>
                    <OffcanvasTitle>
                        <Logo width={35} height={35} />
                        <StyledBrandText>
                            Hakim Physiotherapy
                        </StyledBrandText>
                    </OffcanvasTitle>

                    <StyledCloseButton onClick={() => setOpen(false)}>
                        <Close />
                    </StyledCloseButton>

                </StyledOffCanvasHeader>

                {/* Navbar Offcanvas Body */}
                <OffcanvasBody>

                    {/* Navbar Links */}
                    <StyledNav className="me-auto" navbarScroll onClick={() => setOpen(false)}>
                        <StyledNavLink as={Link} to="/">Home</StyledNavLink>
                        <StyledNavLink as={Link} to="/about">About Us</StyledNavLink>
                        <StyledNavLink as={Link} to="/services">Our Services</StyledNavLink>
                        <StyledNavLink as={Link} to="/gallery">Gallery</StyledNavLink>
                        <StyledNavLink as={Link} to="/contact">Contact Us</StyledNavLink>
                    </StyledNav>

                    {/* Navbar Big Logo */}
                    {
                        open && (
                            <BigLogoContainer>
                                <Logo width={300} height={300} />
                            </BigLogoContainer>
                        )
                    }

                </OffcanvasBody>

            </NavbarOffcanvas>

        </Navbar>
    )
}

// Separates the logo from the page border
const StyledNavbarBrand = styled(NavbarBrand)`
    margin-left: 1rem;
    text-decoration: none;
`

const StyledOffCanvasHeader = styled(OffcanvasHeader)`
    justify-content: space-between
`

// Separates the text from the logo
const StyledBrandText = styled.span`
    margin-left: 1rem;
`

const StyledCloseButton = styled.button`
    border: none;
    background-color: white;
`

// Remove border and box from the toggle button
const StyledNavbarToggle = styled(NavbarToggle)`
    border: none;

    &:focus {
        box-shadow: none;
    }
`

// Center the links
const StyledNav = styled(Nav)`
    align-items: center;
`

// Revert to default style
const StyledNavLink = styled(NavLink)`
    padding: 0.5rem;
    font-weight: bold;
    text-decoration: none;
`

// Makes big logo transparent
const BigLogoContainer = styled.div`
    opacity: 0.5;
    margin-top: 5rem;
`


export default Navigation;