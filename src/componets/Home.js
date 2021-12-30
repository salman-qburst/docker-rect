import React from 'react'

export const Home = (props) => {
    return (
        <div>
           Home  {props.somedata}
           <button onClick={(e) => props.onHomeClick('from child')}>pass to parent</button>
        </div>
    )
}
