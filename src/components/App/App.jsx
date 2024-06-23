import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import { useState, useEffect } from "react"
import Notification from "./Notification/Notification"


export default function App() {
   const initialState = {
	good: 0,
	neutral: 0,
	bad: 0
     }
    const [feedback, setFeedback] = useState(() => {
        const saveClick = window.localStorage.getItem("saved-feedback");
        if (saveClick !== null) {
            return JSON.parse(saveClick)
        }
        return initialState
    })
    useEffect(() => {
         window.localStorage.setItem("saved-feedback", JSON.stringify(feedback))
     },[feedback])
    
  const handFeedback = (type) => { setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
    };
    
    const totalFeedBack = feedback.good + feedback.neutral + feedback.bad;
    const positive = Math.round(((feedback.good + feedback.neutral) / totalFeedBack) * 100)
    const handReset = () => setFeedback(initialState);

    
    return (<>
        <Description />
        <Options updateFeedback={handFeedback} reset={handReset} feedback={feedback}/>
        {totalFeedBack > 0 ? <Feedback positive={positive} feedback={feedback} totalFeedBack={ totalFeedBack} /> : <Notification/>} 
       </> )
}