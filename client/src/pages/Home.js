// Styled Components
import styled from "styled-components";

// React Router Dom
import { useNavigate } from "react-router-dom";

// React Boostrap
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";

// Data
import testimonials from "../data/testimonials.json";

// Assets
import Logo from "../assets/Logo";
import OpenQuote from "../assets/OpenQuote";
import CloseQuote from "../assets/CloseQuote";

const Home = () => {

    const navigate = useNavigate();

    const navigateToServices = () => {
        navigate("/services");
    }

    return (
        <main>

            {/* Logo and Title */}
            <LogoContainer>

                <Logo width={100} height={100} />

                <TitleContainer>
                    <Title>Hakim</Title>
                    <Title>Physiotherapy</Title>
                </TitleContainer>

            </LogoContainer>

            {/* General Information */}
            <Section>
                <p>
                    We are a multidisciplinary clinic offering comprehensive services centered around physiotherapy. Our primary focus is on helping our patients by creating personalized treatment plans to meet their unique needs and ensure their recovery. We specialize in pediatrics, with a particular emphasis on children with special needs.
                </p>
            </Section>

            {/* Our Services */}
            <Section>
                <h2>Our Services</h2>

                <p>
                    We offer different services depending on our patient’s needs. We offer physiotherapy as well as behavior therapy for children.
                </p>

                <StyledButton onClick={navigateToServices}>
                    Learn More
                </StyledButton>
            </Section>

            {/* Carousel */}
            <Section>

                <h2>Testimonials</h2>

                <StyledCarousel indicators={false}>

                    {
                        Object.keys(testimonials).map((key) => {
                            return (
                                <StyledCarouselItem interval={10000} key={key}>

                                    <CarouselContent>

                                        <OpenQuotePosition>
                                            <OpenQuote />
                                        </OpenQuotePosition>

                                        <CarouselText>{testimonials[key]}</CarouselText>

                                        <BottomQuotePosition>
                                            <CloseQuote />
                                        </BottomQuotePosition>
                                    </CarouselContent>

                                    <StyledCarouselCaption>
                                        {key}
                                    </StyledCarouselCaption>
                                </StyledCarouselItem>
                            )
                        })
                    }

                </StyledCarousel>

            </Section>

        </main>
    )
}

const LogoContainer = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`

const TitleContainer = styled.div`
    margin-left: 10px;
`

const Title = styled.h1`
    font-weight: bold;
`

const Section = styled.section`
    text-align: center;
    margin-top: 50px;
`

const StyledButton = styled.button`
    color: white;
    border: none;
    background-color: var(--purple);
    border-radius: 5px;
    padding: 10px 15px;
`

const StyledCarousel = styled(Carousel)`
    margin: auto;
    margin-top: 25px;
    border-radius: 10px;
    border: whitesmoke solid 2px;
    box-shadow: 10px 10px 10px lightgray;
    
    /* PC + laptop screens */
    width: 25%;
    height: 200px;

    /* Large screens + landscape mode */
    @media screen and (max-width: 1024px) {
        width: 50%;
    }

    /* Phone screens */
    @media screen and (max-width: 780px) {
        width: 75%;
        height: 300px;
    }
`

const StyledCarouselItem = styled(CarouselItem)`
    font-weight: bold;
    position: static !important;
`

const CarouselContent = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    
    /* PC + laptop screens */
    height: 200px;

    /* Phone screens */
    @media screen and (max-width: 780px) {
        height: 300px;
    }
`

const OpenQuotePosition = styled.div`
    position: absolute;
    top: 5px;
    left: 5px;
`

const CarouselText = styled.p`
    padding: 5px;
`

const BottomQuotePosition = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
`

const StyledCarouselCaption = styled(CarouselCaption)`
    bottom: -10px;
    position: absolute;
    font-weight: normal;
    color: var(--purple);
`

export default Home;