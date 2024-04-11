import Scroll from "../Scroll";
import classes from "./work-card.module.css";
import { useEffect, useState } from "react";
import RightArrow from "../../../assets/icons/right_arrow.svg";
import LeftArrow from "../../../assets/icons/left_arrow.svg";
import CrossIcon from "../../../assets/icons/cross.svg";

const WorkCard = ({ title, mediaUrl, works = [] }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const arrowHandler = (navigate = "left") => {
    if (navigate === "left") {
      setCurrentImage((prev) => (prev === 0 ? works.length - 1 : prev - 1));
    } else {
      setCurrentImage((prev) => (prev === works.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    let timer;
    if (showGallery) {
      timer = setInterval(() => {
        arrowHandler();
      }, 2000);
    }

    return () => (timer ? clearInterval(timer) : undefined);
  }, [showGallery]);

  return (
    <div className={classes.container} onClick={() => setShowGallery(true)}>
      <div className={classes.image_container}>
        <img src={mediaUrl} fill={true} />
        <div className={classes.service_name}>{title}</div>
      </div>
      {works.length > 0 && showGallery && (
        <Scroll>
          <div className={classes.gallery_overlay}>
            <div className={classes.gallery}>
              <div className={classes.l_g}>
                <div className={classes.l_la} onClick={arrowHandler}>
                  <LeftArrow />
                </div>
                <img
                  src={works[currentImage].mediaUrl}
                  className={classes.g_img}
                />
                <div
                  className={classes.l_ra}
                  onClick={() => arrowHandler("right")}
                >
                  <RightArrow />
                </div>
              </div>
              <div className={classes.r_g}>
                <div className={classes.g_title}>
                  {works[currentImage].title}
                </div>
                <div className={classes.g_desc}>
                  {works[currentImage].description}
                </div>
              </div>
              <div
                className={classes.cross_g}
                onClick={(event) => {
                  setShowGallery(false);
                  event.stopPropagation();
                }}
              >
                <CrossIcon />
              </div>
            </div>
          </div>
        </Scroll>
      )}
    </div>
  );
};

export default WorkCard;
