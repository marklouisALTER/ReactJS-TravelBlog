import { useState } from 'react'
import Navbar from './Navbar'
import data from './data'
import './App.css'
import Card from './Card';

function App() {

  const response = data.map(items => {
      return(  <Card 
            key={items.id}
            {...items}
        />
        )
  })

  return (
    <>
      <Navbar />
      <div className='w-screen h-screen flex items-center gap-5 flex-col justify-start absolute py-[7rem] inset-0 overflow-x-hidden'>
          {/* <div className="flex flex-col border border-black items-start justify-center h-full px-[5rem]"> */}
          {response}
        {/* </div>     */}
      </div>
    </>
  )
}

export default App
