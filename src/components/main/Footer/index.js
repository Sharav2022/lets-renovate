import {
  COPYRIGHT,
  SocialLinks,
} from "../../../globals/mock";
import classes from "./footer.module.css";
import CircleBGIcon from "../../../assets/icons/circle-bg.svg";
import { poppins } from "../../../lib/fonts";

const Footer = (props) => {

  const socialLinkHandler = (url) => {
    window.open(url, "blank");
  };

  return (
    <footer className={classes.footer + " " + poppins.className}>
      <div className={"container " + classes.container}>
        <div className={classes.copyright}>{COPYRIGHT}</div>
        <div className={classes.social_icon_container}>
          {SocialLinks.map((_, index) => (
            <div
              className={classes.social_icon}
              onClick={() => socialLinkHandler(_.url)}
            >
              {_.icon}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.bg}>
          <CircleBGIcon />
        </div>
    </footer>
  );
};

export default Footer;
