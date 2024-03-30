import {
  WHY_US_CARDS
} from "../../../../../globals/mock";
import classes from "./why-us-section.module.css";

const WhyusSection = (props) => {
  return (
    <div className={"container " + classes.section}>
      <h2 className={classes.headline}>Why Choose Us</h2>
      <div className={classes.cards}>
        {WHY_US_CARDS.map((card) => (
          <div className={classes.card}>
            <div className={classes.card_title}>{card.title}</div>
            <div className={classes.card_desc}>{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyusSection;
