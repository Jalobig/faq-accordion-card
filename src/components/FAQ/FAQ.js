import React, { useState } from "react";
import classes from "./FAQ.module.scss";
import IconArrowDown from "../../images/icon-arrow-down.svg";

const FAQ = (props) => {
  const [questionChoice, setQuestionChoice] = useState({});
  const accordionHandler = (id) => {
    setQuestionChoice({
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    });

    if (id === "q1") {
      setQuestionChoice({
        q1: true,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
      });
    } else if (id === "q2") {
      setQuestionChoice({
        q1: false,
        q2: true,
        q3: false,
        q4: false,
        q5: false,
      });
    } else if (id === "q3") {
      setQuestionChoice({
        q1: false,
        q2: false,
        q3: true,
        q4: false,
        q5: false,
      });
    } else if (id === "q4") {
      setQuestionChoice({
        q1: false,
        q2: false,
        q3: false,
        q4: true,
        q5: false,
      });
    } else if (id === "q5") {
      setQuestionChoice({
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: true,
      });
    }
  };
  return (
    <div className={classes.faq}>
      <h1 className={classes.faq__heading}>FAQ</h1>
      <div className={classes.faq__accordion}>
        {props.questionAnswers.map((qa) => {
          return (
            <div key={qa.id}>
              <div
                className={`${classes.faq__qrow} ${
                  questionChoice[qa.id] && classes.active
                }`}
                onClick={() => {
                  if (!questionChoice[qa.id]) {
                    accordionHandler(qa.id);
                  } else {
                    setQuestionChoice({
                      q1: false,
                      q2: false,
                      q3: false,
                      q4: false,
                      q5: false,
                    });
                  }
                }}
              >
                <p
                  className={`${classes.faq__question} ${
                    questionChoice[qa.id] && classes.active
                  }`}
                >
                  {qa.question}
                </p>
                <img
                  src={IconArrowDown}
                  alt="Icon caret"
                  className={`${classes.faq__icon} ${
                    questionChoice[qa.id] && classes.active__icon
                  }`}
                />
              </div>
              {questionChoice[qa.id] && (
                <p className={`${classes.faq__answer}`}>{qa.answer}</p>
              )}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
