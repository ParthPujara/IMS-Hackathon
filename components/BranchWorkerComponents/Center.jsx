import React, { useState } from 'react'
import { useParams } from 'react-router'
import LeftBar from './LeftBar';
import TopBar from './TopBar';
import RightBar from './RightBar';

const Center = () => {
    const {item} = useParams();
    const [count, setCount] = useState(1);
  return (
    <div>
        <TopBar titleName={"Branch Worker"}/>
        <div className="content">
        <LeftBar/>
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
