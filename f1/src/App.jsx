


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services/Services";
import ServiceCategory from "./pages/services/ServiceCategory";
import ServicePage from "./pages/services/ServicePage";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import TermsAndConditions from "./pages/terms-and-conditions";
import PrivacyPolicy from "./pages/privacy-policy";
import RefundPolicy from "./pages/refund-policy";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import SocialSidebar from "./components/SocialSidebar";
import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   return (
//     <Router>
//        <ScrollToTop />
//       <CustomNavbar />
//       <div style={{ marginTop: "80px", padding: "20px" }}>
    
       
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/services/immigration" element={<ServiceCategory type="immigration" />} />
//           <Route path="/services/education" element={<ServiceCategory type="education" />} />
//           <Route path="/services/training" element={<ServiceCategory type="training" />} />

//           <Route path="/services/immigration/:slug" element={<ServicePage />} />
//           <Route path="/services/education/:slug" element={<ServicePage />} />
//           <Route path="/services/training/:slug" element={<ServicePage />} />

//           {/* <Route path="/services/web-development" element={<WebDevelopment />} />
//           <Route path="/services/digital-marketing" element={<DigitalMarketing />} /> */}
//           <Route path="/news" element={<News />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />

//           <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/refund-policy" element={<RefundPolicy />} />
//         </Routes>
//       </div>
//       <Footer />
//         <SocialSidebar />
//     </Router>
//   );
// }
// src/App.jsx (add these new routes)
function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomNavbar />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/immigration" element={<ServiceCategory type="immigration" />} />
          <Route path="/services/education" element={<ServiceCategory type="education" />} />
          <Route path="/services/training" element={<ServiceCategory type="training" />} />

          {/* Existing routes */}
          <Route path="/services/immigration/pr-visa" element={<ServicePage />} />
          <Route path="/services/immigration/visit-visa" element={<ServicePage />} />
          <Route path="/services/immigration/business-visa" element={<ServicePage />} />
          <Route path="/services/education/student-visa" element={<ServicePage />} />
          <Route path="/services/training/ielts-coaching" element={<ServicePage />} />
          <Route path="/services/training/pte-coaching" element={<ServicePage />} />
          <Route path="/services/training/sat-coaching" element={<ServicePage />} />

          {/* New subclass routes */}
          <Route path="/services/immigration/partner-visa" element={<ServicePage />} />
          <Route path="/services/immigration/employee-sponsored-visa" element={<ServicePage />} />
          <Route path="/services/immigration/subclass-189" element={<ServicePage />} />
          <Route path="/services/immigration/subclass-190" element={<ServicePage />} />
          <Route path="/services/immigration/subclass-491" element={<ServicePage />} />
          <Route path="/services/immigration/subclass-820" element={<ServicePage />} />
          <Route path="/services/immigration/subclass-309" element={<ServicePage />} />
          <Route path="/services/immigration/subclass-482" element={<ServicePage />} />
          <Route path="/services/immigration/subclass-186" element={<ServicePage />} />

          {/* Other routes remain the same */}
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </div>
      <Footer />
      <SocialSidebar />
    </Router>
  );
}



export default App;
