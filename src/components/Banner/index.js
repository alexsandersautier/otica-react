import styles from '@/styles/styles.module.css';

export default function Banner() {
 return (
    <div className={styles.background}>
      <div></div>
      <div className={styles.container}>
        <p className={styles.paragraph}>Preços baixos em</p> 
        <h1 className={styles.highlight}>Óculos de grau e de sol</h1>
        <p className={styles.paragraph}>Você só encontra aqui</p> 
      </div>
      <div></div>
      <div></div>
    </div>
  );
}