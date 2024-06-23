import css from "./Options.module.css"

export default function Options({ updateFeedback, reset, feedback }) {
    const totalFeedBack = feedback.good + feedback.neutral + feedback.bad;
    return (
        <div>
            <button className={css.button} onClick={()=> updateFeedback('good')}>Good</button>
            <button className={css.button} onClick={()=> updateFeedback('neutral')}>Neutral</button>
            <button className={css.button} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedBack > 0 && <button onClick={reset}>Reset</button>}
        </div>
    )
}