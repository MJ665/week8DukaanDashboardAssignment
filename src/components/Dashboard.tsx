// import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import { useState} from 'react'
import Canvas from "./Canvas"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Dashboard() {
  


    const [sidebarOpen,setSidebarOpen]=useState(false)
  return (
    <>
      <div className={`flex`}>
      <div className={`bg-slate-700 text-white flex flex-col p-4 transition-all duration-300 ease-in-out ${sidebarOpen?'w-64':"w-24" }`}>
<button 
className='text-white mg-4'
onClick={()=>{
    setSidebarOpen(!sidebarOpen)
}}>|||</button>


<div>


{
    sidebarOpen?(
        <>
        <ul className='space-y-4'>
<li><a href="#" className='hover:bg-slate-500 p-2 block '>aaa</a></li>
<li><a href="#" className='hover:bg-slate-500 p-2 block '>aaa</a></li>
<li><a href="#" className='hover:bg-slate-500 p-2 block '>aaa</a></li>
<li><a href="#" className='hover:bg-slate-500 p-2 block '>aaa</a></li>
        <Sidebar/>

        </ul>
        </>
    ):(
        <>
        <ul className='space-y-4'>
        <Sidebar/>
        <li title="Dashboard"><a href="#dashboard">🏠</a></li>
              <li title="Settings"><a href="#settings">⚙️</a></li>
              <li title="Profile"><a href="#profile">👤</a></li>

        </ul>
        </>
    )
}
    </div>
    </div>



    <div className=" overflow-x-auto flex-1 p-6 ">
      <Navbar/>
      <Canvas/>
        
    </div>
    </div>
    </>
  )
}

