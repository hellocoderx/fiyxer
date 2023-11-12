import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import { useRef, useState } from "react";
import { Accordion } from "react-bootstrap";
import emailjs from '@emailjs/browser';
const Faqs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5hi4z68', 'template_y6bow1w', form.current, 'R2GcVUQTGg5wv7OaZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  const accordionDataFast = [
    {
      id: 1,
      title: "What is DevNEXTGen?",
      message:
        "DevNEXTGen is a digital agency that offers a wide range of services, including web development, UX/UI design, graphic design, and digital marketing. They are committed to providing their clients with high-quality services, delivered on time and within budget. DevNEXTGen is a team of experienced and talented professionals who are passionate about helping their clients succeed.",
    },
    {
      id: 2,
      title: "What services does DevNEXTGen offer?",
      message:
        "DevNEXTGen is a digital agency that offers a wide range of services, including : Website development, UX/UI design,  Graphic design, Digital marketing, Mobile app development,  eCommerce development,  Content marketing, Social media marketing, Search engine optimization (SEO), Pay-per-click (PPC) advertising ",
    },
    {
      id: 3,
      title: "Why should I choose DevNEXTGen?",
      message:
        "DevNEXTGen is a team of experienced and talented professionals who are passionate about helping their clients succeed. They offer a wide range of services, competitive rates, and a satisfaction guarantee.",
    },
    {
      id: 4,
      title: "What is DevNEXTGen's process for working with clients?",
      message:
        "DevNEXTGen begins by working with each client to understand their unique needs and goals. Once they have a good understanding of the client's needs, they develop a custom plan to deliver the desired results.",
    },
  ];
  const accordionDataLast = [
    {
      id: 1,
      title: "How do I get started with DevNEXTGen?",
      message:
        "To get started with DevNEXTGen, simply contact them for a free consultation. They will discuss your needs and goals, and they will develop a custom plan to help you achieve them.",
    },
    {
      id: 2,
      title: "What is DevNEXTGen's pricing structure?",
      message:
        "DevNEXTGen's pricing structure varies depending on the specific services being provided. However, they offer competitive rates and work with clients to develop a budget that meets their needs.",
    },
    {
      id: 3,
      title: "What are some of DevNEXTGen's success stories?",
      message: "DevNEXTGen has a long track record of success.",
    },
    {
      id: 4,
      title: "What is DevNEXTGen's refund policy?",
      message:
        "DevNEXTGen offers a satisfaction guarantee on all of their services. If a client is not happy with the results of a project, DevNEXTGen will work with them to make necessary revisions or provide a refund.",
    },
    {
      id: 5,
      title: "Does DevNEXTGen offer any guarantees?",
      message:
        "Yes, DevNEXTGen offers a satisfaction guarantee on all of their services. If a client is not happy with the results of a project, DevNEXTGen will work with them to make necessary revisions or provide a refund.",
    },
  ];

  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Faqs"} />
      {/* Page Banner End */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-130 rpt-100 pb-130 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-5">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-two.jpg" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently asked questions About DevNEXTGen!</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionDataFast.map((data, i) => (
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
        <div className="faq-shapes">
          <img
            className="shape left"
            src="assets/images/shapes/ellipse-left.png"
            alt="Shape"
          />
          <img
            className="shape right"
            src="assets/images/shapes/ellipse-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* FAQ's Area end */}
      {/* FAQ's Area start */}
      <section className="faq-area pb-105 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-2">
              <div className="faq-iamge-part text-lg-end rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-three.png" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>DevNEXTGen: Your One-Stop Shop for All Things Digital</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionDataLast.map((data, i) => (
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
      {/* Contact Form Area start */}
      <section className="contact-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title mb-50 text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work Together</span>
                <h2>Let’s Work Together For Your Nest Projects</h2>
              </div>
            </div>
            <div className="col-xl-10 col-lg-11">
              <form
                ref={form} onSubmit={sendEmail} 
                id="teamForm"
                className="form-style-one z-1 rel wow fadeInUp delay-0-3s"
              >
                <div className="row gap-60 pt-15">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <i className="far fa-phone" />
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone_number"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="far fa-pencil" />
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Message"
                        required={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group pt-5 mb-0">
                      <button
                        type="submit"
                        className="theme-btn style-two w-100"
                      >
                        Send Message us <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Faqs;
