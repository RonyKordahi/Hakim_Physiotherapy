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
    Nav,
    Navbar,
    NavLink,
    NavbarBrand,
    NavbarToggle,
} from "react-bootstrap";

// React Router Dom
import { Link } from "react-router-dom";

const Navigation = () => {

    // Detects if the navbar is opened or not
    // ↪ Default is closed
    const [open, setOpen] = useState(false);

    return (
        <StyledNavbar expand="lg" onToggle={() => setOpen(!open)} open={open}>

            {/* Logo */}
            <StyledNavbarBrand open={open} as={Link} to="/">
                <Logo width={35} height={35} />
                {
                    open && (
                        <StyledBrandText>
                            Hakim Physiotherapy
                        </StyledBrandText>
                    )
                }
            </StyledNavbarBrand>

            {/* Navbar Toggle */}
            {/* ↪ Symbol displayed changes based on state */}
            <StyledNavbarToggle aria-controls="basic-navbar-nav">
                {
                    !open
                        ? <Hamburger />
                        : <Close />
                }
            </StyledNavbarToggle>

            {/* Navbar Links */}
            <Navbar.Collapse>
                <StyledNav className="me-auto">
                    <StyledNavLink as={Link} to="/">Home</StyledNavLink>
                    <StyledNavLink as={Link} to="/about">About Us</StyledNavLink>
                    <StyledNavLink as={Link} to="/services">Our Services</StyledNavLink>
                    <StyledNavLink as={Link} to="/gallery">Gallery</StyledNavLink>
                    <StyledNavLink as={Link} to="/contact">Contact Us</StyledNavLink>
                </StyledNav>
            </Navbar.Collapse>

            {
                open && (
                    <BigLogoContainer>
                        <Logo width={300} height={300} />
                    </BigLogoContainer>
                )
            }

        </StyledNavbar>
    )
}

const StyledNavbar = styled(Navbar)`
    border-bottom: ${(props) => props.open ? "solid 2px var(--purple)" : "none"};
`

const StyledNavbarBrand = styled(NavbarBrand)`
    margin-left: 1rem;
    text-decoration: none;
`

const StyledBrandText = styled.span`
    margin-left: 1rem;
    font-size: 1.25rem;
`

const StyledNavbarToggle = styled(NavbarToggle)`
    border: none;

    &:focus {
        box-shadow: none;
    }
`

const StyledNav = styled(Nav)`
    align-items: center;
`

const StyledNavLink = styled(NavLink)`
    font-weight: bold;
    padding: 0.5rem;
    text-decoration: none;
`

const BigLogoContainer = styled.div`
    margin-top: 5rem;
    opacity: 0.5;
`

export default Navigation;