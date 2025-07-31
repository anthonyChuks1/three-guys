import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav className = "flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-amber-700 font-extrabold">THREE GUYS</div>    
      <input
        type = "text"
        placeholder="Search for food..."
        className="flex-1 max-w-md mx-8 pl-10 pr-4 py-2 border border-amber-950 rounded-lg text-amber-950"
      />
      <div className = "flex items-center space-x-6 text-amber-950 ">
      <Link className = "hover:text-amber-700" href = "/">Menu</Link>
      <Link className = "hover:text-amber-700" href = "/">About</Link>
      <Link className = "hover:text-amber-700" href = "/">Contact</Link>
      
      {/* Replace with a valid button element  !Temporary!*/}
      <button className = "bg-amber-600 p-2 ml-8 rounded text-amber-50 hover:bg-amber-700">Cart</button>
      </div>
    </nav>
  )
}

export default Navigation
