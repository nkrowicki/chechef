import React from "react";
import styles from './RecipesScreen.module.scss';

const RecipesScreen = () => {
  //Load recipes (test in redux with array?)

  return (
    <div id="aspect-content">
      <div className={styles.aspectTab}>
        <input
          id="item-14"
          type="checkbox"
          className={styles.aspectInput}
          name="aspect"
        />
        <label htmlFor="item-14" className={styles.aspectLabel} />
        <div className={styles.aspectContent}>
          <div className={styles.aspectInfo}>
            <span className={styles.aspectName}>Receta titulo?</span>
          </div>
          {/* <div className={styles.aspectStat}>
            <div>
              <span className={styles.negativeCount}>5</span>
            </div>
          </div> */}
        </div>
        <div className={styles.aspectTabContent}>
          <div className={styles.sentimentWrapper}>
            <div>
              <div>
                {/* <div className={`${styles.positiveCount} ${styles.opinionHeader}`}>
                  <span>positive</span>
                  <span>12</span>
                </div> */}
                <div>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin id congue dolor. Vivamus eleifend vitae nunc sed
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed
                    tincidunt.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesScreen;
