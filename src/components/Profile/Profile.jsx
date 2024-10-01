import React from "react";
import { FaDownload } from "react-icons/fa"; // Importing FaDownload icon
import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const resumeUrl = getImageUrl("profile/RohitPundirResume.pdf");
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohit</h1>
        <p className={styles.description}>
          I am a skilled full-stack developer with expertise in JavaScript,
          HTML, CSS, React, Next.js, Node.js, and MongoDB. With a strong
          foundation in both front-end and back-end technologies, I am capable
          of delivering robust and scalable web solutions.
        </p>
        <div className={styles.btnContainer}>
          <a href="#" className={styles.contactBtn} onClick={handleDownload}>
            <FaDownload className={styles.downloadIcon} />
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("profile/profileSection.png")}
        alt="Hero image of me"
        className={styles.profileImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Profile;
