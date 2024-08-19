import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <span className={styles.topBlur}></span>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>About Me</h3>
              <p>
                I am a passionate programmer and a lifelong learner, born and
                raised in Uttarakhand India. Currently, I am enrolled in the
                AlmaBetter Web Development Program.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>Full-Stack Developer</h3>
              <p>
                I have extensive experience in building highly efficient and
                optimized front-end and back-end systems. Throughout my career,
                I have refined my skills in creating solutions that not only
                meet but exceed performance expectations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>Skills</h3>
              <p>
                My expertise spans a wide range of technologies, enabling me to
                deliver robust and scalable solutions. I continuously work on
                enhancing my skills to stay ahead in the rapidly evolving tech
                landscape.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
