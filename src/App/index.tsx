import React, { useState } from "react";

import styles from "./index.module.scss";

export function App() {
  const [factor, setFactor] = useState(8);
  return (
    <div style={{ "--space-factor": factor + "px" } as React.CSSProperties}>
      <input
        type="range"
        min="0"
        max="16"
        value={factor}
        onChange={e => setFactor(Number(e.target.value))}
      />
      <div className={`${styles.root} ${styles.bordered}`}>
        <div className={`${styles.title} ${styles.bordered}`}>Hello world</div>
      </div>
    </div>
  );
}
