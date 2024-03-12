import React from 'react';
import Image from 'next/image';
import '../Landing_page/Landing_page_style.css';

export default function Landing_page() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
  />
  <link rel="stylesheet" href="../Landing_page/Landing_page_style.css" />
  <title>DeveloperHub</title>
  <header>
    <a href="#" className="logo">
      DeveloperHub
    </a>
    <nav className="navigation">
      <a href="#Key Features">Key Features</a>
      <a href="#DevelopersSay">Developers Say</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
      <section className="main" style={{backgroundImage: "url('/images/background.jpg')"}}>
        <div>
          <h2>
            Welcome to <br/>
            <span>DeveloperHub</span>
          </h2>
          <h3>
            Join our thriving community of developers to share your code.
            <br/> Elevate your coding experience!
          </h3>
          <a href="#Sign_Up" className="main-btn">
            Sign Up Now
          </a>
        </div>
      </section>
      <section className="cards" id="Key Features">
        <h2 className="title">Key Features</h2>
    <div className="content">
      <div className="card">
        <div className="icon">
          <i className="fa-regular fa-1" />
        </div>
        <div className="info">
          <h3>Code Sharing</h3>
          <p>
            Share your code snippets and projects with fellow developers. Get
            feedback and improve your skills.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="fa-regular fa-2" />
        </div>
        <div className="info">
          <h3>Collaborative Environment</h3>
          <p>
            Collaborate on coding projects, work together on solving challenges,
            and learn from each other.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="fa-regular fa-3" />
        </div>
        <div className="info">
          <h3>Discover New Ideas</h3>
          <p>
            Explore a world of coding-related content. Find inspiration,
            tutorials, and stay updated on industry trends.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="DevelopersSay" id="DevelopersSay">
    <h2 className="title">What Our Developers Say</h2>
    <div className="content">
      <div className="DevelopersSay-card">
        <div className="DevelopersSay-image">
          <Image
              src="/images/background.jpg"
              alt="Background Image"
              width={500}
              height={500}
          />

        </div>
        <div className="DevelopersSay-info">
          <p className="DevelopersSay-category">
            script writing script writing
          </p>
          <strong className="DevelopersSay-titel">
            <span>script writing</span>
            <a href="#" className="more-details">
              more-details
            </a>
          </strong>
        </div>
      </div>
      <div className="DevelopersSay-card">
        <div className="DevelopersSay-image">
          <Image
              src="/images/background.jpg"
              alt="Background Image"
              width={500}
              height={500}
          />

        </div>
        <div className="DevelopersSay-info">
          <p className="DevelopersSay-category">
            script writing script writing
          </p>
          <strong className="DevelopersSay-titel">
            <span>script writing</span>
            <a href="#" className="more-details">
              more-details
            </a>
          </strong>
        </div>
      </div>
      <div className="DevelopersSay-card">
        <div className="DevelopersSay-image">
          <Image
              src="/images/background.jpg"
              alt="Background Image"
              width={500}
              height={500}
          />

        </div>
        <div className="DevelopersSay-info">
          <p className="DevelopersSay-category">
            script writing script writing
          </p>
          <strong className="DevelopersSay-titel">
            <span>script writing</span>
            <a href="#" className="more-details">
              more-details
            </a>
          </strong>
        </div>
      </div>
    </div>
  </section>
  <section className="cards contact" id="contact">
    <h2 className="title">Get In Touch</h2>
    <div className="content">
      <div className="card">
        <div className="icon">
          <i className="fa-solid fa-phone" />
        </div>
        <div className="info">
          <h3>phone</h3>
          <p>+42000000000</p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="fa-solid fa-envelope" />
        </div>
        <div className="info">
          <h3>email</h3>
          <p>GA@GA.com</p>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <p className="footer-title">
      {" "}
      Copyrights @ <span>GA</span>
    </p>
    <div className="social-icons">
      <a href="#">
        <i className="fa-brands fa-linkedin" />
      </a>
      <a href="#">
        <i className="fa-brands fa-facebook" />
      </a>
      <a href="#">
        <i className="fa-brands fa-instagram" />
      </a>
      <a href="#">
        <i className="fa-regular fa-at" />
      </a>
    </div>
  </footer>
</>

  );
};


