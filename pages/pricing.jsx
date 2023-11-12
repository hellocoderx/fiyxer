import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Pricing = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Pricing Plan"} />
      {/* Page Banner End */}
      {/* Why Choose start */}
      <section className="why-choose-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="row">
                <div className="col-xl-11">
                  <div className="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-50">
                      <span className="sub-title mb-15">
                        Why Choose DevNEXTGen!
                      </span>
                      <h2>Benefit Of Working With Us</h2>
                    </div>
                    <h5>Company Mission</h5>
                    <p>
                      DevNEXTGen: Your digital partner for success, helping you
                      achieve your goals through innovative solutions and
                      exceptional service.
                    </p>
                    <br />
                    <h5>Company Vision</h5>
                    <p>
                      DevNEXTGen: Empowering businesses to thrive online through
                      innovative digital solutions.
                    </p>
                    <Link legacyBehavior href="/about">
                      <a className="theme-btn style-two mt-35">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-item wow fadeInRight delay-0-2s">
                    <div className="icon">
                      <i className="fal fa-bezier-curve" />
                    </div>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          One-stop shop for <br /> all your Digital needs
                        </a>
                      </Link>
                    </h5>
                    <p>
                      We offer a wide range of services under one roof, so you
                      can save time and money by working with one agency.
                    </p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-3s">
                    <div className="icon">
                      <i className="fal fa-cogs" />
                    </div>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Get access to experienced
                          <br />
                          and talented professionals
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Our team has years of experience in the digital industry,
                      and they are passionate about helping their clients
                      succeed.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item mt-30 wow fadeInRight delay-0-4s">
                    <div className="icon">
                      <i className="fal fa-chart-pie" />
                    </div>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          On-time and <br /> on-budget delivery
                        </a>
                      </Link>
                    </h5>
                    <p>
                      We are committed to delivering high-quality services on
                      time and within budget.
                    </p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-5s">
                    <div className="icon">
                      <i className="fal fa-shield-cross" />
                    </div>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Get a custom plan that <br /> meets your unique needs
                          and goals
                        </a>
                      </Link>
                    </h5>
                    <p>
                      We take the time to understand your unique needs and
                      goals, and we develop a custom plan to help you achieve
                      them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose end */}
      {/* Pricing style three start */}
      <section
        className="pricing-area-three pb-85 rpb-55"
        style={{
          backgroundImage:
            "url(assets/images/background/pricing-bg-dot-shape.png)",
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Package
</span>
                <h2>Flexible Pricing Packages to Meet Your Needs
</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-abstract" />
                </div>
                <h5>UI/UX Design</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">80.99</span>{" "}
                  <span className="after">/Starting at</span>
                </span>
                <ul className="list-style-one">
                  <li>Information Architecture</li>
                  <li>Visual Design</li>
                  <li>Interaction Design</li>
                  <li>Usability Testing</li>
                  <li>User Research</li>
                  <li>Accessibility</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon">
                  <i className="flaticon-liquid" />
                </div>
                <h5>Web Design and Development
</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">200</span>{" "}
                  <span className="after">/Starting at</span>
                </span>
                <ul className="list-style-one">
                  <li>Custom Website Design</li>
                  <li>eCommerce Development</li>
                  <li>CMS Development</li>
                  <li>Website Redesign</li>
                  <li>Custom Web Development</li>
                  <li>Web Maintenance and Support</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-petals" />
                </div>
                <h5>Digital Marketing</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">99.3</span>{" "}
                  <span className="after">/Starting at</span>
                </span>
                <ul className="list-style-one">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay-per-click (PPC) Advertising</li>
                  <li>Social Media Marketing (SMM)</li>
                  <li>Content Marketing</li>
                  <li>Email Marketing Strategies</li>
                  <li>Web analytics & Consultancy</li>
                  
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing style three end */}
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
      {/* Pricing start */}
      <section className="pricing-plan-area pt-130 rpt-100 pb-90 rpb-60 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-75 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Pricing Package</span>
                <h2>Monthly Subscription Pricing for Entrepreneurs, Startups, and Businesses
</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pricing-plan-item style-two wow fadeInUp delay-0-2s">
                <div className="icon-title-price">
                  <div className="icon">
                    <i className="flaticon-abstract" />
                  </div>
                  <div className="right-part">
                    <h5>Regular Package</h5>
                    <span className="price-text">
                      <span className="before">$</span>
                      <span className="price">18.3</span>{" "}
                      <span className="after">/per month</span>
                    </span>
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li>Web Design & Development</li>
                  <li>Digital Marketing </li>
                  <li>UI/UX Design</li>
                  <li>Graphics Design</li>
                  <li>Business & eCommerce Management</li>
                  <li>Plus+ Dedicated Support</li>
    
                
                </ul>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn w-100">
                  Get Subscription <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-plan-item style-two wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon-title-price">
                  <div className="icon">
                    <i className="flaticon-liquid" />
                  </div>
                  <div className="right-part">
                    <h5>Premium Package</h5>
                    <span className="price-text">
                      <span className="before">$</span>
                      <span className="price">98.3</span>{" "}
                      <span className="after">/per month</span>
                    </span>
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li>Everything in the Starting Package</li>
                  <li>Startup Business (Growth Secret)</li>
                  <li>Entrepreneurs StartUps Ideas (PLAN)</li>
                  <li>Full Business & eCom Management </li>
                  <li>Conversion Rate Optimization (CRO)</li>
                  <li>Plus+ Dedicated VIP Support</li>
      
                 
                </ul>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn w-100">
                  Get Subscription <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free To Contact Us</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Pricing;
