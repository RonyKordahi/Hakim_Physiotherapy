// Styled Components
import styled from "styled-components";

// React Boostrap
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";

// Assets
import gallery_1 from "../assets/gallery/gallery_1.jpg"
import gallery_2 from "../assets/gallery/gallery_2.jpg"
import gallery_3 from "../assets/gallery/gallery_3.jpg"
import gallery_4 from "../assets/gallery/gallery_4.jpg"
import gallery_5 from "../assets/gallery/gallery_5.jpg"
import gallery_6 from "../assets/gallery/gallery_6.jpg"
import gallery_7 from "../assets/gallery/gallery_7.jpg"

const Gallery = () => {

    // Store them in an array to map the images into the carousel
    const galleryImages = [
        { src: gallery_1, caption: "It's all me" },
        { src: gallery_2, caption: "Quiet time" },
        { src: gallery_3, caption: "Plants galore" },
        { src: gallery_4, caption: "Violet" },
        { src: gallery_5, caption: "Harry Potter vibes with some pink shoes" },
        { src: gallery_6, caption: "Coffee date" },
        { src: gallery_7, caption: "Facetime with the gang" }
    ];

    return (
        <main>
            <Section>

                <h2>Gallery</h2>


                <StyledCarousel>

                    {
                        galleryImages.map((image, index) => {
                            return (
                                <StyledCarouselItem key={`gallery_${index}`}>
                                    <Image src={image.src} alt={"gallery image"} />

                                    <StyledCarouselCaption>
                                        {image.caption}
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

const Section = styled.section`
    text-align: center;
    margin-top: 50px;
`

const StyledCarousel = styled(Carousel)`
    margin: auto;
    border-radius: 10px;
    margin-bottom: 75px;

    /* PC + laptop screens */
    width: 33%;

    /* Large screens + landscape mode */
    @media screen and (max-width: 1024px) {
        width: 50%;
    }

    /* Phone screens */
    @media screen and (max-width: 780px) {
        width: 75%;
    }
`

const StyledCarouselItem = styled(CarouselItem)`
    padding: 25px;
    border-radius: 10px;
    position: static !important;
    background: rgb(191,174,193);
    background: linear-gradient(90deg, rgba(191,174,193,1) 0%, rgba(212,201,213,1) 100%);
`

const Image = styled.img`
    border-radius: 5px;
`

const StyledCarouselCaption = styled(CarouselCaption)`
    bottom: -70px;
    display: flex;
    position: absolute;
    font-weight: normal;
    align-items: center;
    color: var(--purple);
    justify-content: center;
`

export default Gallery;