import classes from "./services-section.module.css";
import { Services } from "../../../../../globals/mock";
import HomeServiceCard from "../../../../core/HomeServiceCard";
import Link from "next/link";

const ServicesSection = (props) => {
  return (
    <section className={classes.service_section}>
      <h2 className={classes.service_headline}>Our Services</h2>
      <div className={classes.services}>
        {Services.slice(0, 3).map((service) => (
          <HomeServiceCard {...service} />
        ))}
      </div>
      <Link passHref href={"/services"} legacyBehavior>
        <a className={"btn"}> See All Services</a>
      </Link>
    </section>
  );
};

export default ServicesSection;
