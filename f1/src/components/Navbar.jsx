// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import XgsLogo5 from "../assets/XgsLogo5.png";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [showImmigration, setShowImmigration] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showPRVisa, setShowPRVisa] = useState(false);
  const [showPartnerVisa, setShowPartnerVisa] = useState(false);
  const [showEmployeeVisa, setShowEmployeeVisa] = useState(false);

  // update on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // track submenus only for mobile
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSubToggle = (subMenu) => {
    setOpenSubMenu(openSubMenu === subMenu ? null : subMenu);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm" expanded={expanded}>
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/">
          <Image src={XgsLogo5} alt="XGS Logo" className="logo-image" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
          {expanded ? <i className="fas fa-times fa-lg"></i> : <i className="fas fa-bars fa-lg"></i>}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About Us</Nav.Link> */}

            {/* Services */}
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/services" onClick={() => setExpanded(false)}>
                All Services
              </NavDropdown.Item>
              <NavDropdown.Divider />

              {/* Immigration */}
              {isMobile ? (
                <>
                  <NavDropdown.Item as={Link} to="/services/immigration" onClick={() => setExpanded(false)}>
                    Immigration
                  </NavDropdown.Item>
                  <div className="submenu-toggle px-3" onClick={() => handleToggle("immigration")}>
                    <i className={`fas fa-chevron-${openMenu === "immigration" ? "up" : "down"}`}></i>
                  </div>
                  {openMenu === "immigration" && (
                    <div className="ps-4">
                      {/* PR Visa with nested dropdown */}
                      <div className="d-flex justify-content-between align-items-center">
                        <NavDropdown.Item as={Link} to="/services/immigration/pr-visa" onClick={() => setExpanded(false)}>
                          PR Visa
                        </NavDropdown.Item>
                        <div className="submenu-toggle px-2" onClick={() => handleSubToggle("pr-visa")}>
                          <i className={`fas fa-chevron-${openSubMenu === "pr-visa" ? "up" : "down"}`}></i>
                        </div>
                      </div>
                      {openSubMenu === "pr-visa" && (
                        <div className="ps-4">
                          <NavDropdown.Item as={Link} to="/services/immigration/subclass-189" onClick={() => setExpanded(false)}>
                            Subclass 189
                          </NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/services/immigration/subclass-190" onClick={() => setExpanded(false)}>
                            Subclass 190
                          </NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/services/immigration/subclass-491" onClick={() => setExpanded(false)}>
                            Subclass 491
                          </NavDropdown.Item>
                        </div>
                      )}

                      {/* Partner Visa with nested dropdown */}
                      <div className="d-flex justify-content-between align-items-center">
                        <NavDropdown.Item as={Link} to="/services/immigration/partner-visa" onClick={() => setExpanded(false)}>
                          Partner Visa
                        </NavDropdown.Item>
                        <div className="submenu-toggle px-2" onClick={() => handleSubToggle("partner-visa")}>
                          <i className={`fas fa-chevron-${openSubMenu === "partner-visa" ? "up" : "down"}`}></i>
                        </div>
                      </div>
                      {openSubMenu === "partner-visa" && (
                        <div className="ps-4">
                          <NavDropdown.Item as={Link} to="/services/immigration/subclass-820" onClick={() => setExpanded(false)}>
                            Subclass 820
                          </NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/services/immigration/subclass-309" onClick={() => setExpanded(false)}>
                            Subclass 309
                          </NavDropdown.Item>
                        </div>



                      )}

                      {/* Employee Sponsored Visa with nested dropdown */}
                      <div className="d-flex justify-content-between align-items-center">
                        <NavDropdown.Item as={Link} to="/services/immigration/employee-sponsored-visa" onClick={() => setExpanded(false)}>
                          Employer Sponsored Visa
                        </NavDropdown.Item>
                        <div className="submenu-toggle px-2" onClick={() => handleSubToggle("employee-visa")}>
                          <i className={`fas fa-chevron-${openSubMenu === "employee-visa" ? "up" : "down"}`}></i>
                        </div>
                      </div>
                      {openSubMenu === "employee-visa" && (
                        <div className="ps-4">
                          <NavDropdown.Item as={Link} to="/services/immigration/subclass-482" onClick={() => setExpanded(false)}>
                            Subclass 482
                          </NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="/services/immigration/subclass-186" onClick={() => setExpanded(false)}>
                            Subclass 186
                          </NavDropdown.Item>
                        </div>
                      )}

                      <NavDropdown.Item as={Link} to="/services/immigration/visit-visa" onClick={() => setExpanded(false)}>
                        Visit Visa
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/immigration/business-visa" onClick={() => setExpanded(false)}>
                        Business Visa
                      </NavDropdown.Item>
                    </div>
                  )}
                </>
              ) : (
                <NavDropdown
                  title={
                    <Link
                      to="/services/immigration"
                      className="dropdown-toggle nav-link"
                      onClick={() => setExpanded(false)}
                    >
                      Immigration
                    </Link>
                  }
                  id="immigration-dropdown"
                  drop="end"
                  show={showImmigration}
                  onMouseEnter={() => setShowImmigration(true)}
                  onMouseLeave={() => setShowImmigration(false)}
                >
                  {/* PR Visa with nested dropdown */}
                  <NavDropdown
                    title={
                      <span className="dropdown-toggle nav-link">
                        PR Visa
                      </span>
                    }
                    id="pr-visa-dropdown"
                    drop="end"
                    show={showPRVisa}
                    onMouseEnter={() => setShowPRVisa(true)}
                    onMouseLeave={() => setShowPRVisa(false)}
                  >
                    <NavDropdown.Item as={Link} to="/services/immigration/subclass-189" onClick={() => setExpanded(false)}>
                      Subclass 189
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/services/immigration/subclass-190" onClick={() => setExpanded(false)}>
                      Subclass 190
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/services/immigration/subclass-491" onClick={() => setExpanded(false)}>
                      Subclass 491
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* Partner Visa with nested dropdown */}
                  <NavDropdown
                    title={
                      <span className="dropdown-toggle nav-link">
                        Partner Visa
                      </span>
                    }
                    id="partner-visa-dropdown"
                    drop="end"
                    show={showPartnerVisa}
                    onMouseEnter={() => setShowPartnerVisa(true)}
                    onMouseLeave={() => setShowPartnerVisa(false)}
                  >
                    <NavDropdown.Item as={Link} to="/services/immigration/subclass-820" onClick={() => setExpanded(false)}>
                      Subclass 820
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/services/immigration/subclass-309" onClick={() => setExpanded(false)}>
                      Subclass 309
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* Employee Sponsored Visa with nested dropdown */}
                  <NavDropdown
                    title={
                      <span className="dropdown-toggle nav-link">
                        Employer Sponsored Visa
                      </span>
                    }
                    id="employee-visa-dropdown"
                    drop="end"
                    show={showEmployeeVisa}
                    onMouseEnter={() => setShowEmployeeVisa(true)}
                    onMouseLeave={() => setShowEmployeeVisa(false)}
                  >
                    <NavDropdown.Item as={Link} to="/services/immigration/subclass-482" onClick={() => setExpanded(false)}>
                      Subclass 482
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/services/immigration/subclass-186" onClick={() => setExpanded(false)}>
                      Subclass 186
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown.Item as={Link} to="/services/immigration/visit-visa" onClick={() => setExpanded(false)}>
                    Visit Visa
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/immigration/business-visa" onClick={() => setExpanded(false)}>
                    Business Visa
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {/* Education */}
              {isMobile ? (
                <>
                  <NavDropdown.Item as={Link} to="/services/education" onClick={() => setExpanded(false)}>
                    Education
                  </NavDropdown.Item>
                  <div className="submenu-toggle px-3" onClick={() => handleToggle("education")}>
                    <i className={`fas fa-chevron-${openMenu === "education" ? "up" : "down"}`}></i>
                  </div>
                  {openMenu === "education" && (
                    <div className="ps-4">
                      <NavDropdown.Item as={Link} to="/services/education/student-visa" onClick={() => setExpanded(false)}>
                        Student Visa
                      </NavDropdown.Item>
                    </div>
                  )}
                </>
              ) : (
                <NavDropdown
                  title={
                    <Link
                      to="/services/education"
                      className="dropdown-toggle nav-link"
                      onClick={() => setExpanded(false)}
                    >
                      Education
                    </Link>
                  }
                  id="education-dropdown"
                  drop="end"
                  show={showEducation}
                  onMouseEnter={() => setShowEducation(true)}
                  onMouseLeave={() => setShowEducation(false)}
                >
                  <NavDropdown.Item as={Link} to="/services/education/student-visa" onClick={() => setExpanded(false)}>
                    Student Visa
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {/* Training */}
              {isMobile ? (
                <>
                  <NavDropdown.Item as={Link} to="/services/training" onClick={() => setExpanded(false)}>
                    Training
                  </NavDropdown.Item>
                  <div className="submenu-toggle px-3" onClick={() => handleToggle("training")}>
                    <i className={`fas fa-chevron-${openMenu === "training" ? "up" : "down"}`}></i>
                  </div>
                  {openMenu === "training" && (
                    <div className="ps-4">
                      <NavDropdown.Item as={Link} to="/services/training/ielts-coaching" onClick={() => setExpanded(false)}>
                        IELTS Coaching
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/training/pte-coaching" onClick={() => setExpanded(false)}>
                        PTE Coaching
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/training/sat-coaching" onClick={() => setExpanded(false)}>
                        SAT Coaching
                      </NavDropdown.Item>
                    </div>
                  )}
                </>
              ) : (
                <NavDropdown
                  title={
                    <Link
                      to="/services/training"
                      className="dropdown-toggle nav-link"
                      onClick={() => setExpanded(false)}
                    >
                      Training
                    </Link>
                  }
                  id="training-dropdown"
                  drop="end"
                  show={showTraining}
                  onMouseEnter={() => setShowTraining(true)}
                  onMouseLeave={() => setShowTraining(false)}
                >
                  <NavDropdown.Item as={Link} to="/services/training/ielts-coaching" onClick={() => setExpanded(false)}>
                    IELTS Coaching
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/training/pte-coaching" onClick={() => setExpanded(false)}>
                    PTE Coaching
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/training/sat-coaching" onClick={() => setExpanded(false)}>
                    SAT Coaching
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </NavDropdown>
             <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About Us</Nav.Link>

            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>

            <Link to="/contact">
              <Button className="book-btn rounded-pill">
                Book Consultation <i className="fas fa-arrow-right ms-2"></i>
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

// // src/components/Navbar.jsx
// import React, { useState } from "react";
// import { Container, Nav, Navbar, Button, Image, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import XgsLogo5 from "../assets/XgsLogo5.png";

// const CustomNavbar = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [showImmigration, setShowImmigration] = useState(false);
//   const [showEducation, setShowEducation] = useState(false);
//   const [showTraining, setShowTraining] = useState(false);

//   return (
//     <Navbar
//       bg="light"
//       expand="lg"
//       fixed="top"
//       className="shadow-sm"
//       expanded={expanded}
//     >
//       <Container fluid className="px-4">
//         <Navbar.Brand as={Link} to="/">
//           <Image src={XgsLogo5} alt="XGS Logo" className="logo-image" />
//         </Navbar.Brand>

//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           onClick={() => setExpanded(!expanded)}
//         >
//           {expanded ? (
//             <i className="fas fa-times fa-lg"></i> // Close icon
//           ) : (
//             <i className="fas fa-bars fa-lg"></i> // Hamburger icon
//           )}
//         </Navbar.Toggle>

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto align-items-center gap-3">
//             <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
//             <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About Us</Nav.Link>

//             {/* Services Dropdown */}
//             <NavDropdown title={<span>Services</span>} id="services-dropdown">
//               <NavDropdown.Item as={Link} to="/services" onClick={() => setExpanded(false)}>
//                 All Services
//               </NavDropdown.Item>
//               <NavDropdown.Divider />

//               {/* Immigration with sub-menu */}
//               <NavDropdown
//                 title={
//                   <Link
//                     to="/services/immigration"
//                     className="dropdown-toggle nav-link"
//                     onClick={() => setExpanded(false)}
//                   >
//                     Immigration
//                   </Link>
//                 }
//                 id="immigration-dropdown"
//                 drop="end"
//                 show={showImmigration}
//                 onMouseEnter={() => setShowImmigration(true)}
//                 onMouseLeave={() => setShowImmigration(false)}
//               >
//                 <NavDropdown.Item as={Link} to="/services/immigration/pr-visa" onClick={() => setExpanded(false)}>
//                   PR Visa
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/services/immigration/visit-visa" onClick={() => setExpanded(false)}>
//                   Visit Visa
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/services/immigration/business-visa" onClick={() => setExpanded(false)}>
//                   Business Visa
//                 </NavDropdown.Item>
//               </NavDropdown>

//               {/* Education with sub-menu */}
//               <NavDropdown
//                 title={
//                   <Link
//                     to="/services/education"
//                     className="dropdown-toggle nav-link"
//                     onClick={() => setExpanded(false)}
//                   >
//                     Education
//                   </Link>
//                 }
//                 id="education-dropdown"
//                 drop="end"
//                 show={showEducation}
//                 onMouseEnter={() => setShowEducation(true)}
//                 onMouseLeave={() => setShowEducation(false)}
//               >
//                 <NavDropdown.Item as={Link} to="/services/education/student-visa" onClick={() => setExpanded(false)}>
//                   Student Visa
//                 </NavDropdown.Item>
//               </NavDropdown>

//               {/* Training with sub-menu */}
//               <NavDropdown
//                 title={
//                   <Link
//                     to="/services/training"
//                     className="dropdown-toggle nav-link"
//                     onClick={() => setExpanded(false)}
//                   >
//                     Training
//                   </Link>
//                 }
//                 id="training-dropdown"
//                 drop="end"
//                 show={showTraining}
//                 onMouseEnter={() => setShowTraining(true)}
//                 onMouseLeave={() => setShowTraining(false)}
//               >
//                 <NavDropdown.Item as={Link} to="/services/training/ielts-coaching" onClick={() => setExpanded(false)}>
//                   IELTS Coaching
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/services/training/pte-coaching" onClick={() => setExpanded(false)}>
//                   PTE Coaching
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/services/training/sat-coaching" onClick={() => setExpanded(false)}>
//                   SAT Coaching
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </NavDropdown>

//             <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>

//             <Link to="/contact">
//               <Button className="book-btn rounded-pill">
//                 Book Consultation <i className="fas fa-arrow-right ms-2"></i>
//               </Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;
