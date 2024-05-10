// import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import Canvas from "./Canvas"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Dashboard() {
  

  return (
    <>
    <div className=" overflow-x-auto">
      <Sidebar/>
      <Navbar/>
      <Canvas/>
        
    </div>
    </>
  )
}

