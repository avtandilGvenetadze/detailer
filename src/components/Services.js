import React from "react";
import "../styles/services.css";

const Services = (props) => {
  const detailing_img_path =process.env.PUBLIC_URL+ "/images/car-detailing-service.jpg";
  const wash_img_path = process.env.PUBLIC_URL+"/images/car-wash-service.webp";
  const insulation_img_path =process.env.PUBLIC_URL+ "/images/car-insulation-service.jpg";

  return (
    <div className="container-for-all-service">
      <Service
        img={detailing_img_path}
        serviceName={
          props.isChecked ? "Car Detailing" : "მანქანის გენერალური დასუფთავება"
        }
        text={
          props.isChecked
            ? "lorem ipsum igjth yh tyjhty tyumjktkhmtoijhytioy tryhjtiyjh"
            : "იდჯგჰტ ირჰირუტ ტრჰიჯგტრი ტგჰიტრჰ ტიჯჰტრი ტიჯჰიტრ"
        }
      />
      <Service
        img={wash_img_path}
        serviceName={props.isChecked ? "Car Wash" : "მანქანის გარეცხვა"}
        text={
          props.isChecked
            ? "lorem ipsum igjth yh tyjhty tyumjktkhmtoijhytioy tryhjtiyjh"
            : "იდჯგჰტ ირჰირუტ ტრჰიჯგტრი ტგჰიტრჰ ტიჯჰტრი ტიჯჰიტრ"
        }
      />
      <Service
        img={insulation_img_path}
        serviceName={props.isChecked ? "Car Insulation" : "ხმის იზოლაცია"}
        text={
          props.isChecked
            ? "lorem ipsum igjth yh tyjhty tyumjktkhmtoijhytioy tryhjtiyjh"
            : "იდჯგჰტ ირჰირუტ ტრჰიჯგტრი ტგჰიტრჰ ტიჯჰტრი ტიჯჰიტრ"
        }
      />
    </div>
  );
};

export default Services;

const Service = (props) => {
  return (
    <div className="containerForService">
      <img className="serviceImage" src={props.img} alt="serviceImage"></img>
      <h1 className="serviceName">{props.serviceName}</h1>
      <p className="serviceText">{props.text} </p>
    </div>
  );
};
