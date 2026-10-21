import React from "react";
import styles from "./VisaPageCommon.module.css";

/** Shared section heading used by the country-specific student visa pages. */
export function SectionHeading({ className = "", children, ...props }) {
  return (
    <div className={`${styles.sectionHeading} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

/** Shared accessible document checklist with consistent responsive bullets. */
export function DocumentChecklist({ className = "", children, ...props }) {
  return (
    <ul className={`${styles.documentList} ${className}`.trim()} {...props}>
      {children}
    </ul>
  );
}
