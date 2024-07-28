// Styled Components
import styled from "styled-components";

// Assets
import Logo from "../assets/Logo";

const Contact = () => {
    return (
        <main>

            {/* General Information */}
            <Section>

                <Title>Contact</Title>

                <p>
                    Do you have any questions? Give us a call or send us an email! We’re happy to discuss our services and explore how we can best meet your needs together.
                </p>

            </Section>

            {/* Contact Information */}
            <Section>
                <p>This would be the phone number</p>
                <p>This would be the  email address</p>
                <p>This would be the address</p>
            </Section>

            <Section>
                <LogoContainer>
                    <Logo width={500} height={500} />
                </LogoContainer>
            </Section>


        </main>
    )
}

const Section = styled.section`
    text-align: center;
    margin-top: 50px;
`

const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 25px;
`

const LogoContainer = styled.div`
    opacity: 0.5;
`

export default Contact;