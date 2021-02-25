// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

export default function tenanthub() {
  return (
    <div className="tenants-hub">
      <Navbar />
      <div className="landing-2">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <h1 className="mb-4">Tenants Hub</h1>
              <h4 className="mb-4">App & Website Build</h4>
              <h5 className="mb-4">
                This is a Property Management app used to connect Block and
                Letting Managers, Owners, Surveyors, Maintenance Personnel and
                Residents. It's built for your tenants to manage all their
                building related needs, your maintenance personnel to manage
                their work and to manage all your building services.
              </h5>
            </div>
            <div className="col-md-6">
              <img
                className="landing-img mb-5"
                src="/images/winaflat/mockup.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-content">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <img
                className="project-desktop mb-5"
                src="/images/tenant-hub/desktop-screenshot.png"
              />
              <h2>Features</h2>
              <ul>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Website
                    design and creation.
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Optimized
                    for quicker download times
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>3D
                    environmental viewer
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Ecommerce
                    System
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Apple /
                    Android Pay
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Customer
                    entries database
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Analytics
                  </h5>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                className="project-mobile"
                src="/images/tenant-hub/mobile-screenshot.png"
              />
            </div>
          </div>
          <div className="row pb-5 align-items-center reverse">
            <div className="col-md-6">
              <img
                className="project-mobile mb-4"
                src="/images/winaflat/3D-flat.png"
              />
            </div>
            <div className="col-md-6 position-relative">
              {/* <div className="shape-1"></div>
              <div className="shape-2"></div> */}
              <div className="project-text mx-3">
                <p>
                  Winaflat was fully optimized to load as quickly as possible
                  for the wide variety of devices and users.
                </p>
                <p>
                  With heavy use of analytics we analysed and modified the
                  website to reach the largest audience.
                </p>
                <p>
                  Containers a Panorama viewer allowing users to move round the
                  interior of the flat to really get a feel for the prize.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5 align-items-center">
            <div className="col-md-6">
              <img
                className="project-mobile mb-4"
                src="/images/winaflat/3D-flat.png"
              />
            </div>
            <div className="col-md-6 position-relative">
              {/* <div className="shape-1"></div>
              <div className="shape-2"></div> */}
              <div className="project-text mx-3">
                <p>
                  We used an ecommerce system accepting card and android and
                  apple pay to make the process as seamless as possible with a
                  custom database storing user details.
                </p>
                <p>
                  We also created random selection software for the prize draw
                  to be live streamed from the website when Uri Geller announces
                  the winner.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center py-4 project-link">
          <Link href="https://www.tenantshub.co.uk/">
            <a>
              <h3>View site</h3>
            </a>
          </Link>
        </div>
        <div className="project-end tenants-hub">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Next Project</h5>
                <h2>Win A Flat</h2>
                <Link href="/win-a-flat">
                  <a>
                    <button type="button" className="btn" id="home-btn">
                      View Next Project
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
