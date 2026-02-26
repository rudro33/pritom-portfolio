import { ThemeToggle } from '../components/ThemeToggle'

export function Settings() {
  return (
    <main className="mt-20 md:mt-16 p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Settings</h1>
        <p className="text-gray-400 mt-2">Manage your preferences and account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Theme Settings */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-800 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Appearance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800 dark:bg-gray-700">
              <div>
                <p className="text-gray-100 font-medium">Dark Mode</p>
                <p className="text-gray-400 text-sm">Toggle between light and dark theme</p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-800 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Profile</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-2 bg-gray-800 dark:bg-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Administrator"
                className="w-full px-4 py-2 bg-gray-800 dark:bg-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-800 dark:border-gray-700 lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Notifications</h2>
          <div className="space-y-3">
            {[
              { label: 'Email notifications', desc: 'Receive email updates' },
              { label: 'Push notifications', desc: 'Receive push notifications' },
              { label: 'Marketing emails', desc: 'Receive marketing communications' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-750 dark:hover:bg-gray-650 transition-colors">
                <div>
                  <p className="text-gray-100 font-medium">{item.label}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
