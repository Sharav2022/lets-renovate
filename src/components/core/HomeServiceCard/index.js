import classes from "./service-card.module.css";

const HomeServiceCard = ({
  title,
  homeMediaUrl
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.image_container}>
        <img src={homeMediaUrl} fill={true} />
      </div>
      <div className={classes.service_name}>{title}</div>
    </div>
  );
};

export default HomeServiceCard;
