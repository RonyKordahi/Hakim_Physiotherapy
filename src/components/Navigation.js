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

const Navigation = () => {

    // Detects if the navbar is opened or not
    // ↪ Default is closed
    const [open, setOpen] = useState(false);

    return (
        <StyledNavbar expand="lg" onToggle={() => setOpen(!open)} open={open}>

            {/* Logo */}
            <StyledNavbarBrand open={open} href="/">
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
                    <StyledNavLink href="/">Home</StyledNavLink>
                    <StyledNavLink href="/about">About Us</StyledNavLink>
                    <StyledNavLink href="/services">Our Services</StyledNavLink>
                    <StyledNavLink href="/gallery">Gallery</StyledNavLink>
                    <StyledNavLink href="/contact">Contact Us</StyledNavLink>
                </StyledNav>
            </Navbar.Collapse>

        </StyledNavbar>
    )
}

const StyledNavbar = styled(Navbar)`
    border-bottom: ${(props) => props.open ? "solid 2px var(--purple)" : "none"};
`

const StyledNavbarBrand = styled(NavbarBrand)`
    margin-left: 1rem;
`

const StyledBrandText = styled.span`
    margin-left: 1rem;
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
`

export default Navigation;