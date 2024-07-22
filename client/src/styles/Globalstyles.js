import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* ********* */
/* CSS Reset */
/* ********* */

/* 0. Maxing out page height */
#root {
    min-height: 100px;
    max-height: 100vh;
}

/* 1. Use a more-intuitive box-sizing model. */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* 2. Remove default margin */
/* 3. Add accessible line-height */
* {
    margin: 0;
    color: #714a74;
    font-family: Poppins !important;
    line-height: calc(1em + 0.5rem);
}

/* 4. Improve text rendering */
body {
    -webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
    max-width: 100%;
    visibility: visible !important;
}

/* 6. Remove built-in form typography styles */
input,
button,
textarea,
select {
    font: inherit;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

/* 8. Create a root stacking context */
#root,
#__next {
    isolation: isolate;
}

/* Variables */
:root {
    --purple: #714a74;
}

/* *********** */
/* Core Styles */
/* *********** */
main {
    /* Adapts based on user being logged in or not */
    margin: auto;
    padding: 25px;
    min-height: calc(100vh - 12rem);
}

footer {
    height: 12rem;
    padding: 25px;
    background-color: var(--purple);
}

/* **************** */
/* Carrousel Styles */
/* **************** */
.carousel-control-next, 
.carousel-control-prev {
    top: 45%;
    opacity: 1;
    padding: 5px;
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
    background-color: var(--purple);
}

.carousel-control-next {
    margin-right: -50px;
}

.carousel-control-prev {
    margin-left: -50px;
}

.carousel-indicators {
    bottom: -100px !important;
}

.carousel-indicators button {
    border-radius: 50%;
    opacity: 1 !important;
    width: 15px !important;
    height: 15px !important;
    background-color: #ededed !important;
}

.carousel-indicators button.active {
    background-color: var(--purple) !important;
}

.carousel-inner{
    overflow: visible;
}
`

export default GlobalStyles;