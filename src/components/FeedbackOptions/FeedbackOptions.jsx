import React from "react";

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return ( 
        <>
        <button name="good" onClick={onLeaveFeedback} type="button">Good</button>
          <button name="neutral" onClick={onLeaveFeedback} type="button">Neutral</button>
          <button name="bad" onClick={onLeaveFeedback} type="button">Bad</button>
     </>);
}
 
export default FeedbackOptions;