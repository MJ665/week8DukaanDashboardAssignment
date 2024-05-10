// import { useState, useEffect, useMemo, useCallback, memo } from 'react'


export default function Navbar() {






    return (
      <div className="   ">
        <div className="flex justify-between border border-slate-300 ">
            <div className="flex     space-x-10 p-8 "> 
            <div className="flex-auto"><h1>Payouts</h1></div>
            <div className="flex-auto"><h1>SVG how it works</h1></div>
            
            </div>
            <div className="mx-4">

<div className="  flex justify-between my-6">
    
            <div className="flex    border border-slate-400 bg-gray-300      rounded-xl justify-center "> 
            <div className="flex-auto  p-2 justify-between tracking-tight ">Icon</div>

            <input className="    w-96  min-w-max p-2  rounded-lg " type="text" placeholder="Search features, tutorials, etc." />
            </div>
</div>
            </div>

            <div className="flex     space-x-4 p-4 "> 
            <div className="flex     space-x-4 py-2 "> 

            <div className=" border border-slate-300 rounded-full p-2">

{/* {(props.notificatoin)?
(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
    <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clip-rule="evenodd" />
    </svg> 
    
):(
    
    
)} */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
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
  