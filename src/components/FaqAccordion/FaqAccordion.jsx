import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion() {
  return (
    <div className={styles.accordionSection}>
      <h1 className={styles.title}>FAQs</h1>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummaryItem}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Is QTify free to use?
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetailsItem}>
          Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion} defaultExpanded>
        <AccordionSummary
          className={styles.accordionSummaryItem}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Can I download and listen to songs offline?
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetailsItem}>
          Sorry, unfortunately we don't provide the service to download any
          songs.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
