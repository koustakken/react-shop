import React from "react";
import styles from "./Card.module.css";
import leon from "./leon.jpg";

const Card = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.headerTitle}>
          <div className={styles.category}>MEN</div>
          <img src="src\assets\heart-regular.svg" alt="heart" width={24} />
        </div>
        <img src={leon} alt="" srcset="" />
        <div className={styles.container}>
          <div className={styles.name}>
            <p>LEON BRAWL STARS</p>
            <p>T-SHIRT</p>
          </div>
          <div className={styles.size}>
            <p>SIZE</p>
            <p>S, M, L, XL</p>
          </div>
        </div>
        <button>$129,99</button>
      </div>
    </div>
  );
};

export default Card;
