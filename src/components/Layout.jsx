import React from 'react'

export default function Layout() {
  return (
    <div className='w-full bg-white min-h-screen'>
         {/* Header */}
            <header className="w-full bg-amber-900 border-b border-amber-800 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4"></div>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="/download.png" alt="Logo" className="w-20 h-20 object-cover rounded-full text-amber-200" />
                        <span className="text-2xl font-bold text-white">AromaSriwijaya</span>
                    </div>
                    <ul className="text-white flex items-center space-x-4">
                        <li><a href="/" className="text-amber-100 hover:text-white font-medium">Home</a></li>
                        <li><a href="/about" className="text-amber-100 hover:text-white font-medium">About</a></li>
                        <li><a href="/contact"className="text-amber-100 hover:text-white font-medium">Contact</a></li>
                        <li><a href="/product"className="text-amber-100 hover:text-white font-medium">Products</a></li>
                    </ul>
                </nav>
            </header>
    </div>
  )
}
