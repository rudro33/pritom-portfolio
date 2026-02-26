import { DashboardCards } from '../components/DashboardCards'
import { Charts } from '../components/Charts'

export function Dashboard() {
  return (
    <main className="mt-20 md:mt-16 p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Welcome back, Admin!</h1>
        <p className="text-gray-400 mt-2">Here's your dashboard overview</p>
      </div>

      <DashboardCards />
      <Charts />
    </main>
  )
}
