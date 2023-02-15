import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section>
      <main className="NavBar"></main>
      <article id="ContactUsContainer">
        <main id="filler"></main>
        <main id="ContactUs">
          <div
            style={{
              color: "#c89738",
              fontSize: "50px",
              paddingBottom: "10px",
            }}
          >
            Contact us
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <GiRotaryPhone
              fontSize={60}
              color={"black"}
              style={{
                background: "#c89738",
                borderRadius: "6px",
                padding: "10px",
              }}
            />
            <p style={{ fontSize: "2em" }}>+91 915-935-7264</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <IoMail
              fontSize={60}
              color={"black"}
              style={{
                background: "#c89738",
                borderRadius: "6px",
                padding: "10px",
              }}
            />
            <p style={{ fontSize: "1.8em" }}>info.serenobarn@mail.com</p>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <IoIosPin
              fontSize={60}
              color={"black"}
              style={{
                background: "#c89738",
                borderRadius: "6px",
                padding: "10px",
              }}
            />
            <p style={{ fontSize: "1.8em" }}>
              Address:Sereno Barn, 196/4
              <br />
              Mavinahalla,Arushnaguppe,
              <br />
              Chikmangalur-577131
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10%",
              paddingTop: "60px",
              paddingLeft: "70px",
            }}
          >
            <FaFacebookF fontSize={32} color={"#c89738"} />
            <FaInstagram fontSize={32} color={"#c89738"} />
            <FaTwitter fontSize={32} color={"#c89738"} />
            <FaYoutube fontSize={32} color={"#c89738"} />
          </div>
        </main>
      </article>
    </section>
  );
};

export default ContactUs;
