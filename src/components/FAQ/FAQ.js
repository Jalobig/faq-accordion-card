import React from 'react'
import classes from './FAQ.module.scss'
import IconArrowDown from '../../images/icon-arrow-down.svg'

const FAQ = (props) => {
  return (
    <div className={classes.faq}>
        <h1 className={classes.faq__heading}>FAQ</h1>
        <div className={classes.faq__accordion}>
            {props.questionAnswers.map((qa)=> {
                return <>
                <div className={classes.faq__qrow}>
                <p className={`${classes.faq__question}`}>{qa.question}</p>
                <img src={IconArrowDown} alt='Icon caret' className={`${classes.faq__icon}`}/>
                </div>
                <hr/>
                </>
            })}
        </div>
    </div>
  )
}

export default FAQ