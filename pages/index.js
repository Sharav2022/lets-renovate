import classes from "../src/styles/Home.module.css";
import {
  MainCarouselSection,
  ServicesSection,
  WhyusSection,
} from "../src/components/main/Home";
import Animate from "../src/components/core/Animate";
import MetaInfo from "../src/components/main/MetaInfo";
import { HOME_BANNER, HOME_SECOND_BANNER, Services } from "../src/globals/mock";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      {MetaInfo()}
      <div>
        <div className={classes.container}>
          <div className={classes.home_banner} id={HOME_BANNER.id}>
            <div
              className={classes.hb_image}
              style={{
                backgroundImage: `url('${HOME_BANNER.backgroundImage.src}')`,
              }}
            ></div>
            <div className={classes.hb_content}>
              <div className={classes.hb_title}>{HOME_BANNER.title}</div>
              <div
                className={classes.hb_btn}
                onClick={() => router.push(HOME_BANNER.buttonUrl)}
              >
                {HOME_BANNER.buttonText}
              </div>
            </div>
          </div>
          <div className={classes.home_banner_2} id={HOME_SECOND_BANNER.id}>
            <div
              className={classes.hb_image_2}
              style={{
                backgroundImage: `url('${HOME_SECOND_BANNER.backgroundImage.src}')`,
              }}
            ></div>
            <div className={classes.hb_content_2}>
              <div className={classes.hb_title_2}>
                {HOME_SECOND_BANNER.title}
              </div>
              <div className={classes.hb_subtitle}>
                {HOME_SECOND_BANNER.subtitle}
              </div>
              <div
                className={classes.hb_btn_2}
                onClick={() => router.push(HOME_SECOND_BANNER.buttonUrl)}
              >
                {HOME_SECOND_BANNER.buttonText}
              </div>
            </div>
          </div>
          <Animate>
            <WhyusSection />
          </Animate>
          <Animate>
            <ServicesSection />
          </Animate>
          {/* <Animate>
            <MainCarouselSection />
          </Animate>
        
          */}
        </div>
      </div>
    </>
  );
}
