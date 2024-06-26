import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick your perfect meal from our diverse and nutritious menu.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose how often you want delicious meals delivered to your door.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy fast deliveries straight to your doorstep, ensuring fresh meals every time.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Browse a variety of balanced diet options, from salads to hearty dishes,
        tailored to dietary needs. Select your meal, place an order,
        and enjoy delicious food delivered to your doorstep, effortlessly supporting your health goals.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
