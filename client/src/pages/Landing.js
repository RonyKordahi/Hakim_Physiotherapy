// React
import { useEffect } from "react"

// React Router Dom
import { useNavigate } from "react-router-dom"

// Styled Components
import styled from "styled-components"

// React Bootstrap
import { Spinner } from "react-bootstrap"

const Landing = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 1500);
    }, [])

    return (
        <main>
            <LandingContainer>
                <Spinner />
                <LoadingText>Loading...</LoadingText>
            </LandingContainer>
        </main>
    )
}

const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoadingText = styled.span`
    margin-left: 25px;
`

export default Landing