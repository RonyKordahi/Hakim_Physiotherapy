// Styled Components
import styled from "styled-components";

// React Bootstrap
import { Row, Col } from "react-bootstrap";

// React Router Dom
import { Link } from "react-router-dom";

// Assets
import Logo from "../assets/Logo";

const Footer = () => {
    return (
        <footer>
            <Row>
                {/* Left Side Footer */}
                <Col xs={3}>
                    <FooterContent>

                        <Logo height={50} width={50} />

                        <SemiBoldFooterText>
                            Hakim
                        </SemiBoldFooterText>

                        <SemiBoldFooterText>
                            Physiotherapy
                        </SemiBoldFooterText>

                    </FooterContent>
                </Col>

                {/* Space */}
                <Col xs={2}></Col>

                {/* Right Side Footer */}
                <Col xs={7}>

                    <Row>

                        {/* Left Half */}
                        <Col xs={7}>
                            <FooterContent>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/services">Our Services</FooterLink>
                                <FooterLink to="/about">About Us</FooterLink>
                                <FooterLink to="/gallery">Gallery</FooterLink>
                            </FooterContent>
                        </Col>

                        {/* Right Half */}
                        <Col xs={5}>
                            <FooterContent>

                                <SemiBoldFooterText>
                                    Contact
                                </SemiBoldFooterText>

                                <LightFooterText>
                                    Phone
                                </LightFooterText>

                                <LightFooterText>
                                    Email
                                </LightFooterText>

                                <LightFooterText>
                                    Address
                                </LightFooterText>

                            </FooterContent>
                        </Col>

                    </Row>

                </Col>
            </Row>
        </footer>
    )
}

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
`

const SemiBoldFooterText = styled.span`
    color: white;
    font-size: 15px;
    font-weight: 500;
`

const LightFooterText = styled.span`
    color: white;
    font-size: 13px;
    font-weight: 200;
    margin-top: 10px;
`

const FooterLink = styled(Link)`
    color: white;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 500;
    text-decoration: none;
`

export default Footer;