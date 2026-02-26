import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Sidebar({ isCollapsed, setIsCollapsed }) {
  const location = useLocation()
  
  const links = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/users', label: 'Users', icon: '👥' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen bg-gray-900 dark:bg-gray-800 border-r border-gray-800 dark:border-gray-700 transition-all duration-300 z-40 ${
          isCollapsed ? '-translate-x-full md:translate-x-0 md:w-16' : 'w-64'
        }`}
      >
        <div className="p-6 flex items-center justify-between md:justify-center">
          <h1 className={`font-bold text-blue-400 transition-opacity duration-300 ${isCollapsed ? 'md:opacity-0' : 'opacity-100'}`}>
            Admin
          </h1>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="md:hidden text-gray-400 hover:text-gray-300"
            aria-label="Toggle sidebar"
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2 px-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsCollapsed(true)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-700'
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className={`transition-opacity duration-300 ${isCollapsed ? 'md:opacity-0 md:w-0 md:overflow-hidden' : 'opacity-100'}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
