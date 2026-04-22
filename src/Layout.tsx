import { Outlet, Link } from "react-router-dom";
import DataContext from "./Component/Context/DataContext";

const Layout = () => {
    return (
        <div className="page-layout">
            {/* <div className="header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home1</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">PortFolio</Link>
                        </li>
                        <li>
                            <Link to="/about">About me</Link>
                        </li>
                        <li>
                            <Link to="/faq">Faq</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}
            <header>
                <nav className="navbar custom-container navbar-light start-50 translate-middle-x navbar-expand-lg py-0 mt-lg-4 mt-3 z-5 tcmenu__wrap">
                    <div className="d-flex p-3 p-lg-0 justify-content-between align-items-center w-100">
                        <a className="navbar-brand ms-lg-4 d-flex main-logo" href="index.html">
                            <img src="assets/imgs/logo/favicon.svg" alt="inexa" />
                            <span className="text-dark">Inexa</span>
                        </a>
                        <div className="tcmenu__navbar-wrap tcmenu__main-menu d-none d-lg-flex">
                            <ul className="navbar-nav me-auto gap-4 align-items-lg-center navigation">
                                <li className="nav-item dropdown menu-item-has-children">
                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home1</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="index.html">Home page 12</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="index-2.html">Home page 2</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="index-3.html">Home page 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown menu-item-has-children">
                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="portfolio.html">Portfolio-List</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="portfolio-details.html">Portfolio-Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown menu-item-has-children">
                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="blog-list.html">Blog list</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="blog-details.html">Blog-details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="faq.html">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="get-quote.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center me-lg-4 gap-4">
                            <div className="dark-light-switcher d-flex justify-content-center align-items-center">
                                <i className="bi theme-icon bi-sun-fill"></i>
                                <i className="bi theme-icon bi-moon-stars-fill"></i>
                            </div>

                            <a href="get-quote.html" className="menu-tigger btn btn-outline-secondary d-none d-md-block"> Let’s Talk </a>

                            <div className="mobile-nav-toggler  d-lg-none rounded-circle bg-primary icon-shape icon-lg">
                                <img src="assets/imgs/icon/dot-menu.png" alt="inexa" />
                            </div>
                        </div>
                    </div>
                </nav >

                <div className="tcmobile__menu">
                    <nav className="tcmobile__menu-box">
                        <div className="close-btn"><i className="fas fa-times"></i></div>
                        <div className="nav-logo">
                            <a className="navbar-brand ms-lg-4 d-flex main-logo" href="index.html">
                                <img src="assets/imgs/logo/favicon.svg" alt="inexa" />
                                <span className="text-dark">Inexa</span>
                            </a>
                        </div>
                        <div className="tcmobile__search">
                            <form action="#">
                                <input type="text" className="form-control shadow-none" placeholder="Search here..." />
                                <button><i className="bi bi-search"></i></button>
                            </form>
                        </div>
                        <div className="tcmobile__menu-outer"></div>

                        <div className="side-gallery mb-4 ps-4">
                            <div className="pt-1"></div>
                            <h4 className="mt-3 mb-3">Gallery</h4>
                            <div className="grid-items">
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-1.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-2.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-3.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-4.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-5.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-6.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-7.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-8.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-9.png" alt="inexa" />
                                </div>
                            </div>
                        </div>

                        <div className="tcmobile__menu-bottom">
                            <div className="contact-info">
                                <ul className="list-wrap list-unstyled">
                                    <li><a href="mailto:info@inexa.com">contact@inexa.com</a></li>
                                    <li><a href="tel:0123456789">(229) 555-0109</a></li>
                                </ul>
                            </div>
                            <div className="social-links">
                                <ul className="list-wrap">
                                    <li>
                                        <a href="https://www.facebook.com/" className=" text-reset">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className=" text-reset">
                                            <i className="bi bi-twitter-x"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className=" text-reset">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" className=" text-reset">
                                            <i className="bi bi-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="tcmobile__menu-backdrop"></div>


                <div className="offCanvas__overly"></div>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions">
                    <div className="offcanvas-header">
                        <div className="offcanvas-close">
                            <button className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="offcanvas-body">
                        <div className="offCanvas__logo mb-3">
                            <a className="navbar-brand ms-lg-4 d-flex main-logo me-8" href="index.html">
                                <img src="assets/imgs/logo/favicon.svg" alt="inexa" />
                                <span className="text-dark">Inexa</span>
                            </a>
                        </div>
                        <div className="offCanvas__side-info mb-4">
                            <div className="contact-list mb-4">
                                <h4>Office Address</h4>
                                <p>
                                    123/A, Miranda City Likaoli <br />
                                    Prikano, Dope
                                </p>
                            </div>
                            <div className="contact-list mb-4">
                                <h4>Phone Number</h4>
                                <p>+0989 7876 9865 9</p>
                                <p>+(090) 8765 86543 85</p>
                            </div>
                            <div className="contact-list mb-4">
                                <h4>Email Address</h4>
                                <p>info@inexa.com</p>
                                <p>contact@inexa.com</p>
                            </div>
                        </div>
                        <div className="side-gallery mb-4">
                            <div className="pt-1"></div>
                            <h4 className="mt-3 mb-3">Gallery</h4>
                            <div className="grid-items">
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-1.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-2.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-3.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-4.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-5.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-6.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-7.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-8.png" alt="inexa" />
                                </div>
                                <div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
                                    <img className="g-col-4" src="assets/imgs/gallery/gallery-9.png" alt="inexa" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header >




            <div className="right-sidebar">
                <DataContext>
                    <Outlet />
                </DataContext>
            </div>


















        </div >
    )
};

export default Layout;