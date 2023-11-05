import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.container}>
        &copy; {new Date().getFullYear()} Rutuja Kolhe
      </div>
    </footer>
  );
};

export default Footer;
