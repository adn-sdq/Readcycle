import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Readcycle"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At Readcycle, we believe in the enduring magic of storytelling 
          and the power of shared knowledge. Our mission is to breathe new 
          life into beloved books by connecting them with passionate readers
          like you. We are more than just an online bookstore; we are a community
          that celebrates the journey of each book and the stories they carry.

            <p className="text-justify mt-2">
            Founded with a commitment to sustainability and the joy of reading, 
            Readcycle is your go-to destination for pre-loved books that have been 
            cherished by fellow book lovers. Every book on our platform has a unique
             story – from the first page it touched to the hands that flipped through 
             its chapters. By choosing Readcycle, you're not just buying a book; you're 
             adopting a piece of literary history.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
