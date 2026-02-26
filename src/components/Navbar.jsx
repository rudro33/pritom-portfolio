import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-gray-900 dark:bg-gray-800 border-b border-gray-800 dark:border-gray-700 shadow-sm z-20 transition-all duration-300">
      <div className="h-full px-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-100">Dashboard</h2>
        
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button className="relative p-2 text-gray-400 hover:text-gray-300 transition-colors" aria-label="Notifications">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User Dropdown Placeholder */}
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors" aria-label="User menu">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
            <span className="text-sm text-gray-300 hidden sm:inline">Admin</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
