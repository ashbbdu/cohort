import React, { useState } from 'react'

const ColorChanger = () => {

    const [color , setColor] = useState("white")

return (
    <div style={{background : `${color}` , height : '100vh'}}>



        <div className='colors'>
            <button style={{color : "white" ,background : "black"}} onClick={() => setColor("black")}>Black</button>
            <button style={{color : "black" ,background : "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            <button style={{color : "white" ,background : "green"}} onClick={() => setColor("green")}>Green</button>
            <button style={{color : "white" ,background : "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button style={{color : "white" ,background : "pink"}} onClick={() => setColor("pink")}>Pink</button>
            <button style={{color : "white" ,background : "red"}} onClick={() => setColor("red")}>Red</button>
            <button style={{color : "black" ,background : "white"}} onClick={() => setColor("white")}>Default</button>
        </div>
    </div>
  )
}

export default ColorChanger