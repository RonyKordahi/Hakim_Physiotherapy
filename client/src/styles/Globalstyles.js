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
    line-height: calc(1em + 0.5rem);
    color: #714a74 !important;
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
`

export default GlobalStyles;