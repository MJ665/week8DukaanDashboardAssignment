// import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import CardComponent from "./CardComponent"

import Navbar from "./Navbar"

export default function Dashboard() {
  

  return (
    <div>
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
      <CardComponent/>
    </div>
  )
}

