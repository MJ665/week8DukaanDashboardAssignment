// import { useState, useEffect, useMemo, useCallback, memo } from 'react'


export default function Navbar() {






    return (
      <div>
        <div className="flex justify-between border border-slate-300 ">
            <div className="flex     space-x-10 p-8 "> 
            <div className="flex-auto"><h1>Payouts</h1></div>
            <div className="flex-auto"><h1>SVG how it works</h1></div>
            
            </div>
<div className="p-4">
    
            <div className="flex p-2   border border-slate-400 bg-gray-300      rounded-xl justify-center "> 
            <div className="flex-auto  p-2 justify-between tracking-tight ">Icon</div>

            <input className="   w-96  min-w-max p-2  rounded-lg " type="text" placeholder="Search features, tutorials, etc." />
</div>
            </div>

            <div className="flex     space-x-4 p-4 "> 
            <div className="flex     space-x-4 py-2 "> 

            <div className=" border border-slate-300 rounded-full p-2">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
</svg>

            </div>
            <div className=" border border-slate-300 rounded-full p-2">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
</svg>

            </div>
            
            </div>
            </div>



  

      
  
        </div>
      </div>
    )
  }
  