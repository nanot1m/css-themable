import React from "react";

import styles from "./index.module.scss";

type Props = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "style"
>;

export function Link({ children, ...props }: Props) {
  return (
    <a {...props} className={styles.link}>
      {children}
    </a>
  );
}
