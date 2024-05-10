// import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import Canvas from "./Canvas"

import Navbar from "./Navbar"

export default function Dashboard() {
  

  return (
    <>
    <div className=" overflow-x-auto">
      <Navbar/>
      <Canvas/>
        
    </div>
    </>
  )
}

