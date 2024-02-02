import React from "react";
import "../styles/about.css";

const About = (props) => {
  return (
    <div className="about-container">
      <h1 className="about-title">
        {props.isChecked ? "About Us" : "ჩვენს შესახებ"}
      </h1>
      <div className="about-section">
        <p className="about-text">
          {props.isChecked
            ? " Welcome to Detailer Co, the most trusted and top-rated detailing company in Tbilisi. Our expert team delivers top-rated detailing services leaving your car spotless. With our commitment to quality, reliability, and customer satisfaction, we guarantee a hassle-free detailing experience that will exceed your expectations. Say goodbye to stress and hello to a fresh and clean car."
            : "კეთილი იყოს თქვენი მობრძანება Detailer-ში, ყველაზე სანდო და რეიტინგულ კომპანიაში თბილისში. ჩვენი ექსპერტთა გუნდი  გაძლევთ საშუალებას  აქციოთ თქვენი მანქანა უნაკლო. ხარისხისადმი ჩვენი ერთგულებით, საიმედოობა და მომხმარებლის კმაყოფილება, ჩვენ გარანტიას გაძლევთ უპრობლემოდ დეტალური გამოცდილება, რომელიც გადააჭარბებს თქვენს მოლოდინს. Თქვი ნახვამდის სტრესს და გამარჯობა ახალ და სუფთა მანქანას."}
        </p>
      </div>
      <div className="about-section">
        <h2 className="about-subtitle">
         {props.isChecked ? "Our Mission" : "ჩვენი მიზანი"}
        </h2>
        <p className="about-text">
          
        {props.isChecked
        ? "At Detailer Co, our mission is to provide the highest quality car detailing services to our customers while delivering exceptional value. We strive to exceed customer expectations with every service we provide and ensure that each car leaves our shop looking its absolute best."
        : "Detailer-ში ჩვენი მისიაა მივაწოდოთ უმაღლესი ხარისხის მანქანის დეტალების მომსახურება ჩვენს მომხმარებლებს განსაკუთრებული ღირებულების მიწოდებით. ჩვენ ვცდილობთ გადავაჭარბოთ მომხმარებელთა მოლოდინს ყოველი სერვისით, რომელსაც ჩვენ გთავაზობთ და უზრუნველვყოთ, რომ თითოეული მანქანა ტოვებს ჩვენს მაღაზიას საუკეთესოდ. ”"
      }
        </p>
      </div>
      <div className="about-section">
        <h2 className="about-subtitle"> {props.isChecked ? "Our Team" : "ჩვენი გუნდი"}</h2>
        <p className="about-text">
        {
  props.isChecked
  ? "Our team of experienced professionals is dedicated to delivering outstanding results and exceptional customer service. We take pride in our work and treat every car as if it were our own. With years of experience in the industry, you can trust us to take care of all your car detailing needs."
  : "Detailer-ში ჩვენი მისიაა მიაღწია უმაღლეს ტექნოლოგიურ მანქანებს, ვცდილობთ მომხმარებლებთან ერთად. მას აქვს მომხმარებლის მოლოდინის მოლოდინი ყოველი სერვისით, რომელსაც ჩვენ გვთავაზობს და უზრუნველვყოფთ, რომელი მანქანა ტოვებს საკუთარ მაღაზიას საუკეთესოდ."
}
        </p>
      </div>
    </div>
  );
};

export default About;
