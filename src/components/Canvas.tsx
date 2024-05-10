// import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import CardComponent from "./CardComponent"

import Navbar from "./Navbar"

export default function Dashboard() {
  

  return (
    <div className="bg-gray-200">
        <div className="pt-4 ">
            <div className="py-4 px-10 flex justify-between ">
                <div className="border  border-slate-300 max-w-min p-2 space-x-4"><span>adsf</span><span>Icon</span></div>
                <div className="border  border-slate-300 max-w-min p-2 space-x-4"><span>adsf</span><span>Icon</span></div>
            </div>
        </div>

     <div className="flex justify-between p-2">

      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
     </div>
     <div className="flex flex-initial px-6   font-Ariel  text-3xl ">Transactions | This Month</div>
     <div className="flex justify-start space-x-8 py-4 px-8">
        <span className="px-4 py-1   text-xl   rounded-2xl bg-blue-300">AAAA()</span>
        <span className="px-4 py-1   text-xl   rounded-2xl bg-blue-300">AAAA()</span>
     </div>
     <div className="m-5 p-4">
        adfadsfadsf
     </div>


     <div className="bg-white mx-10 p-4 box-border border border-slate-300 ">
        <div className="flex justify-between space-x-6">

        <span className="border p-2 flex-initial justify-start border-slate-300 ">ffff</span>
        <span className="flex  justify-between space-x-6">

        <span className="border flex-auto  max-w-min p-2 justify-end border-slate-300 flex">
            <span>Sort   </span>&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg>

            </span>
        <span className="border flex-auto  max-w-min p-2 justify-end border-slate-300 ">ffff</span>
        </span>
    
        </div>

        </div>
       

      <CardComponent/>
    </div>
  )
}

