import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, ComposedChart
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 4000, users: 2400 },
  { month: 'Feb', revenue: 3000, users: 1398 },
  { month: 'Mar', revenue: 2000, users: 9800 },
  { month: 'Apr', revenue: 2780, users: 3908 },
  { month: 'May', revenue: 1890, users: 4800 },
  { month: 'Jun', revenue: 2390, users: 3800 },
  { month: 'Jul', revenue: 3490, users: 4300 },
]

const userGrowthData = [
  { month: 'Jan', active: 400, inactive: 240 },
  { month: 'Feb', active: 500, inactive: 221 },
  { month: 'Mar', active: 480, inactive: 229 },
  { month: 'Apr', active: 590, inactive: 200 },
  { month: 'May', active: 640, inactive: 221 },
  { month: 'Jun', active: 700, inactive: 229 },
  { month: 'Jul', active: 800, inactive: 200 },
]

export function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Chart */}
      <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-800 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Monthly Revenue</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              dot={{ fill: '#3B82F6', r: 5 }}
              activeDot={{ r: 7 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* User Growth Chart */}
      <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-800 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Bar dataKey="active" fill="#10B981" radius={[8, 8, 0, 0]} />
            <Bar dataKey="inactive" fill="#EF4444" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
