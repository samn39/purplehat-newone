import React from "react";
import Button from "../components/Button";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Quizapp from "../components/quiz/Quizapp";

const Quiz = () => {
  return (
    <div>
      <Header />
      <Navbar />


      <h2 className="thank">Find Out How Much You Know About Shaken Baby Syndrome</h2>
      <Quizapp />

      <Button name="Back to Homepage." link="/" />
      <Button name="Check Out our Instagram!" link="/" />

      <Footer />
    </div>
  );
};

export default Quiz;
