// React
import { useEffect } from "react"

// React Router Dom
import { useNavigate } from "react-router-dom"

// Styled Components
import styled from "styled-components"

// React Bootstrap
import { Alert } from "react-bootstrap"

const NotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {        
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }, [])

    return (
        <main>
            <NotFoundContainer>

                <Alert variant="warning">
                    Page not found, returning to home page.
                </Alert>

            </NotFoundContainer>
        </main>
    )
}

const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoadingText = styled.span`
    margin-left: 25px;
`

export default NotFound