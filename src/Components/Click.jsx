import React from 'react'
import HigherComponent from './HigherComponent';

const Click = (props) => {
    // const [Counter,setCounter]=useState(0)
    // const Increment=()=>{
    //     setCounter(Counter+1);
    // }
    const {Counter,UpdateCounter}=props;
  return (
    <div className='count'>
        <div><p>Click Counter:{Counter}</p></div>
        {/* <button onClick={Increment}>Increment!! on Click</button> */}
        <button onClick={UpdateCounter} id="clickbtn">Increment!! on Click</button>

    </div>
  )
}

export default HigherComponent(Click);