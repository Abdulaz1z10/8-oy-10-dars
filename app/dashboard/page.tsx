"use client"
import React from 'react'
import { $api } from '@/api/interceptors'

const Dashboard = () => {
  const getBooks =()=>{
    $api.get("/book").then(res=>{
      console.log(res, "book")
    })
  }
  return (
    <div className='flex flex-col w-screen h-screen  items-center justify-center'>
        <h1 className='text-2xl'>Dashboard</h1>
        <button className='text-2xl border-[2px] border-slate-900 w-[100px] h-[50px]' onClick={getBooks}>get books</button>
    </div>
  )
}

export default Dashboard
