export function DashboardCards() {
  const cards = [
    {
      title: 'Total Users',
      value: '12,584',
      change: '+12.5%',
      icon: '👥',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+8.2%',
      icon: '💰',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Orders',
      value: '3,842',
      change: '+23.1%',
      icon: '📦',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Growth',
      value: '24.5%',
      change: '+5.4%',
      icon: '📈',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 dark:border-gray-700 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-400 text-sm font-medium">{card.title}</p>
              <h3 className="text-3xl font-bold text-gray-100 mt-2">{card.value}</h3>
            </div>
            <div className={`text-3xl bg-gradient-to-br ${card.color} rounded-lg p-3 text-white`}>
              {card.icon}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-sm font-semibold">{card.change}</span>
            <span className="text-gray-400 text-xs">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  )
}
