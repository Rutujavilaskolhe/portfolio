/* eslint-disable react/no-unescaped-entities */
import myImage from "../assets/homeimg.svg";
import styles from "./Home.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Rutuja Kolhe", "Frontend Developer"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.about}>
        <div className={styles.aboutHeading}>
          <h1>Hi There! 👋🏻</h1>
          <div className={styles.typer}>
            <h1>
              I'm {"  "}
              <span style={{ color: "rgb(45, 197, 227)", fontWeight: "bold" }}>
                {typeEffect}
              </span>
              <span style={{ color: "rgb(45, 197, 227)" }}>
                <Cursor cursorStyle="|" />{" "}
              </span>
            </h1>
          </div>
        </div>
        <div className={styles.aboutContentContainer}>
          <div className={styles.aboutPara}>
            <p>
              Hi Everyone, I am{" "}
              <span style={{ color: "rgb(45, 197, 227)" }}> Rutuja Kolhe</span>{" "}
              from Nanded, Maharashtra.I am B.Tech Production Engineering at
              SGGS, Nanded.
            </p>
            <p>
              Highly skilled and enthusiastic frontend developer specializing in
              <span style={{ color: "rgb(45, 197, 227)" }}>
                {" "}
                HTML, CSS, Javasscript, Reactjs, React Bootstrap.
              </span>
            </p>

            <p>
              My expertise in creating{" "}
              <span style={{ color: "rgb(45, 197, 227)" }}>
                visually appealing, responsive,
              </span>{" "}
              user-friendly websites that provide exceptional user experiences.{" "}
            </p>
            <p>
              I am looking forward to gain competency and exposure in{" "}
              <span style={{ color: "rgb(45, 197, 227)" }}>
                Web development.
              </span>
            </p>
          </div>
          <div className={styles.picContainer}>
            <img
              className={styles.aboutPic}
              src={myImage}
              height={"500px"}
              width={"400px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
