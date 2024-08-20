import { useCallback } from "react"
import { useState } from "react"

const Button = (props) =>
{
    return(
        <button onClick={props.set_rating}>{props.text}</button>
    )
}

const setvalue = (handler) =>
{
    handler
}

const StatLine = (props) => 
{
    return (
        <tr>
            <td>{props.text}</td> 
            <td>{props.value}</td>
        </tr>
    )
    
}

const Statistics = (props) =>
{
    const all = props.good + props.mediocre + props.bad
    const hasValue = !(props.good == 0 && props.mediocre == 0 && props.bad ==0 )
    const avg = () => hasValue? ((1*props.good + 0*props.mediocre - 1*props.bad)/(1*all)): 0
    const pos = () => hasValue? (((props.good)/all)*100): 0

    if(hasValue)
    {
        return(
            <table>
                <tbody>
                    <StatLine text="good" value={props.good}/>
                    <StatLine text="mediocre" value={props.mediocre}/>
                    <StatLine text="bad" value={props.bad}/>
                    <StatLine text="all" value={all}/>
                    <StatLine text="average" value={avg()}/>
                    <StatLine text="positive" value={pos()}/>
                </tbody>
            </table>
        )
    }
    else
    {
       return(<p>No FeedBack Given</p>)
    }
}

const App = () =>
{
  const [good, set_good] = useState(0)
  const [mediocre, set_mediocre] = useState(0)
  const [bad, set_bad] = useState(0)

  return(
    <div>
        <h3>GIVE FEEDBACK</h3>
        <Button set_rating={() => setvalue(set_good(good+1))}  text="good"/>
        <Button set_rating={() => setvalue(set_mediocre(mediocre+1))} text="mediocre"/>
        <Button set_rating={() => setvalue(set_bad(bad+1))}  text="bad"/>
        <p><b>STATISTICS </b></p>
        <Statistics  good={good} mediocre={mediocre} bad={bad}/>
    </div>
  )
}

export default App