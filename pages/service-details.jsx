import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const ServiceDetails = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is Graphic Designing ?",
      message:
        "Graphic designing its an art form of representing your brand with a sense of creativity by using fonts, colors, styles, icons which all together create a visual image and that is the communication towards your customers. The better you create, the better the chances to grow your business by beating all your competitors with the eye-catching graphic designing. ",
    },
    {
      id: 2,
      title: " How Long Does It Take To Complete A Graphic Design Project? ",
      message:
        "The complexity and size of the graphic design job determine how long it will take to complete. During the initial consultation, we normally give our best guesses as to when things will take to complete, and we work to deliver the finished product on schedule.",
    },
    {
      id: 3,
      title: " What File Formats Will I Receive For The Final Design? ",
      message:
        " We provide the final design in industry-standard file formats, such as JPEG, PNG, and PDF, suitable for both online and offline use. We can also provide other file formats upon request. ",
    },
    {
      id: 4,
      title: " Do You Provide Revisions To The Designs?",
      message:
        "Yes, we offer revisions to the designs based on your feedback. We want to ensure that the final design meets your expectations and aligns with your vision",
    },
    {
      id: 5,
      title: "Can You Create A Logo For My Business? ",
      message:
        "Yes, we specialize in logo design and can create a unique and professional logo that reflects your brand identity and resonates with your target audience.",
    },
    {
      id: 6,
      title: " How Do You Approach A New Graphic Design Project?",
      message:
        "Our approach to a new graphic design project involves understanding your unique requirements and goals, conducting research, brainstorming ideas, creating concepts, refining designs based on feedback, and delivering the final design in the appropriate file formats.",
    },
    {
      id: 7,
      title: "What Services Do You Offer In Graphic Design ",
      message:
        "We offer a wide range of graphic design services, including logo design, branding, print design (such as business cards, brochures, and flyers), web design, social media graphics, packaging design, and more.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Graphic Design Agency That is Pixel Perfect
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/service-page-about.jpg"
                  alt="About"
                />
                <div
                  className="service-about-box bgc-primary"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/work-step-bg.png)",
                  }}
                >
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>
                        Graphic Design Services for the Next Generation of
                        Businesses
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">What We Do</span>
                  <h2>Empower Your Brand with Our Graphic Design Services</h2>
                </div>
                <div className="content">
                  <p>
                    We bring your brand to life with our imaginative designs, as
                    top designers, we create the perfect visual story for your
                    brand’s success.
                  </p>
                  <ul className="list-style-three pt-15 pb-25">
                    <li>Logo design and branding</li>
                    <li>Social media graphics</li>
                    <li>Print & Website design</li>
                  </ul>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10 color-primary">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}
      {/* How We Works start */}
      <section className="how-we-works-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">How We Works</span>
            <h2>Our Process Of Designing The Future</h2>
            <div className="text mt-30">
              <p>
                Listening to client’s needs, Research, Conceptualization,
                Development, Implementation, and Deliver to the responsible
                person
              </p>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-2s">
                <span className="step-number">Step 01</span>
                <h4 className="title">Listening to client's needs</h4>
                <div className="content">
                  <p>Understanding client's goals and requirements</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-3s">
                <span className="step-number">Step 02</span>
                <h4 className="title"> Research and Conceptualization</h4>
                <div className="content">
                  <p>
                    Analyzing data, brainstorming ideas, and creating concepts
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-4s">
                <span className="step-number">Step 03</span>
                <h4 className="title"> Development &amp; Implementation</h4>
                <div className="content">
                  <p>Creating and executing the final product</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item arrow-none wow fadeInUp delay-0-5s">
                <span className="step-number">Step 04</span>
                <h4 className="title">Deliver to responsible person</h4>
                <div className="content">
                  <p>
                    Handing over the final product to the client or other
                    stakeholders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How We Works end */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-two-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Brand Identity Design Service</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>UX & UI Design Service</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Raster To Vector Service</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Image Editing Service</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Illustration Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Product Infographic Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>On-Demand Design Service</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Why Choose Us start */}
      <section className="why-choose-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose DevNEXTGen</span>
                  <h2>Why Choose Our Graphic Design Agency?</h2>
                </div>
                <div className="row gap-60">
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Creative Excellence</h5>
                      </div>
                      <p>
                        Our team of award-winning designers will create original
                        and innovative designs that help your brand stand out.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Strategic Approach </h5>
                      </div>
                      <p>
                        We'll use data-driven insights to develop a design
                        strategy that appeals to your target audience and drives
                        conversions.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Future-Ready Designs </h5>
                      </div>
                      <p>
                        Our designs are not just for today, they're for
                        tomorrow. We ensure they stay relevant even in a rapidly
                        evolving market.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Sustainable Practices </h5>
                      </div>
                      <p>
                        We're committed to creating designs that are
                        eco-friendly and contribute to a sustainable future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right style-two wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-right-two.jpg"
                  alt="Why Choose Right"
                />
                <div className="why-choose-border-shape" />
                <div className="text-shape">
                  <img
                    className="text"
                    src="assets/images/services/web-design-text-two.svg"
                    alt="Web Design Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us end */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-130 rpt-95 pb-105 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq.png" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently Asked Questions about Graphics Design</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      message={data.message}
                      key={data.id}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ServiceDetails;
