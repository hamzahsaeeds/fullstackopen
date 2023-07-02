import { useState } from 'react';

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good + neutral + bad) / 3} />
          <StatisticLine text="positive" value={good / (good + neutral + bad)} />
        </tbody>
      </table>
    </>
  )
}

const Button = (props) => {
  const { buttonText, setState } = props;
  return <button onClick={() => setState(prevState => prevState + 1)}>{buttonText}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        buttonText="good"
        setState={setGood}
      />
      <Button
        buttonText="neutral"
        setState={setNeutral}
      />
      <Button
        buttonText="bad"
        setState={setBad}
      />
      <h1>statistics</h1>
      {good || neutral || bad ? (
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App;