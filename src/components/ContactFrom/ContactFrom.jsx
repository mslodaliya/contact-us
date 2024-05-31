import React from "react";
import styles from "./ContactFrom.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { useState } from "react";

function ContactFrom() {


  const [name, setName] = useState("Meghavi");
  const [email, setEmail] = useState("MS@gmail.com");
  const [text, setText] = useState("Meghavi lodaliya @react developer");

  // let name = "Meghavi" ;
  // let email = "ws@s.M";
  // let text = "sdgjvcsih";

    const onSubmit = (event) => {
      event.preventDefault();
      setName(event.target[0].value);
      setEmail(event.target[1].value); 
      setText(event.target[2].value);

        // console.log("name",event.target[0].value)
        // console.log("email",event.target[1].value)
        // console.log("text",event.target [2].value)
    }

    const onViaCallSubmit = () => {
        console.log("I am from call");
    };

  return (
    <div>
      <section className={styles.container}>
        <div className={styles.contact_from}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<IoCallOutline fontSize="24px" />} />
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<IoMail fontSize="24px" />}
          />
          <form
          onSubmit={onSubmit}
          >
            <div className={styles.form_controler}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="8"/>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button text="SUBMIT" />
            </div>

            <div>
              {name + "" + email + "" + text}
            </div>
          </form>
        </div>

        <div className={styles.contact_image}>
            <img src="images/contact.svg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default ContactFrom;
