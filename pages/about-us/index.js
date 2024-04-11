import {
  ABOUT_US_IMAGE,
  ABOUT_US_SUB_HEADLINE,
  ABOUT_US_WHO_WE_ARE,
  COMPANY_NAME,
  GUARANTEES,
  HOW_WE_ARE,
} from "../../src/globals/mock";
import classes from "./about-us.module.css";
import Animate from "../../src/components/core/Animate";
import MetaInfo from "../../src/components/main/MetaInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AboutUsPage = () => {
  const router = useRouter();

  const [width, setWidth] = useState();

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      {MetaInfo()}
      <section className={"container " + classes.container}>
        <div className={classes.top_container}>
          <h2 className={classes.headline}>About {COMPANY_NAME}</h2>
          <p className={classes.sub_headline}>{ABOUT_US_SUB_HEADLINE}</p>
        </div>
        <div className={classes.image_container}>
          <img src={ABOUT_US_IMAGE} />
        </div>
        <Animate>
          <div className={classes.process_container}>
            <h2 className={classes.headline}>Our Process</h2>
            <p className={classes.sub_headline}>{ABOUT_US_WHO_WE_ARE}</p>
            <div className={classes.processes}>
              {HOW_WE_ARE.slice(0, 2).map((process, index) => (
                <>
                  <div className={classes.process_img_container}>
                    <img src={process.mediaUrl} />
                  </div>
                  <div className={classes.process}>
                    <div className={classes.title}>{process.title}</div>
                    <div className={classes.description}>
                      {process.description}
                    </div>
                  </div>
                </>
              ))}
              {HOW_WE_ARE.slice(2).map((process, index) =>
                width > 500 ? (
                  <>
                    <div className={classes.process}>
                      <div className={classes.title}>{process.title}</div>
                      <div className={classes.description}>
                        {process.description}
                      </div>
                    </div>
                    <div className={classes.process_img_container}>
                      <img src={process.mediaUrl} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={classes.process_img_container}>
                      <img src={process.mediaUrl} />
                    </div>
                    <div className={classes.process}>
                      <div className={classes.title}>{process.title}</div>
                      <div className={classes.description}>
                        {process.description}
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </Animate>
        <Animate>
          <h2 className={classes.headline}>Our Quality Guarantee</h2>
          <div className={classes.guarantees}>
            {GUARANTEES.map((guarantee) => (
              <p>{guarantee}</p>
            ))}
          </div>
        </Animate>
        <Animate>
          <div className={classes.free_estimate}>
            <div className={classes.txt}>
              Create your dream home.
              <br />
              Tell us about your project today.
            </div>
            <div
              className={classes.hb_btn}
              onClick={() => router.push("contact-us")}
            >
              Get a Free Estimate
            </div>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default AboutUsPage;
