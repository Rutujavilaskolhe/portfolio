/* eslint-disable react/no-unescaped-entities */
import { FaJs, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { BiCaretRight, BiSolidCircle } from "react-icons/bi";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <div className={styles.service}>
        <div className={styles.aboutContainer}>
          <div className={styles.intro}>
            <div className={styles.aboutHeading}>
              <h2 style={{ textAlign: "center" }}>
                Let me
                <span style={{ color: "rgb(45, 197, 227)" }}> INTRODUCE </span>
                Myself
              </h2>
            </div>

            <div className={styles.aboutContentContainer}>
              <div className={styles.aboutPara}>
                <p>
                  {" "}
                  <BiCaretRight />I have completed my B.Tech(Production
                  Engineering) from Shri Guru Gobind Singhji Institute Of
                  Engineering And Technology, Nanded.
                </p>
                <p>
                  <BiCaretRight />I love solving problems creatively. Hard-work,
                  resilience, and consistency are some of my strong skills.
                </p>
                <p>
                  {" "}
                  <BiCaretRight />
                  My analytical skills help me see the world from a different
                  angle.
                </p>
                <p>
                  <BiCaretRight />I love to figure out how things work, building
                  them myself gives me immense joy.
                </p>
                
              </div>
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.eduHeading}>
              <h2 style={{ textAlign: "center" }}>
                My
                <span style={{ color: "rgb(45, 197, 227)" }}> Education </span>
              </h2>
            </div>
            <div className={styles.eduContainer}>
              <BiSolidCircle
                style={{
                  color: "#fff",
                  paddingBottom: "5px",
                  margin: "-12px",
                  fontSize: "27px",
                }}
              />

              <div className={styles.eduBtech}>
                <h5>B.Tech in Production Engineering [ SGGS, Nanded ]</h5>
                <p>
                  <em>2019 - 2023</em>
                </p>
                <ul>
                  <li>CGPA: 8.13</li>
                </ul>
              </div>
              <BiSolidCircle
                style={{
                  color: "#fff",
                  paddingBottom: "5px",
                  margin: "-12px",
                  fontSize: "27px",
                }}
              />
              <div className={styles.eduCollege}>
                <h5>12th BOARD [ Yashwant College, Nanded ]</h5>
                <p>
                  <em>2019</em>
                </p>
                <ul>
                  <li>Percentage: 66.62%</li>
                </ul>
              </div>
              <BiSolidCircle
                style={{
                  color: "#fff",
                  paddingBottom: "5px",
                  margin: "-12px",
                  fontSize: "27px",
                }}
              />
              <div className={styles.eduSchool}>
                <h5>10th BOARD [ Mahatma Phule High School, Nanded ]</h5>
                <p>
                  <em>2017</em>
                </p>
                <ul>
                  <li>Percentage: 89.60%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.max}>
          <div className={styles.skillHeading}>
            <h1>
              Web
              <span style={{ color: "rgb(45, 197, 227)" }}>
                {" "}
                Development
              </span>{" "}
              Skills
            </h1>
          </div>
          <div className={styles.content}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaHtml5 />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaCss3 />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaJs />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FaReact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
