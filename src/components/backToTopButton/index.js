import styles from "./styles.module.scss";

export default function BackToTop() {
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className={styles.buttonContainer}>
        <button onClick={() => scrollToTop()}>top</button>
      </div>
    </>
  )
}