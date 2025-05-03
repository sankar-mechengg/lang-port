import styles from "../../assets/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Sankar Balasubramanian. All Rights
        Reserved.
      </p>
      <p>
        Designed, Developed and Maintained by: Sankar Balasubramanian
        &nbsp;|&nbsp;
        <a
          href="https://www.linkedin.com/in/sankar4/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
