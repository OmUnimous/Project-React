import React from "react";
import { Container } from "react-bootstrap";

const myStyle={
  marginTop : '30px',
  textAlign : 'center'
}

export const Map = () => {
    return (
        <Container>
          <h3>FIND US ON MAP</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.859667402931!2d73.0516712740599!3d19.025904453545518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1702096208342!5m2!1sen!2sin" width="110%" height="300"  allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            title = 'responsive google maps' className=" mt-4"></iframe>
            <h4  className=" mt-3">GET IN TOUCH</h4>
            <h6  className=" mt-3">WE ARE ALWAYS READY TO HEAR FROM YOU</h6>
            <h6  className=" mt-3">OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.</h6>
            <h6>Address:- Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</h6>
Email: WeCare@GoldsGym.in
        </Container>
    );
  };
  
