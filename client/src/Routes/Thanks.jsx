import React from "react";
import Button from "../components/Button";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const Thanks = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <h2 className="thank">Thank you for your interest. </h2>
      <h2 className="thank2">We will get back to you shortly. </h2>

      <Button name ="Back to Homepage." link="/" />
      <Button name ="Check Out our Instagram!" link="/"/>
      <Button name ="Try Our Quiz About Shaken Baby Syndrome." link="/quiz"/>


      <section className="below-the-fold">
        <section className="media">
          <section className="pics">
            <img
              className="media-2"
              src="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/IMG_0100.jpg?v=1648331954566"
            />
          </section>
        </section>
      </section>

      
      <Footer />
    </div>
  );
};

export default Thanks;
