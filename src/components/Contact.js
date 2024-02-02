import React from "react";
import "../styles/contact.css";

const ContactUsPage = (props) => {
  const copyEmail = () => {
    navigator.clipboard.writeText("info@dethrco.com");
    window.alert("Email copied to clipboard!");
  };
  const copyNumber = () => {
    navigator.clipboard.writeText("555555555");
    window.alert("Number copied to clipboard!");
  };
  const copyAdress = () => {
    navigator.clipboard.writeText("29a Moscow avenue, Georgia");
    window.alert("Adress copied to clipboard!");
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">
        {props.isChecked ? "Contact Us" : "დაკავშირება"}
      </h2>
      <div className="contact-info">
        <p>
          <strong> {props.isChecked ? "Email:" : "ემაილი:"}</strong>{" "}
          info@dethrco.com
        </p>
        <button onClick={copyEmail} className="copyInformation">
          {props.isChecked ? "copy email" : "ემაილის კოპირება"}
        </button>

        <p>
          <strong>{props.isChecked ? "Phone:" : "ტელეფონის ნომერი"}</strong>{" "}
          (+995) 555555555
        </p>
        <button onClick={copyNumber} className="copyInformation">
          {props.isChecked ? "copy number " : "ნომრის კოპირება"}
        </button>

        <p>
          <strong>{props.isChecked ? "Address:" : "მისამართი: "}</strong> 29a
          {props.isChecked
            ? " Moscow avenue,Tbilisi, Georgia"
            : " მოსკოვის გამზირი, თბილისი, საქართველო"}
        </p>
        <button onClick={copyAdress} className="copyInformation">
          {props.isChecked ? "copy adress" : "მისამართის კოპირება"}
        </button>
      </div>
      <h2 className="location-tittle">
        {props.isChecked ? "Location" : "ლოკაცია"}
      </h2>
      <button
        className="Go-to-address"
        onClick={() => {
          window.open("https://www.google.com/maps/search/29a Moscow avenue");
        }}
      >
        {props.isChecked ? "Go to address" : "მისამართზე გადასვლა"}
      </button>
      <img className="map" src={process.env.PUBLIC_URL + '/images/map.jpg'} alt="Map" />
    </div>
  );
};

export default ContactUsPage;
