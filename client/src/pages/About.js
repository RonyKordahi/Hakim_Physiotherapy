// Styled Components
import styled from "styled-components";

// Assets
import MireilleSrc from "../assets/Mireille.png";

const About = () => {
    return (
        <main>

            {/* General Information */}
            <Section>
                <Title>About Us</Title>

                <p>
                    We are a multidisciplinary clinic offering comprehensive services centered around physiotherapy. Our primary focus is on helping our patients by creating personalized treatment plans to meet their unique needs and ensure their recovery. We specialize in paediatrics, with a particular emphasis on children with special needs.
                </p>
            </Section>

            {/* Meet the Team */}
            <Section>

                <h2>Meet the Team</h2>

                <ImageContainer>
                    <Image src={MireilleSrc} alt="Mireille" />
                </ImageContainer>

                <h2>Mireille Hakim</h2>

                <h3>Owner, physiotherapist, and behavior clinician</h3>

                <p>
                    Mireille is a licensed physiotherapist who completed her education and training at McGill University. She has pursued numerous post-graduate courses to stay updated with the latest techniques in her field. With 10 years of experience, Mireille has also worked as a behavior therapist for children with special needs. She integrates her physiotherapy techniques to maximize results for her patients.
                </p>

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

const ImageContainer = styled.div`
    margin: 25px auto;
    width: fit-content;
    border-radius: 15px;
    background: rgb(191,174,193);
    background: linear-gradient(90deg, rgba(191,174,193,1) 0%, rgba(212,201,213,1) 100%);
`

const Image = styled.img`
    margin: 25px;
    height: 300px;
    border-radius: 15px;
`

export default About;