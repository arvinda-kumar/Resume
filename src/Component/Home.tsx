import React from 'react'
import img1 from '../assets/imgs/human/human-1.png'
import img2 from '../assets/imgs/human/img-3.png'
import img3 from '../assets/imgs/human/img-2.png'
import img4 from '../assets/imgs/human/img-2.png'
import img5 from '../assets/imgs/icon/badge-icon.png'
import img6 from '../assets/imgs/icon/badge-text.png'
import img7 from '../assets/imgs/icon/figma.png'
import img8 from '../assets/imgs/icon/consultant.png'
import img9 from '../assets/imgs/icon/help.png'
import img10 from '../assets/imgs/icon/be.png'
import img11 from '../assets/imgs/icon/up-arrow.png'
import img12 from '../assets/imgs/services/service-3.png'
import img13 from '../assets/imgs/services/service-0.png'
import img14 from '../assets/imgs/services/service-1.png'
import img15 from '../assets/imgs/services/service-2.png'
import img16 from '../assets/imgs/img-feature.png'
import img17 from '../assets/imgs/icon/google.png'
import img18 from '../assets/imgs/icon/badge-icon-2.png'
import img19 from '../assets/imgs/icon/badge-2.png'
import img20 from '../assets/imgs/avatar/avatar-1.png'
import img21 from '../assets/imgs/avatar/avatar-12.png'
import img22 from '../assets/imgs/avatar/avatar-3.png'
import img23 from '../assets/imgs/avatar/avatar-11.png'
import img24 from '../assets/imgs/icon/badge-icon-sm.png'
import img25 from '../assets/imgs/icon/badge-icon-sm.png'
import img26 from '../assets/imgs/icon/badge-icon-sm.png'
import img27 from '../assets/imgs/icon/badge-icon-sm.png'


import { Swiper, SwiperSlide } from "swiper/react";
export default function Home() {
  return (
    <>
      {/* <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */
      }
      <div className="follower">
      </div>
      <div className="cursor">
        <span className="dot"></span>
      </div>

      <section className="home1_section1 position-relative bg-secondary-1 overflow-hidden">
        <div className="scroll-move-left positon-relative">
          <div className="text-move">
            <div className="d-flex gap-4">
              <p className="stroke_light_lg lh-1 wow img-custom-anim-left opacity-75">UI & UX Designer</p>
              <p className="stroke_light_lg lh-1 wow img-custom-anim-left opacity-75">Branding Designer</p>
            </div>
          </div>
        </div>
        <div className="scroll-move-right">
          <p className="stroke_dark_lg dark-green lh-1 wow img-custom-anim-right">Alson Ori</p>
        </div>
        <div className="container position-relative">
          <div className="text-end pt-5 position-absolute bottom-0 end-0" data-aos="zoom-in">
            <div className="parallax-item">
              <img src={img1} alt="inexa" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between container position-absolute top-40 start-50 translate-middle">
          <div className="text-start position-absoluteq top-40 start-0" data-aos="fade-up">
            <p className="fs-5 text-dark scroll-move-up">Freelance</p>
            <p className="fs-5 fw-bold text-dark scroll-move-up">User Interface Designer</p>
          </div>
          <div className="position-absolute top-40 end-0" data-aos="fade-up">
            <div className="hover-up">
              <a href="#" className="btn btn-primary scroll-zoom-out">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      <section className="home1_section2 section-padding overflow-x-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow img-custom-anim-top mb-5 mb-lg-0">
              <div className=" d-inline-flex position-relative">
                <div className="zoom-img rounded-4 mw-500">
                  <div className="effect-curtain">
                    <div className="parallax-item">
                      <img src={img2} className="firstImg " alt="inexa" />
                    </div>
                    <img src={img3} className="secondImg" alt="inexa" />
                    <img src={img4} className="thirdImg" alt="inexa" />
                  </div>
                </div>
                <div className="position-absolute bottom-0 start-100 translate-middle-x mb-5 bg-white icon_160 icon-shape rounded-circle shadow">
                  <img className="position-relative" src={img5} alt="inexa" />
                  <div className="position-absolute top-50 start-50 translate-middle w-75">
                    <img className="ribbonRotate dark-reverse" src={img6} alt="inexa" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow img-custom-anim-left">
              <div className="text-primary fw-normal fs-7 text-uppercase text-decoration-underline">About Me</div>
              <h1 className="fw-bold ds-5 border-bottom pb-4 mt-4">
                Senior user experience <br className="d-none d-lg-block" />
                & interface designer
              </h1>
              <p className="mt-4">It can sometimes be preferable to host the web fonts you use on your own server, and not all fonts are available on a font delivery service.</p>
              <div className="d-flex flex-md-row flex-column align-items-center mt-4 pb-4">
                <div className="product_item d-inline-flex me-md-5 mt-3">
                  <div className="border p-3 rounded-top-pill rounded-bottom-pill text-center card-lift bg-custom-1">
                    <div className="icon-shape icon-xxxl rounded-circle bg-secondary-1">
                      <img className="dark-reverse" src={img7} alt="inexa" />
                    </div>
                    <p className="text-uppercase mb-0 mt-4">design</p>
                    <h3>100<span className="text-primary">%</span></h3>
                  </div>
                </div>
                <div className="product_item d-inline-flex me-md-5 mt-3">
                  <div className="border p-3 rounded-top-pill rounded-bottom-pill text-center card-lift bg-custom-1">
                    <div className="icon-shape icon-xxxl rounded-circle bg-secondary-1">
                      <img className="dark-reverse" src={img8} alt="inexa" />
                    </div>
                    <p className="text-uppercase mb-0 mt-4">consultancy</p>
                    <h3>56<span className="text-primary">%</span></h3>
                  </div>
                </div>
                <div className="product_item d-inline-flex me-md-5 mt-3">
                  <div className="border p-3 rounded-top-pill rounded-bottom-pill text-center card-lift bg-custom-1">
                    <div className="icon-shape icon-xxxl rounded-circle bg-secondary-1">
                      <img className="dark-reverse" src={img9} alt="inexa" />
                    </div>
                    <p className="text-uppercase mb-0 mt-4">support</p>
                    <h3>80<span className="text-primary">%</span></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-120 position-relative wow img-custom-anim-left overflow-x-hidden">
          <div className="d-flex gap-5 scroll-move-left">
            <p className="stroke_light_xl me-5">fakebook</p>
            <p className="stroke_light_xl me-5">behance</p>
            <p className="stroke_light_xl me-5">dribbble</p>
          </div>
          <div className="product_item d-inline-flex position-absolute bottom-50 start-50">
            <div className="border bg-white p-2 rounded-start-pill d-flex align-items-center rounded-end-pill text-center card-lift">
              <div className="ms-1">
                <p className="text-uppercase mb-0 fs-7">followers</p>
                <h3 className="mb-0 ms-3">1,20,000</h3>
              </div>
              <div className="icon-shape icon_80 ms-5 rounded-circle bg-secondary-1  bg-custom-1">
                <img className="dark-reverse" src={img10} alt="inexa" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home1_section3 pb-120 overflow-hidden">
        <div className="container">
          <div className="text-primary fw-normal fs-7 text-uppercase text-decoration-underline"><span className="scroll-move-up">What I Offer</span></div>
          <div id="accordion">
            <div className="card mb-4 p-3 border-0">
              <div className="wow img-custom-anim-right">
                <a className="collapsed text-dark fw-bold" data-bs-toggle="collapse" href="#collapseOne">
                  <span className="service-item d-flex align-items-center w-100 line-underline">
                    <img src={img11} alt="inexa" />
                    <span className="lh-sm">UI & UX Design</span>
                  </span>
                </a>
              </div>
              <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                <div className="row mt-5 align-items-center card-body">
                  <div className="col-lg-6">
                    <div className="zoom-img d-inline-flex rounded-4">
                      <img src={img12} alt="inexa" />
                    </div>
                  </div>
                  <div className="col-lg-6 ps-lg-4">
                    <h1 className="ds-6">Website Design: Crafting attractive, user-friendly layouts</h1>
                    <p className="pe-5 mb-5">
                      You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you
                      to deduct as much.
                    </p>
                    <a href="get-quote.html" className="btn btn-outline-secondary fs-7">Hire Me Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 p-3 border-0">
              <div className="wow img-custom-anim-right">
                <a className="collapsed text-dark fw-bold" data-bs-toggle="collapse" href="#collapseTwo">
                  <span className="service-item d-flex align-items-center line-underline">
                    <img src={img11} alt="inexa" />
                    <span className="lh-sm">4D Animations</span>
                  </span>
                </a>
              </div>
              <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                <div className="row mt-5 align-items-center card-body">
                  <div className="col-lg-6">
                    <div className="zoom-img d-inline-flex rounded-4">
                      <img src={img13} alt="inexa" />
                    </div>
                  </div>
                  <div className="col-lg-6 ps-lg-4">
                    <h1 className="ds-6">UI Design: Creating interactive, intuitive interfaces</h1>
                    <p className="pe-5 mb-5">
                      You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you
                      to deduct as much.
                    </p>
                    <a href="get-quote.html" className="btn btn-outline-secondary fs-7">Hire Me Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 p-3 border-0">
              <div className="wow img-custom-anim-right">
                <a className="collapsed text-dark fw-bold" data-bs-toggle="collapse" href="#collapseThree">
                  <span className="service-item d-flex align-items-center line-underline">
                    <img src={img11} alt="inexa" />
                    <span>ROI Consultancy</span>
                  </span>
                </a>
              </div>
              <div id="collapseThree" className="collapse show" data-bs-parent="#accordion">
                <div className="row mt-5 align-items-center card-body">
                  <div className="col-lg-6">
                    <div className="zoom-img d-inline-flex rounded-4">
                      <img src={img14} alt="inexa" />
                    </div>
                  </div>
                  <div className="col-lg-6 ps-lg-4">
                    <h1 className="ds-6">UX Design: Improving usability and accessibility</h1>
                    <p className="pe-5 mb-5">
                      You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you
                      to deduct as much.
                    </p>
                    <a href="get-quote.html" className="btn btn-outline-secondary fs-7">Hire Me Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 p-3 border-0">
              <div className="wow img-custom-anim-right">
                <a className="collapsed text-dark fw-bold" data-bs-toggle="collapse" href="#collapseFour">
                  <span className="service-item d-flex align-items-center line-underline">
                    <img src={img11} alt="inexa" />
                    <span>Custom Design</span>
                  </span>
                </a>
              </div>
              <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                <div className="row mt-5 align-items-center card-body">
                  <div className="col-lg-6">
                    <div className="zoom-img d-inline-flex rounded-4">
                      <img src={img15} alt="inexa" />
                    </div>
                  </div>
                  <div className="col-lg-6 ps-lg-4">
                    <h1 className="ds-6">SEO Optimization: Boosting website visibility on search engines.</h1>
                    <p className="pe-5 mb-5">
                      You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you
                      to deduct as much.
                    </p>
                    <a href="get-quote.html" className="btn btn-outline-secondary fs-7">Hire Me Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="home1_section4 section-padding bg-secondary-1">
        <div className="text-center">
          <div className="text-primary fw-normal fs-7 text-uppercase text-decoration-underline">portfolio</div>
          <h1>Featured works</h1>
        </div>
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6 wow img-custom-anim-left pb-5 pb-lg-0">
              <div className="zoom-img rounded-4">
                <div className="parallax-item">
                  <img src={img16} alt="inexa" />
                </div>
                <h1 className="ds-6">AI Fitness App Companion UI</h1>
                <p className="pe-5 mb-5">
                  You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct
                  as much.
                </p>
                <a href="portfolio-details.html" className="btn btn-outline-secondary fs-7">Case Details</a>
              </div>
            </div>
            <div className="col-lg-6 wow img-custom-anim-left pb-5 pb-lg-0">
              <div className="zoom-img rounded-4">
                <div className="parallax-item">
                  <img src={img16} alt="inexa" />
                </div>
                <h1 className="ds-6">AI Fitness App Companion UI</h1>
                <p className="pe-5 mb-5">
                  You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct
                  as much.
                </p>
                <a href="portfolio-details.html" className="btn btn-outline-secondary fs-7">Case Details</a>
              </div>
            </div>
            <div className="col-lg-6 wow img-custom-anim-left pb-5 pb-lg-0">
              <div className="zoom-img rounded-4">
                <div className="parallax-item">
                  <img src={img16} alt="inexa" />
                </div>
                <h1 className="ds-6">AI Fitness App Companion UI</h1>
                <p className="pe-5 mb-5">
                  You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct
                  as much.
                </p>
                <a href="portfolio-details.html" className="btn btn-outline-secondary fs-7">Case Details</a>
              </div>
            </div>
            <div className="col-lg-6 wow img-custom-anim-left pb-5 pb-lg-0">
              <div className="zoom-img rounded-4">
                <div className="parallax-item">
                  <img src={img16} alt="inexa" />
                </div>
                <h1 className="ds-6">AI Fitness App Companion UI</h1>
                <p className="pe-5 mb-5">
                  You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct
                  as much.
                </p>
                <a href="portfolio-details.html" className="btn btn-outline-secondary fs-7">Case Details</a>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 gap-4 d-flex flex-md-row flex-column align-items-center justify-content-center wow img-custom-anim-right">
            <h5 className="mb-0">More featured works here:</h5>
            <a href="https://www.behance.net/" className="btn btn-outline-secondary fs-7 hover-up" target="_blank">
              <span className="text-primary me-2">
                <i className="fa-brands fa-behance"></i>
              </span>
              Behance
            </a>
            <a href="https://dribbble.com/" className="btn btn-outline-secondary fs-7 hover-up" target="_blank">
              <span className="text-primary me-2">
                <i className="fa-brands fa-dribbble"></i>
              </span>
              Dribbble
            </a>
            <a href="https://github.com/" className="btn btn-outline-secondary fs-7 hover-up" target="_blank">
              <span className="text-primary me-2">
                <i className="fa-brands fa-github"></i>
              </span>
              Github
            </a>
          </div>
        </div>
      </section>

      <section className="home1_section5 section-padding overflow-x-hidden">
        <div className="container">


          <div className="container">
            <div className="text-center position-relative">
              <p className="stroke_blur_right wow img-custom-anim-left">Testimonials</p>
              <div className="position-absolute bottom-0 end-0 mb-5 bg-primary icon_160 icon-shape rounded-circle shadow">
                <div className=" border icon-shape icon-xxl rounded-circle">
                  <img className="position-relative p-3" src={img18} alt="inexa" />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle w-75">
                  <img className="ribbonRotate" src={img19} alt="inexa" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row wow img-custom-anim-left">
              <div className="col-lg-3 position-relative">
                <div className="slider-1-thumb swiper pb-5">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="avatar avatar-xl position-relative">
                        <img className="rounded-circle" src={img20} alt="inexa" />
                        <div className="icon-shape icon-md rounded-circle position-absolute top-100 start-50 translate-middle">
                          <img src={img24} alt="inexa" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="avatar avatar-xl position-relative">
                        <img className="rounded-circle" src={img21} alt="inexa" />
                        <div className="icon-shape icon-md rounded-circle position-absolute top-100 start-50 translate-middle">
                          <img src={img25} alt="inexa" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="avatar avatar-xl position-relative">
                        <img className="rounded-circle" src={img22} alt="inexa" />
                        <div className="icon-shape icon-md rounded-circle position-absolute top-100 start-50 translate-middle">
                          <img src={img26} alt="inexa" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="avatar avatar-xl position-relative">
                        <img className="rounded-circle" src={img23} alt="inexa" />
                        <div className="icon-shape icon-md rounded-circle position-absolute top-100 start-50 translate-middle">
                          <img src={img27} alt="inexa" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mt-lg-0 mt-10 wow img-custom-anim-left">

                <div className="swiper slider-1">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="review_comment">
                        <div className="d-flex">
                          <a href="#">
                            <h3>Miranda H. Halim</h3>
                            <p className="text-primary fw-normal fs-7 text-uppercase mb-0">FOUNDER & CEO</p>
                          </a>
                          <div className="group_star">
                            <div className="d-flex gap-1 align-items-center px-2 py-1 ms-4 border rounded-pill d-inline-flex">
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                            </div>
                          </div>
                        </div>
                        <p className="ds-xs-4 text-black fw-bold border-top mt-5 pt-5">
                          <span className="opacity-25">“</span>
                          Exceptional service! My website never looked better. Truly top-notch stylists and unmatched personalized care. This is one of my favorite
                          places to visit for a website uix procedure and a regular dermatologist check-up!
                          <span className="opacity-25">”</span>
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="review_comment">
                        <div className="d-flex">
                          <a href="#">
                            <h3>Miranda H. Halim</h3>
                            <p className="text-primary fw-normal fs-7 text-uppercase mb-0">FOUNDER & CEO</p>
                          </a>
                          <div className="group_star">
                            <div className="d-flex gap-1 align-items-center px-2 py-1 ms-4 border rounded-pill d-inline-flex">
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                            </div>
                          </div>
                        </div>
                        <h1 className="ds-xs-4 border-top mt-5 pt-5">
                          <span className="opacity-25">“</span>
                          Exceptional service! My website never looked better. Truly top-notch stylists and unmatched personalized care. This is one of my favorite
                          places to visit for a website uix procedure and a regular dermatologist check-up!
                          <span className="opacity-25">”</span>
                        </h1>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="review_comment">
                        <div className="d-flex">
                          <a href="#">
                            <h3>Miranda H. Halim</h3>
                            <p className="text-primary fw-normal fs-7 text-uppercase mb-0">FOUNDER & CEO</p>
                          </a>
                          <div className="group_star">
                            <div className="d-flex gap-1 align-items-center px-2 py-1 ms-4 border rounded-pill d-inline-flex">
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                            </div>
                          </div>
                        </div>
                        <h1 className="ds-xs-4 border-top mt-5 pt-5">
                          <span className="opacity-25">“</span>
                          Exceptional service! My website never looked better. Truly top-notch stylists and unmatched personalized care. This is one of my favorite
                          places to visit for a website uix procedure and a regular dermatologist check-up!
                          <span className="opacity-25">”</span>
                        </h1>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="review_comment">
                        <div className="d-flex">
                          <a href="#">
                            <h3>Miranda H. Halim</h3>
                            <p className="text-primary fw-normal fs-7 text-uppercase mb-0">FOUNDER & CEO</p>
                          </a>
                          <div className="group_star">
                            <div className="d-flex gap-1 align-items-center px-2 py-1 ms-4 border rounded-pill d-inline-flex">
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                              <i className="bi bi-star-fill text-primary"></i>
                            </div>
                          </div>
                        </div>
                        <p className="ds-xs-4 text-black fw-bold border-top mt-5 pt-5">
                          <span className="opacity-25">“</span>
                          Exceptional service! My website never looked better. Truly top-notch stylists and unmatched personalized care. This is one of my favorite
                          places to visit for a website uix procedure and a regular dermatologist check-up!
                          <span className="opacity-25">”</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row pt-120">
              <div className="col-lg-3 col-md-6 mb-1 text-center">
                <div className="brand bg-secondary-1 box-320 rounded-4 icon-shape wow img-custom-anim-top">
                  <a href="#" className="brand_item rounded-3 box-300 d-flex align-items-center justify-content-center gap-3">
                    <img src="assets/imgs/icon/icon-1.png" alt="brand" />
                    <h2 className="m-0 text-dark">Astro</h2>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-1 text-center">
                <div className="brand bg-secondary-1 box-320 rounded-4 icon-shape wow img-custom-anim-top">
                  <a href="#" className="brand_item rounded-3 box-300 d-flex align-items-center justify-content-center gap-3">
                    <img src="assets/imgs/icon/icon-2.png" alt="brand" />
                    <h2 className="m-0 text-dark">Purei</h2>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-1 text-center">
                <div className="brand bg-secondary-1 box-320 rounded-4 icon-shape wow img-custom-anim-top">
                  <a href="#" className="brand_item rounded-3 box-300 d-flex align-items-center justify-content-center gap-3">
                    <img src="assets/imgs/icon/icon-3.png" alt="brand" />
                    <h2 className="m-0 text-dark">Freshzi</h2>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-1 text-center">
                <div className="brand bg-secondary-1 box-320 rounded-4 icon-shape wow img-custom-anim-top">
                  <a href="#" className="brand_item rounded-3 box-300 d-flex align-items-center justify-content-center gap-3">
                    <img src="assets/imgs/icon/icon-4.png" alt="brand" />
                    <h2 className="m-0 text-dark">YellPure</h2>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-1 text-center">
                <div className="brand bg-secondary-1 box-320 rounded-4 icon-shape wow img-custom-anim-top">
                  <a href="#" className="brand_item rounded-3 box-300 d-flex align-items-center justify-content-center gap-3">
                    <img src="assets/imgs/icon/icon-5.png" alt="brand" />
                    <h2 className="m-0 text-dark">ai.core</h2>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-1 text-center">
                <div className="brand bg-secondary-1 box-320 rounded-4 icon-shape wow img-custom-anim-top">
                  <a href="#" className="brand_item rounded-3 box-300 d-flex align-items-center justify-content-center gap-3">
                    <img src="assets/imgs/icon/icon-6.png" alt="brand" />
                    <h2 className="m-0 text-dark">YellPure</h2>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-3 text-center wow img-custom-anim-top">
                <a href="get-quote.html" className="icon_hover icon-shape icon_160 border rounded-circle position-relative overflow-hidden mt-10 hover-up">
                  <span className="icon-shape icon-md rounded-circle position-absolute bottom-0 end-0"></span>
                  <p className="m-0 text-uppercase text-secondary position-absolute top-50 start-50 translate-middle">
                    you can <br />
                    be <span className="text-dark fw-bold">next</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home1_section6 pt-120 bg-black position-relative bg-custom-2">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-3 wow img-custom-anim-left">
              <div className="text-primary fw-normal fs-7 text-uppercase text-decoration-underline">huge honor</div>
              <h1 className="fw-bold ds-5 text-white mb-lg-0 mb-5">Get rewards from them.</h1>
            </div>
            <div className="col-lg-6 wow img-custom-anim-left">
              <p className="mb-0 w-80">
                You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct
                as much as we can do it.
              </p>
            </div>
            <div className="col-lg-3 tex-lg-end mt-4">
              <a href="get-quote.html" className="btn btn-outline-dark text-white wow img-custom-anim-left">Get In Touch</a>
            </div>
            <div className="col-lg-9 offset-lg-3">
              <div className="row mt-5">
                <div className="col-lg-6 wow img-custom-anim-left">
                  <div className="awards border-top border-secondary border-bottom py-4 position-relative">
                    <p>2020</p>
                    <h3 className="text-white">Site of the day</h3>
                    <p>You may also realize cost savings from your energy efficient choices in your custom home.</p>
                    <img className="position-absolute top-0 end-0 mt-5" src="assets/imgs/logo/google.png" alt="inexa" />
                  </div>
                </div>
                <div className="col-lg-6 wow img-custom-anim-left">
                  <div className="awards border-top border-secondary border-bottom py-4 position-relative">
                    <p>2020</p>
                    <h3 className="text-white">Best business model</h3>
                    <p>You may also realize cost savings from your energy efficient choices in your custom home.</p>
                    <img className="position-absolute top-0 end-0 mt-5" src="assets/imgs/logo/marvel.png" alt="inexa" />
                  </div>
                </div>
                <div className="col-lg-6 wow img-custom-anim-left">
                  <div className="awards border-top border-secondary border-bottom py-4 position-relative">
                    <p>2020</p>
                    <h3 className="text-white">Motion designer</h3>
                    <p>You may also realize cost savings from your energy efficient choices in your custom home.</p>
                    <img className="position-absolute top-0 end-0 mt-5" src="assets/imgs/logo/sprint.png" alt="inexa" />
                  </div>
                </div>
                <div className="col-lg-6 wow img-custom-anim-left">
                  <div className="awards border-top border-secondary border-bottom py-4 position-relative">
                    <p>2020</p>
                    <h3 className="text-white">Best UX designer</h3>
                    <p>You may also realize cost savings from your energy efficient choices in your custom home.</p>
                    <img className="position-absolute top-0 end-0 mt-5" src="assets/imgs/logo/verizon.png" alt="inexa" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row overflow-hidden">
            <p className="stroke_dark lh-1 text-capitalize wow img-custom-anim-left">Awards</p>
          </div>
        </div>
        <div className="video-home-1 position-absolute start-0 wow img-custom-anim-top">
          <img src="assets/imgs/video/bg-video.png" alt="about" className="img-fluid" />
          <a href="https://www.youtube.com/watch?v=gXFATcwrO-U" className="play-btn popup-video position-absolute top-50 start-50 translate-middle icon-shape icon-xl rounded-circle text-primary">
            <i className="bi bi-play-fill"></i>
          </a>
        </div>
      </section>


      <section className="home1_section7 pt-650 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 border-end-lg pb-5 pb-lg-0">
              <div className="w-md-75 wow img-custom-anim-top">
                <div className="gap-4 d-flex align-items-center border-bottom pb-5 select-budget">
                  <p className="text-uppercase mb-0">select budget</p>
                  <a href="javascript:void(0)" className="py-1 px-2 btn btn-outline-secondary active shadow fs-7">$1k - $5k </a>
                  <a href="javascript:void(0)" className="py-1 px-2 btn btn-outline-secondary fs-7">$10k - $50k </a>
                  <a href="javascript:void(0)" className="py-1 px-2 btn btn-outline-secondary fs-7">$50k - $100k </a>
                </div>
                <form action="#">
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="input-group">
                        <i className="bi bi-person-fill text-dark d-flex bg-secondary-1 py-3 rounded-start-4 ps-3 align-items-center"></i>
                        <input type="text" className="form-control border-0 rounded-end-4 bg-secondary-1" placeholder="Your name" aria-label="Recipient's username" />
                      </div>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                      <div className="input-group">
                        <i className="bi bi-envelope-open-fill text-dark d-flex bg-secondary-1 py-3 rounded-start-4 ps-3 align-items-center"></i>
                        <input type="text" className="form-control border-0 rounded-end-4 bg-secondary-1" placeholder="info@" aria-label="Username" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group mt-3">
                        <i className="bi bi-pencil-fill text-dark bg-secondary-1 rounded-start-4 pt-3 ps-3 d-flex align-items-start"></i>
                        <textarea className="form-control border-0 rounded-end-4 bg-secondary-1 rounded-0 pb-10 pt-3" placeholder="Describe Your Project in Short" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-dark mt-3">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="w-md-75 ms-lg-8 wow img-custom-anim-left">
                <div className="text-primary fw-normal fs-7 text-uppercase text-decoration-underline">contact me</div>
                <h1 className="fw-bold ds-5 mt-4">Have any question? Get in touch!</h1>
                <p className="mb-5">You may also realize cost savings from your energy efficient choices in your custom home.</p>
                <a href="tel:+12345678900" className="d-flex align-items-start mb-3 text-secondary"> <i className="bi bi-telephone-fill text-dark me-3"></i>+123 (456) 789 00 </a>
                <a href="mailto:hello@inexa" className="d-flex align-items-start mb-3 text-secondary"> <i className="bi bi-envelope-open-fill me-3 text-dark"></i>hello@inexa.com </a>
                <a href="https://www.google.com/maps" className="d-flex align-items-start mb-3 text-secondary">
                  <i className="bi bi-geo-alt-fill me-3 text-dark"></i>12/A, New Booston Tower,<br />NYC, USA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
