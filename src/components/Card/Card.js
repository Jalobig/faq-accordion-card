import React from "react";
import classes from "./Card.module.scss";
import IllustrationWomanDesktop from "../../images/illustration-woman-online-desktop.svg";
import IllustrationBox from "../../images/illustration-box-desktop.svg";
import BGDesktop from "../../images/bg-pattern-desktop.svg";
import FAQ from "../FAQ/FAQ";

const DUMMY_FAQ = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.card__composition}>
        <img
          src={BGDesktop}
          alt="Background design"
          className={classes["card__composition--1"]}
        />
        <img
          src={IllustrationWomanDesktop}
          alt="Illustration of a woman in front of a huge screen"
          className={classes["card__composition--2"]}
        />
        <img
          src={IllustrationBox}
          alt="Illustration of a box"
          className={classes["card__composition--3"]}
        />
      </div>
      <div>
        <FAQ  questionAnswers={DUMMY_FAQ}/>
      </div>
    </div>
  );
};

export default Card;
