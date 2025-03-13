import styles from './index.module.css';

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="logo" src="/Logo.png" className={styles.image} />
    </div>
  );
};
