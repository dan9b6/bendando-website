// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="project">
      <Head>
        <title>Projects | BenDando</title>
      </Head>
      <Navbar />
      <div className="landing-2">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="mb-4">Our Projects</h1>
              <h5 className="mb-4">
                We use industry best practise technologies with bundling
                techniques to ensure that your website only sends the files that
                are required to ensure the best performance on all devices.
              </h5>
              <Link href="/win-a-flat">
                <a>
                  <button type="button" className="btn global-btn">
                    View Our Last Project
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-display mt-5">
          <div className="row justify-content-evenly mb-3">
            <div className="col-md-5 mb-3 text-center project-section">
              <div className="project-mask"></div>
              <img className="project-image" src="/images/tenanthub.png" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Tenants Hub</h5>
                </div>
                <div className="project-type">App Build</div>
              </div>
            </div>
            <div className="col-md-5 mb-3 text-center project-section">
              <div className="project-mask"></div>
              <img className="project-image" src="/images/win-a-flat.png" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Win A Flat</h5>
                </div>
                <div className="project-type">App Build</div>
              </div>
            </div>
          </div>
          <div className="row justify-content-evenly pb-5">
            <div className="col-md-5 mb-3 text-center project-section">
              <div className="project-mask"></div>
              <img className="project-image" src="/images/greenacre.png" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Green Acre</h5>
                </div>
                <div className="project-type">Website Build</div>
              </div>
            </div>
            <div className="col-md-5 mb-3 text-center project-section">
              <div className="project-mask"></div>
              <img className="project-image" src="/images/malcolm-wall.png" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Malcolm Wall</h5>
                </div>
                <div className="project-type">Website Build</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
