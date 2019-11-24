import React from "react";

import styles from "./index.module.scss";

export function App() {
  return (
    <div className={`${styles.root} ${styles.bordered}`}>
      <div className={`${styles.title} ${styles.bordered}`}>Hello world</div>
    </div>
  );
}
