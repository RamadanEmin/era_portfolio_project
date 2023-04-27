import React, { useRef } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ButtomReturn from '../../components/ButtonReturn/ButtomReturn';
import contact from '../../videos/contact.mp4';
import { FaMailBulk, FaPhoneAlt, FaCity } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();

  return (
    <motion.div
      className="contact_container"
      variants={}
      initial="initial"
      animate="animate"
    >
      <NavBar />
      <ButtomReturn />
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
        }}
      >
        <source src={contact} type="video/mp4" />
      </video>
      <motion.div
        className="contact_info"
        variants={}
        initial="initial"
        animate="animate"
      >
        <div className="contact_desc">
          <FaCity style={{ color: 'dimgray' }} />
          <h1> Address </h1>
        </div>
        <p>Bulgaria / Plovdiv</p>
        <div className="contact_desc">
          <FaPhoneAlt style={{ color: 'dimgray' }} />
          <h1> Telephone </h1>
        </div>
        <p>+359 88 209 4410</p>
        <div className="contact_desc">
          <FaMailBulk style={{ color: 'dimgray' }} />
          <h1> Email </h1>
        </div>
        <p>ramadan.a.emin@gmail.com</p>
      </motion.div>

      <motion.div
        className="contact_form"
        variants={}
        initial="initial"
        animate="animate"
      >
        <form ref={form}>
          <div>
            <h1>Talk to me!</h1>
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Name" id="name" />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              id="email"
            />
            <label>Message</label>
            <textarea name="message" id="message" />
            <input type="submit" value="Send" />
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
