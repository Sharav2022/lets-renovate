import { useRouter } from "next/router";
import classes from "./work-card.module.css";
import { useState } from "react";

const WorkCard = ({ title, mediaUrl }) => {
  const router = useRouter();

  const [showTitle, setShowTitle] = useState(true);

  return (
    <div className={classes.container}>
      <div
        className={classes.image_container}
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}
      >
        <img src={mediaUrl} fill={true} />
      </div>
      {showTitle && <div className={classes.service_name}>{title}</div>}
    </div>
  );
};

export default WorkCard;
