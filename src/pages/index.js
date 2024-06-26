import * as React from 'react'
import { Button } from 'react-bootstrap'
// Components
import CardCountdown from '../components/CardCountdown'
import CardInfo from '../components/CardInfo'
import CardSubscribe from '../components/CardSubscribe'
import CardProgress from '../components/CardProgress'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SectionGallery from '../components/SectionGallery'
import SectionInstagram from '../components/SectionInstagram'
import SectionLineups from '../components/SectionLineups'
import SectionReels from '../components/SectionReels'
import Tabs from '../components/Tabs'
// Assets
import dividerDrip from '../assets/images/png/divider-drip.png'
import footerRated from '../assets/images/png/footer-rated.png'
import gifEye from '../assets/images/gif/gif-eye.gif'
import gifSkulls from '../assets/images/gif/gif-skulls.gif'
import glowingDuck from '../assets/images/png/glowing-duck.png'
import headerIts from '../assets/images/png/header-its.png'
import headerCollage from '../assets/images/png/header-collage.png'
import headerPhotoburn from '../assets/images/png/header-photoburn.png'
import headlinersTitle from '../assets/images/image/headliners-title.png'
import headlinersFrame from '../assets/images/png/headliners-frame.png'
import Chatbot from '../components/Chatbot'

const IndexPage = () => {
  return (
    <main>
      <Chatbot></Chatbot>
      <header className="bg-header container-lg-fluid pt-5">
        <Navigation></Navigation>
        {/* Header */}
        <section className="d-lg-flex align-items-center pt-5 mx-5">
          <div className="header-image col-lg-4 d-flex justify-content-lg-start justify-content-center mt-lg-5 ms-4">
            <img src={headerIts} alt="header-its" />
          </div>
          <div className="col-lg-7 text-center pt-lg-5 mt-lg-5">
            <p className="t1 mt-lg-0 mt-5">Deeper, Darker, Dirtier</p>
            <h2>
              Asia's largest festival at sea returns with our spookiest edition.
            </h2>
            <div className="d-flex justify-content-center">
              <p className="t3 red-tag mb-4">Singapore | 1-3 Nov 2023</p>
            </div>
            <Button>Book A Cabin</Button>
          </div>
        </section>
        <div className="header-web"></div>
      </header>

      {/* Introduction */}
      <section className="section-intro container d-lg-flex pb-5">
        <div className="col-lg-3 ms-lg-2 ms-5">
          <img
            src={headerCollage}
            className="header-collage"
            alt="header-collage"
          />
        </div>
        <div className="col-lg-4 ms-lg-5 mt-4 mt-lg-0">
          <p className="t3">It's NOT JUST A PARTY</p>
          <h1>IT'S THE SHIP, WELCOME HOME BABY</h1>
          <p className="py-2">
            Ahoy Shipmates! IT'S THE SHIP is Asia's Largest Festival at Sea,
            bringing you a batship festival shipcation experience unlike any
            other. Hop aboard our haunted vessel, The Genting Dream, for the
            most hair-raising 3D2N Halloween festival at sea. Expect a
            spooktastic adventure this November with round the clock DJ Sets,
            Theme Parties, Side Activities and many more.
          </p>
          <Button>Book A Cabin</Button>
        </div>
        <div className="col-lg-4">
          <img
            src={headerPhotoburn}
            className="header-photoburn"
            alt="header-photoburn"
          />
        </div>
      </section>
      {/* Headliners */}
      <section className="bg-headliners py-5 mt-2">
        <div className="d-flex justify-content-center">
          <img
            src={headlinersTitle}
            className="headliners-title"
            alt="headliners-title"
          />
        </div>
        <div className="d-flex justify-content-center pt-5">
          <img
            src={headlinersFrame}
            className="headliners-frame"
            alt="headliners-title"
          />
        </div>
        <p className="t2 text-center">With many more to be announced</p>
      </section>
      {/* Fun Activities */}
      <section className="border-beige mt-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center py-4 align-items-center text-danger">
          <h2 className="text-lg-start text-center">What to expect on board</h2>
          <Button>Book A Cabin</Button>
        </div>
        {/* Tabs */}
        <Tabs></Tabs>
      </section>

      <div className="container my-5">
        {/* Cabins */}
        <section className="pt-lg-5">
          <div className="d-lg-flex col-lg-12 my-4 align-items-center">
            {/* Description */}
            <div className="col-lg-6">
              <h1 className="text-lg-start text-center">Cabins</h1>
              <p className="text-lg-start text-center">
                Home away from home, your cabin is your entry ticket into IT'S
                THE SHIP's erie adventure on the high seas for a hauntingly good
                time! Your cabin bookings includes access to your accommodation,
                DJ Sets, Theme Parties, Side Activities and round the clock
                dining.
              </p>
            </div>
            {/* Availibility */}
            <div className="col-lg-5 offset-lg-1 py-3 py-lg-0">
              <CardProgress></CardProgress>
            </div>
          </div>
          {/* Selections */}
          <div className="row g-4 gy-lg-0">
            <div className="col-lg-4">
              <CardInfo></CardInfo>
            </div>
            <div className="col-lg-4">
              <CardInfo></CardInfo>
            </div>
            <div className="col-lg-4">
              <CardInfo></CardInfo>
            </div>
          </div>
          <div className="d-flex justify-content-center my-4">
            <Button>View All Cabins</Button>
          </div>
        </section>
        {/* Previous Reels */}
        <section className="pb-5">
          {/* Eye gif */}
          <div className="d-lg-flex justify-content-end">
            <img src={gifEye} height="253px" alt="gif-eye" />
          </div>
          <h3 className="d-flex text-lg-start text-center pb-lg-5 pb-3">
            I KNOW WHAT YOU DID LAST SAILINGS…
          </h3>
          <SectionReels></SectionReels>
          <div className="d-flex justify-content-center">
            <Button>Book A Cabin</Button>
          </div>
        </section>
      </div>

      {/* Past Lineups */}
      <section className="bg-red d-lg-flex justify-content-center align-items-center py-5">
        <div className="container col-lg-10 row">
          <h2 className="mt-4 text-center">Past Lineups</h2>
          <SectionLineups></SectionLineups>
        </div>
      </section>
      <img src={dividerDrip} width="100%" alt="divider-drip" />
      {/* Tagline */}
      <section className="bg-tagline d-flex align-items-end justify-content-center mb-5">
        <div className="row text-center">
          <h1>DEEPER, DARKER, DIRTIER</h1>
          <p className="t2">
            No tricks, just treats on Asia's Largest Festival at Sea
          </p>
          <div>
            <Button className="outline mt-3">Book A Cabin</Button>
          </div>
        </div>
      </section>

      <div className="container offset-lg-1 col-lg-10 py-5">
        {/* Instagram Posts */}
        <section className="mt-4 p-lg-5 px-4 py-5 border border-2 border-danger rounded-4">
          <div className="ig-skulls d-flex justify-content-center mb-4">
            <img src={gifSkulls} alt="gif-skulls" />
          </div>
          <h1 className="text-center pb-4">Follow us on Instagram</h1>
          <SectionInstagram></SectionInstagram>
        </section>
        {/* Gallery */}
        <div className="gallery-web d-lg-block d-none"></div>
        <section className="section-gallery pb-5">
          <h1 className="text-center pb-4">Gallery</h1>
          <SectionGallery></SectionGallery>
        </section>
        {/* Countdown */}
        <section className="d-lg-flex justify-content-between align-items-center py-5 mb-3">
          <div className="col-lg-5 text-lg-start text-center pb-lg-0 pb-4">
            <h3>Counting down to a Hauntingly Good Time</h3>
            <p>Ship sails in...</p>
          </div>
          <div className="offset-lg-3 col-lg-4">
            <CardCountdown></CardCountdown>
          </div>
        </section>
        {/* Newsletter Sign Up */}
        <div className="newsletter-duck d-flex justify-content-lg-start justify-content-center">
          <img src={glowingDuck} alt="glowing-duck" />
        </div>
        <section className="section-newsletter">
          <CardSubscribe></CardSubscribe>
        </section>
      </div>

      <footer className="bg-footer d-flex justify-content-center align-items-end">
        <section className="row">
          <div className="text-center mb-5">
            <img
              src={footerRated}
              className="footer-rated"
              alt="footer-rated"
            />
            <h3 className="my-4">
              #RatedArghh
              <span className="border border-2 border-danger rounded-3 px-1 ms-1">
                ItsTheShip.com
              </span>
            </h3>
          </div>
          <Footer></Footer>
        </section>
      </footer>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>It's The Ship</title>
