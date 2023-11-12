import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Services = () => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Digital Services
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
                For Web Design &amp; Development
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Feature Three Area start */}
      <section className="feature-three-area pb-50 rpb-20 rel z-1">
        <div className="container container-1290">
          <div className="row gap-130">
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">01</span>
                  <Link legacyBehavior href="/index2">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/index2">
                      <a>Web Development</a>
                    </Link>
                  </h4>
                  <p>
                    Craft custom, user-centric websites that reflect your brand
                    and meet your business objectives
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">02</span>
                  <Link legacyBehavior href="/index2">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/index2">
                      eCommerce Development
                    </Link>
                  </h4>
                  <p>
                    Engineer robust, scalable online stores that drive sales and
                    accelerate growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">03</span>
                  <Link legacyBehavior href="/index3">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/index3">
                      Design and Branding
                    </Link>
                  </h4>
                  <p>
                    Develop distinctive, cohesive brand identities that resonate
                    with target audiences and stand out from the crowd{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">04</span>
                  <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/service-details">
                      Graphic Design
                    </Link>
                  </h4>
                  <p>
                    Create high-impact visuals that communicate your message
                    effectively and engage stakeholders
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">05</span>
                  <Link legacyBehavior href="/index3">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/index3">
                      UI/UX Design
                    </Link>
                  </h4>
                  <p>
                    Design intuitive and interactive user interfaces that make
                    your website and app a delight to use
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">06</span>
                  <Link legacyBehavior href="/index5">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/index5">
                      Digital Marketing
                    </Link>
                  </h4>
                  <p>
                    Orchestrate targeted digital marketing campaigns to reach
                    your audience, generate leads, and boost sales
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">07</span>
                  <Link legacyBehavior href="/index2">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/index2">
                      Business Development
                    </Link>
                  </h4>
                  <p>
                    Develop and execute strategic growth plans that help you
                    achieve your business goals{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">08</span>
                  <Link legacyBehavior href="/index2">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/index2">
                      IT Consulting/Strategy
                    </Link>
                  </h4>
                  <p>
                    Provide expert guidance on how to leverage technology to
                    optimize your operations and enhance profitability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Three Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290 rel z-1">
          <div className="row gap-70">
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">Step 01</span>
                <h4 className="title">Idea Generate</h4>
                <div className="content">
                  <p>Understand your business, goals, and users.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">Step 02</span>
                <h4 className="title">Plan &amp; Design</h4>
                <div className="content">
                  <p>Custom, UX-focused design that resonates.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">Step 03</span>
                <h4 className="title">Project Testing</h4>
                <div className="content">
                  <p>Latest tech, best practices, rigorous process.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">Step 04</span>
                <h4 className="title">Got Results</h4>
                <div className="content">
                  <p>On-time, on-budget launch; results-driven promotion.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-line-shape">
            <img
              src="assets/images/shapes/work-process-line.png"
              alt="Work Process Line"
            />
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-95 rpt-65 pb-130 rpb-100">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Services;
