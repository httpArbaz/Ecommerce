import React, { useState, useEffect } from "react";
import "./index.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactDetail() {
  const matches = useMediaQuery("(max-width:800px)");
  const matchesPro = useMediaQuery("(max-width:1150px)");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const Submit = () => {
    if (!email || !name || !message || !subject) {
      setFail(true);
    } else {
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (success === true) {
      setFail(false);
    }
  }, [success]);

  return (
    <div className="contactMain">
      <h1
        data-aos="fade-right"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Contact Details
      </h1>
      <div className="ContactDetail">
        <div className="Detail">
          {/* location / email / call boxes */}
          <div data-aos="fade-top" className="DetailContainer">
            <div className="detailBox">
              <LocationOnIcon className="iconColor" />
              <div className="boxText">
                <h2>Our Location</h2>
                <p>
                  ETROLLY LLC, 35644 AVALON PARK EAST BLVD SITE 1-A896 ORLANDO,
                  FL 32828-7365{" "}
                </p>
              </div>
            </div>

            {/* <div className="detailBox">
              <MarkEmailReadIcon className="iconColor" />
              <div className="boxText">
                <h2>Call Us</h2>
                <p>+1 (407) 214-7915</p>
              </div>
            </div> */}

            <div className="detailBox">
              <LocalPhoneIcon className="iconColor" />
              <div className="boxText">
                <h2>Our Email </h2>
                <p>info@etrollystore.com</p>
              </div>
            </div>
          </div>

          {/* form */}

          <div>
            {/* <h1 data-aos="fade-right" className="msgText">
              Send Us a Message
            </h1>
            <div data-aos="fade-top" className="FormContact">
              {success === true ? (
                <p className="success">
                  Thanks for contacting us! We will be in touch with you
                  shortly.
                </p>
              ) : (
                <>
                  <TextField
                    sx={{ width: "80%", marginBottom: "20px" }}
                    id="outlined-basic"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ width: "80%", marginBottom: "20px" }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    onChange={(e) => setSubject(e.target.value)}
                    sx={{ width: "80%", marginBottom: "20px" }}
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                  />
                  <TextField
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{ width: "80%", marginBottom: "20px" }}
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                  />
                </>
              )}
              {fail === true ? (
                <p className="fail"> Please Fill All The fields</p>
              ) : null}

              {success === true ? null : (
                <button onClick={Submit} className="heroButton">
                  Submit
                </button>
              )}
            </div> */}
          </div>
        </div>
        <div className="detailBox">
          <MarkEmailReadIcon className="iconColor" />
          <div className="boxText">
            <h2>Call Us</h2>
            <p>+1 (407) 214-7915</p>
          </div>
        </div>
        {/* <div className="detailMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.936033450246!2d-81.15631278505423!3d28.51157219629631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e75d8f20179927%3A0xbc7f483eddb49908!2sAvalon%20Park%20E%20Blvd%2C%20Florida%2032828%2C%20USA!5e0!3m2!1sen!2s!4v1673893379848!5m2!1sen!2s"
            width={matches === true ? 300 : matchesPro === true ? 350 : 400}
            height={550}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="etrally"
            referrerPolicy="no-referrer-when-downgrade"
          />



        
        </div> */}
      </div>
    </div>
  );
}

export default ContactDetail;
