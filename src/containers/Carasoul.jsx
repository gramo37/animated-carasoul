import React from "react";
// import images from "../../constants/images";
import images from "../constants/images"
import "./Carasoul.scss";
import CarasoulItem from "./CarasoulItem";

const Carasoul = () => {

  return (<>
    <div className="carasoul__container">
      <CarasoulItem
        data={[images.logo1, images.logo2, images.logo3, images.logo4]}
        delay={1}
      />
      <CarasoulItem
        data={[images.logo4, images.logo3, images.logo2, images.logo1]}
        delay={2}
      />
      <CarasoulItem
        data={[images.logo1, images.logo2, images.logo3, images.logo4]}
        delay={3}
      />
      <CarasoulItem
        data={[images.logo1, images.logo2, images.logo3, images.logo4]}
        delay={4}
      />
    </div>
  </>
  );
};

export default Carasoul;
