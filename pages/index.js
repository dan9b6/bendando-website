import { useEffect } from "react";

// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Navbar from "./components/Navbar";
import Message from "./components/Message";

export default function Home() {
  useEffect(() => {
    let doc = window.document,
      context = doc.querySelector(".scroller"),
      clones = context.querySelectorAll(".is-clone"),
      disableScroll = false,
      scrollHeight = 0,
      scrollPos = 0,
      clonesHeight = 0,
      i = 0;

    function getScrollPos() {
      return (
        (context.pageYOffset || context.scrollTop) - (context.clientTop || 0)
      );
    }

    function setScrollPos(pos) {
      context.scrollTop = pos;
    }

    function getClonesHeight() {
      clonesHeight = 0;

      for (i = 0; i < clones.length; i += 1) {
        clonesHeight = clonesHeight + clones[i].offsetHeight;
      }

      return clonesHeight;
    }

    function reCalc() {
      scrollPos = getScrollPos();
      scrollHeight = context.scrollHeight;
      clonesHeight = getClonesHeight();

      if (scrollPos <= 0) {
        setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
      }
    }

    function scrollUpdate() {
      if (!disableScroll) {
        scrollPos = getScrollPos();

        if (clonesHeight + scrollPos >= scrollHeight) {
          // Scroll to the top when you’ve reached the bottom
          setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
          disableScroll = true;
        } else if (scrollPos <= 0) {
          // Scroll to the bottom when you reach the top
          setScrollPos(scrollHeight - clonesHeight);
          disableScroll = true;
        }
      }

      if (disableScroll) {
        // Disable scroll-jumping for a short time to avoid flickering
        window.setTimeout(function () {
          disableScroll = false;
        }, 40);
      }
    }

    function init() {
      reCalc();

      context.addEventListener(
        "scroll",
        function () {
          window.requestAnimationFrame(scrollUpdate);
        },
        false
      );

      window.addEventListener(
        "resize",
        function () {
          window.requestAnimationFrame(reCalc);
        },
        false
      );
    }

    if (document.readyState !== "loading") {
      init();
    } else {
      doc.addEventListener("DOMContentLoaded", init, false);
    }
  });
  return (
    <div className="home">
      <Head>
        <title>Home | BenDando</title>
      </Head>
      <Navbar />
      <Message />
      <div className="landing">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5 me-4">
              <h1 className="mb-4">
                We build beautiful websites and applications with web services.
              </h1>
              <h5 className="mb-4">Check out the services that we offer.</h5>
              <div>
                <Link href="/services">
                  <a>
                    <button type="button" className="btn" id="home-btn">
                      View Our Services
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroller" id="scroller">
        <Link href="/tenants-hub">
          <div className="scroller-img">
            <img className="landing-img" src="/images/tenanthub.png" />
            <div className="scroller-name">
              <h3>Tenant Hub</h3>
            </div>
            <div className="mask"></div>
          </div>
        </Link>
        <Link href="/green-acre">
          <div className="scroller-img">
            <img className="landing-img" src="/images/greenacre.png" />
            <div className="scroller-name">
              <h3>Green Acre</h3>
            </div>
            <div className="mask"></div>
          </div>
        </Link>
        <Link href="/malcolm-wall">
          <div className="scroller-img">
            <img className="landing-img" src="/images/malcolm-wall.png" />
            <div className="scroller-name">
              <h3>Malcolm Wall</h3>
            </div>
            <div className="mask"></div>
          </div>
        </Link>
        <Link href="/win-a-flat">
          <div className="scroller-img">
            <img className="landing-img" src="/images/win-a-flat.png" />
            <div className="scroller-name">
              <h3>Win A Flat</h3>
            </div>
            <div className="mask"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="scroller-img is-clone">
            <img className="landing-img" src="/images/tenanthub.png" />
            <div className="scroller-name">
              <h3>Tenant Hub</h3>
            </div>
            <div className="mask"></div>
          </div>
        </Link>
        <Link href="/green-acre">
          <div className="scroller-img is-clone">
            <img className="landing-img" src="/images/greenacre.png" />
            <div className="scroller-name">
              <h3>Green Acre</h3>
            </div>
            <div className="mask"></div>
          </div>
        </Link>
        <Link href="/malcolm-wall">
          <div className="scroller-img is-clone">
            <img className="landing-img" src="/images/malcolm-wall.png" />
            <div className="scroller-name">
              <h3>Malcolm Wall</h3>
            </div>
            <div className="mask"></div>
          </div>
        </Link>
        <Link href="/win-a-flat">
          <div className="scroller-img is-clone">
            <img className="landing-img" src="/images/win-a-flat.png" />
            <div className="scroller-name">
              <h3>Win A Flat</h3>
            </div>
            <div className="mask"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
