import { useRouter } from "next/router";
import classes from "./service-card.module.css";

const ServiceCard = ({
  title,
  mainDescription,
  description,
  mediaUrl,
  type,
  imageBgClass,
  url,
  detailed = false,
}) => {
  const router = useRouter();

  const handleService = () => {
    if (url) router.push("/" + url);
  };

  return (
    <div className={classes.container}>
      <div className={classes.image_container} onClick={handleService}>
        <img className={classes.image_zoom} src={mediaUrl} fill={true} />
      </div>
      {title && <div className={classes.service_name}>{title}</div>}
      {description && <div className={classes.description}>{description}</div>}
    </div>
  );
};

export default ServiceCard;
