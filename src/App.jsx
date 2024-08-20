<<<<<<< HEAD
import { useState } from 'react'

const MostVoted = (props) =>
{
    const highestValue = Math.max(...props.vote)
    const index = props.vote.indexOf(highestValue)
    if(highestValue>0){
    return(
            <p>
                {props.anecdotes[index]}
            </p>
        )
    }
    else
    {
        return(
           <p>No votes yet</p>
        )
    }
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () =>
    {
        const copy = [...vote]
        copy[selected] = copy[selected]+1
        setVote(copy)
    } 
  
  const handleSelect = () =>
    {
        const size_Of_Array = anecdotes.length
        let new_value = 0;
        while(1)
        {
            new_value = Math.floor(Math.random() * (size_Of_Array)) 
            if(new_value!=selected) break;
        }
        setSelected(new_value)
    }

  return (
    <div>
      <h3>Anecdotes</h3>
      <p>{anecdotes[selected]}</p>
      <p>Has {vote[selected]} votes</p>
      <button onClick={()=>handleVote()}>Vote</button>
      <button onClick={()=>handleSelect()}>Next Anecdote</button>

      <h3>Anecdote with most votes</h3>
      <MostVoted vote={vote} anecdotes={anecdotes}/>
=======
import { useState } from "react"

const Button = ({handleClick, text}) =>
{
  return(<button onClick={handleClick}>
      {text}
  </button>)
}

const History = (props) =>
{
  if(props.all_clicks.length != 0)
  {
    return(
      <div>
        {props.all_clicks.join(' ')}
      </div>
    )
  }
  else
  {
    return(
      <div>Press buttons</div>
    )
  }
}

const Display = (props) =>
{
  return(
    <div>
      left: {props.left}
      right: {props.right}
>>>>>>> parent of 0b5879e (rating system)
    </div>
  )
}
const hello = (name) => () =>
      alert("Hello" + name)



const App = () =>
{
  const [left, setleft] = useState(0)
  const [right, setright] = useState(0)
  const [click, setclick] = useState({ 
    left:0,
    right:0
  })
  const [total, settotal] = useState(0)
  

  const [Alpha_click, Alpha_setclick] = useState([])
   
  const handleleftclick = () =>
  {
    setclick({...click, left: click.left+1})
    const updated_left = click.left+1
    Alpha_setclick(Alpha_click.concat('L'))
    settotal(updated_left+click.right)
  }

  const handlerightclick = () =>
  {
    setclick({...click, right: click.right+1})
    const updated_right = click.right+1
    Alpha_setclick(Alpha_click.concat('R'))
    settotal(click.left+updated_right)
  }

  return(
    <div>
      <Display left={left} right={right}/>
      <Button handleClick={()=>setleft(left+1)} text="increment left"/>
      <Button handleClick={()=>setright(right+1)} text="increment right"/>
      <Button handleClick={()=>setleft(1000)} text="thousand" left/>
      <Button handleClick={()=>setright(1000)} text="thousand" right/>
      <Button handleClick={()=>setleft(0)} text="reset"/>
      <Button handleClick={()=>setright(0)} text="reset"/>
      <button onClick={hello("ram")}>Hello</button>
      <Button handleClick={handleleftclick} text="left"/>
      <Button handleClick={handlerightclick} text="right"/>

      <History all_clicks={Alpha_click}/>
      
      <p>Total: {total}</p>
    </div>
  )

}

export default App