'use client'
import React from 'react'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const InstallBootStrap = () => {
    useEffect(()=>{
      
        // @ts-ignore
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
      },[])
  return (
    <></>
  )
}

export default InstallBootStrap
