import { Services } from "../../src/globals/mock";
import classes from "./work.module.css";
import WorkCard from "../../src/components/core/WorkCard";
import Animate from "../../src/components/core/Animate";
import MetaInfo from "../../src/components/main/MetaInfo";

const WorkPage = () => {
  return (
    <>
      {MetaInfo()}
      <section className={"container " + classes.service_section}>
        <h2 className={classes.service_headline}>Our Work</h2>
        <h4 className={classes.service_sub_headline}>
          You’re invited to browse a selection of recently completed projects
          below.
        </h4>
        <div className={classes.services}>
          {Services.map((service) => (
            <WorkCard {...service} />
          ))}
        </div>
        <Animate>
          <div className={classes.free_estimate}>
            <div className={classes.txt}>
              Create your dream home.
              <br />
              Tell us about your project today.
            </div>
            <div
              className={classes.hb_btn}
              onClick={() => router.push("about-us")}
            >
              Get a Free Estimate
            </div>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default WorkPage;
