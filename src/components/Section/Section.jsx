import React from "react";
import { useState } from "react";
import { styles } from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handletoggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleTxt} onClick={handletoggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {data.lenght === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((el) => (
                <Card data={el} type={type} />
              ))}
            </div>
          ) : (
            <Carousel data={data} />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
