import ServiceCard from "../../../src/components/core/ServiceCard";
import classes from "./service.module.css";
import { Services } from "../../../src/globals/mock";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../../src/components/core/Animate";

const Service = (props) => {
  const router = useRouter();

  const { query } = router;

  const [service, setService] = useState();

  useEffect(() => {
    if (query && query.service) {
      setService(Services.find((_) => _.id == query.service));
    } else {
      router.replace("/services");
    }
  }, [router]);

  return (
    service && (
      <div className={classes.container}>
        <Animate>
          <div className={classes.tc}>
            <h1 className={classes.title}>{service.title}</h1>
            <div className={classes.description}>{service.detailedDescription}</div>
          </div>
        </Animate>
        {service.subServices && (
          <div className={classes.solution}>
            {service.subServices.map((ss) => (
              <ServiceCard {...ss} title={undefined} />
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default Service;
