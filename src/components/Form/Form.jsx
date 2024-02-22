import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./Form.module.css";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const Form = ({ open, handleClose }) => {
  return (
    <Modal
      className={styles.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* className={styles.form} */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.form}
      >
        <div>
          <h4 style={{ color: "black" }}>Feedback</h4>
        </div>

        <div className={styles.inputFieldContainer}>
          <TextField
            className={styles.inputField}
            label="Full Name"
            size="small"
            sx={{
              "& fieldset": { border: "1px solid var(--color-primary)" },
            }}
          />
          <TextField
            className={styles.inputField}
            label="Email ID"
            size="small"
            sx={{
              "& fieldset": { border: "1px solid var(--color-primary)" },
            }}
          />
          <TextField
            className={styles.inputField}
            label="Subject"
            size="small"
            sx={{
              "& fieldset": { border: "1px solid var(--color-primary)" },
            }}
          />
          <TextField
            id="outlined-multiline-static"
            className={styles.inputField}
            multiline
            rows={4}
            label="Description"
            size="small"
            sx={{
              "& fieldset": { border: "1px solid var(--color-primary)" },
              "&:hover": {
                border: "1px solid var(--color-primary)",
                outline: "none",
              },
            }}
          />
        </div>
        <button
          text="Submit Feedback"
          className={styles.feedbackSubmitButton}
          onClick={(e) => {
            e.preventDefault();
          }}
          sx={{
            backgroundColor: "var(--color-primary) !important",
            color: "var(--color-white) !important",
          }}
        >
          Submit Feedback
        </button>
      </Box>
    </Modal>
  );
};

export default Form;
