
export default function Feedback({ feedback, totalFeedBack, positive }) {
    

    return (
        <>
            <p>Good: { feedback.good}</p>
            <p>Natural: { feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedBack }</p>
            <p>Positive: {positive }%</p>
        </>
    )
}