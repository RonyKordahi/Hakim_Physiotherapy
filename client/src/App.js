// React Router Dom
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import GlobalStyles from "./styles/Globalstyles";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

// Components
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;