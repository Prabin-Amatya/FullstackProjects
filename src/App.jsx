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