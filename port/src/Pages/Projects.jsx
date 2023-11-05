/* eslint-disable react/no-unescaped-entities */
import styles from "./Projects.module.css";
import myTic from "../assets/tictactoe.png";
import myTip from "../assets/tipcal.png";
import mySort from "../assets/sorting.png";
import myDrum from "../assets/drumkit.png";
import myTodo from "../assets/todolist.png";
import myPage from "../assets/pageval.png";
const Projects = () => {
  return (
    <>
      <div className={styles.service}>
        <div className={styles.max}>
          <div className={styles.project}>
            <h1>
              My Recent
              <span style={{ color: "rgb(45, 197, 227)" }}> Projects</span>
            </h1>
            <p>Here are some projects I've worked on recently</p>
          </div>

          <div className={styles.content}>
            {" "}
            <div className={styles.card}>
              <div className={styles.cardview}>
                <img className={styles.cardimg} src={myTic} alt="project1" />
                <div className={styles.cardbody}>
                  <div className={styles.cardtitle}>"Tic Tac Toe"</div>
                  <p className={styles.cardtext}>
                    This is a Tic Tac Toe game build in Reactjs which you can
                    play with your friends.
                  </p>
                  <a
                    href="https://tic-tac-toe-rtjkolhe.netlify.app"
                    target="blank"
                    className={styles.btnpri}>
                    <button type="button" className="btn btn-info">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardview}>
                <img className={styles.cardimg} src={mySort} alt="project5" />
                <div className={styles.cardbody}>
                  <div className={styles.cardtitle}>Sorting visualizer</div>
                  <p className={styles.cardtext}>
                    It is a project build using Javascript that allows users to
                    visualize various sorting algorithms in action.
                  </p>
                  <a
                    href="https://sorting-visualizer-rtjkolhe.netlify.app/"
                    target="blank"
                    className={styles.btnpri}>
                    <button type="button" className="btn btn-info">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardview}>
                <img className={styles.cardimg} src={myDrum} alt="project4" />
                <div className={styles.cardbody}>
                  <div className={styles.cardtitle}>Drum Kit</div>
                  <p className={styles.cardtext}>
                    The Drum Kit project build using Javascript is an
                    interactive web application that emulates a virtual drum
                    set.
                  </p>
                  <a
                    href="https://drumkit-rtjkolhe.netlify.app/"
                    target="blank"
                    className={styles.btnpri}>
                    <button type="button" className="btn btn-info">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardview}>
                <img className={styles.cardimg} src={myTodo} alt="project6" />
                <div className={styles.cardbody}>
                  <div className={styles.cardtitle}>Todo List</div>
                  <p className={styles.cardtext}>
                    This is Simple Todo list app built with React hooks, which
                    can be use to track daily activities.
                  </p>
                  <a
                    href="https://todo-app-rtjkolhe.netlify.app/"
                    target="blank"
                    className={styles.btnpri}>
                    <button type="button" className="btn btn-info">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardview}>
                <img className={styles.cardimg} src={myTip} alt="project2" />
                <div className={styles.cardbody}>
                  <div className={styles.cardtitle}>Tip Calculator</div>
                  <p className={styles.cardtext}>
                    {" "}
                    Tip Calculator project is user-friendly web application that
                    helps calculate appropriate tip amount based on bill total
                    and desired tip percentage.
                  </p>
                  <a
                    href="https://tip-calculator-rtjkolhe.netlify.app"
                    target="blank"
                    className={styles.btnpri}>
                    <button type="button" className="btn btn-info">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardview}>
                <img className={styles.cardimg} src={myPage} alt="project3" />
                <div className={styles.cardbody}>
                  <div className={styles.cardtitle}>Page Validation</div>
                  <p className={styles.cardtext}>
                    This app created with Reactjs which enables strict
                    validation on registration page.
                  </p>
                  <a
                    href="https://cozy-sable-f59048.netlify.app/"
                    target="blank"
                    className={styles.btnpri}>
                    <button type="button" className="btn btn-info">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
