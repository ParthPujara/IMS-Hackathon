import React, { useState } from 'react'
import { useParams } from 'react-router'
import RightBar from './RightBar';

const Center = () => {
    const {item} = useParams();
    const [count, setCount] = useState(1);
  return (
    <div>
        <div className="content">
      {item}
        <div className="quantity">
            <div className="count">{count}</div>
            <div className="minus" onClick={()=>{setCount(count-1)}}>-</div>
            <div className="plus" onClick={()=>{setCount(count+1)}}>+</div>
        </div>
        <RightBar/>
        </div>
    </div>
  )
}

export default Center
