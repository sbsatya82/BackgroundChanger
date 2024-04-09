import { useState } from 'react'

function App() {
    const[color, setColor] = useState("Olive");
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Red"}} onClick={()=> setColor("Red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Blue"}} onClick={()=> setColor("Blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Black"}} onClick={()=> setColor("Black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Green"}} onClick={()=> setColor("Green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Yellow"}} onClick={()=> setColor("Yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full  shodow-lg' style={{backgroundColor:"White"}} onClick={()=> setColor("White")}>White</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Orange"}} onClick={()=> setColor("Orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Indigo"}} onClick={()=> setColor("Indigo")}>Indigo</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Pink"}} onClick={()=> setColor("Pink")}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Brown"}} onClick={()=> setColor("Brown")}>Brown</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"Violet"}} onClick={()=> setColor("Violet")}>Violet</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shodow-lg' style={{backgroundColor:"#00ffff"}} onClick={()=> setColor("#00ffff")}>Auqa</button>
        </div>
      </div>
    </>
  )
}

export default App
