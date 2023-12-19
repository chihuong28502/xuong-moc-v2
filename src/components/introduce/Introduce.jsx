import React, { useEffect } from "react";
import Slider from "../slider/Slider";
import "./introduce.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchIntroduce } from "./introduceSlice";
import Establishment from "./introduceChild/Establishment";
import Vision from "./introduceChild/Vision";
import Mission from "./introduceChild/Mission";
function Introduce() {
  const dispatch = useDispatch();
  const introduce = useSelector((state) => state.introduce.data);
  const status = useSelector((state) => state.introduce.status);
  useEffect(() => {
    dispatch(fetchIntroduce());
  }, [dispatch]);
  const establishment = introduce[1];
  const vision = introduce[2];
  const mission = introduce.filter((element) => element.id >= 4);

  return (
    <div className="container-fluid container-introduce">
      <div className="container-mx-10 ">
        <div className=" box-about container-introduce-white">
          <Establishment establishment={establishment} />
          <Vision vision={vision} />
          <Mission mission={mission} />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
