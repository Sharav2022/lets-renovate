import { Services } from "../../src/globals/mock";
import classes from "./services.module.css";
import ServiceCard from "../../src/components/core/ServiceCard";
import Animate from "../../src/components/core/Animate";
import MetaInfo from "../../src/components/main/MetaInfo";
const ServicesPage = () => {
  return (
    <>
      {MetaInfo()}
      <section className={"container " + classes.service_section}>
        <h2 className={classes.service_headline}>Our Services</h2>
        <h4 className={classes.service_sub_headline}>Let us help you make your dreams a reality.</h4>
        <Animate>
          <div className={classes.services}>
            {Services.map((service) => (
              <ServiceCard {...service} />
            ))}
          </div>
        </Animate>
      </section>
    </>
  );
};

export default ServicesPage;
