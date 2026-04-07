import React from 'react'

const Dashboard = () => {
  const userRole = '1' // static for demo

  const statsAdmin = [
    {
      title: 'Total Services',
      count: 16,
      icon: '🏢',
      gradient: 'from-green-400 to-green-600',
    },
    {
      title: 'Total Products',
      count: 25,
      icon: '📦',
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Total Orders',
      count: 10,
      icon: '🛒',
      gradient: 'from-blue-400 to-blue-600',
    },
  ]

  const statsContent = [
    {
      title: 'Total Orders',
      count: 10,
      icon: '🛒',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Total Queries',
      count: 5,
      icon: '💬',
      gradient: 'from-purple-400 to-purple-600',
    },
  ]

  const statsOperator = [
    {
      title: 'Total Services',
      count: 20,
      icon: '🏢',
      gradient: 'from-green-400 to-green-600',
    },
    {
      title: 'Total Products',
      count: 25,
      icon: '📦',
      gradient: 'from-orange-400 to-orange-600',
    },
  ]

  const data = userRole === '1' ? statsAdmin : userRole === '2' ? statsContent : statsOperator

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard Overview</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 text-white shadow-xl bg-gradient-to-r ${item.gradient} hover:scale-105 transition duration-300`}
          >
            <div className="flex justify-between items-center">
              {/* Text */}
              <div>
                <p className="text-sm opacity-80">{item.title}</p>
                <h3 className="text-3xl font-bold mt-1">{item.count}</h3>
              </div>

              {/* Icon */}
              <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full text-xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
