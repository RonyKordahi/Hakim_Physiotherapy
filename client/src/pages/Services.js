// Styled Components
import styled from "styled-components";

// Assets
import PhysioSrc from "../assets/services/service_physio.png";
import BehaviorSrc from "../assets/services/service_behavior.png";
import NeedlingSrc from "../assets/services/service_needling.png";

const Services = () => {
    return (
        <main>

            {/* General Information */}
            <Section>

                <Title>Our Services</Title>

                <p>
                    We offer different services depending on our patient’s needs. We offer physiotherapy as well as behavior therapy for children.
                </p>

            </Section>

            {/* Service: Dry Needling */}
            <Section>

                <h2>Dry Needling</h2>

                <ImageContainer>
                    <img src={NeedlingSrc} alt="Dry Needling" />
                </ImageContainer>

            </Section>

            {/* Service: Behavior Therapy */}
            <Section>

                <h2>Behavior Therapy</h2>

                <ImageContainer>
                    <img src={BehaviorSrc} alt="Behavior Therapy" />
                </ImageContainer>

            </Section>

            {/* Service: Physiotherapy */}
            <Section>

                <h2>Physiotherapy</h2>

                <ImageContainer>
                    <img src={PhysioSrc} alt="Physiotherapy" />
                </ImageContainer>

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
    padding: 25px;
    margin: 25px auto;
    width: fit-content;
    border-radius: 15px;
    background: rgb(191,174,193);
    background: linear-gradient(90deg, rgba(191,174,193,1) 0%, rgba(212,201,213,1) 100%);
`

export default Services;