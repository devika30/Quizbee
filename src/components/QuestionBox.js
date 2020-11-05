import React, { useState } from 'react'

const QuestionBox=({question,options,selected})=>{
    const [answer,setAnswer]=useState(options);//we get options as a prop setAnswer refers to function which will update the value of  answer option
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {
                answer.map((text,index)=>(
                    <button key={index} className="answerBtn" onClick={()=>{
                        setAnswer([text]); //use of useState method to jst allow to choose one option after onClick event
                        selected(text);
                    }}>
                        {text}
                    </button>
                ))}
        </div>
    );
};

export default QuestionBox;
