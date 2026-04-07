import React from 'react'

const Dashboard = () => {
  const stats = [
    { title: 'Total Services', count: 16, color: 'bg-green-500', icon: '🏢' },
    { title: 'Total Products', count: 25, color: 'bg-orange-500', icon: '📦' },
    { title: 'Total Orders', count: 10, color: 'bg-blue-500', icon: '🛒' },
    { title: 'Total Revenue', count: '₹12,500', color: 'bg-purple-500', icon: '💰' },
  ]

  const orders = [
    { id: '#1001', name: 'Business Card Print', status: 'Completed', amount: '₹500' },
    { id: '#1002', name: 'Banner Printing', status: 'Pending', amount: '₹1200' },
    { id: '#1003', name: 'Logo Design', status: 'Processing', amount: '₹800' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <div className="w-64 bg-gray-900 text-white hidden md:flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-gray-700">
          Print<span className="text-pink-500">Admin</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <div className="p-3 rounded-lg bg-gray-800 cursor-pointer">🏠 Dashboard</div>
          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">📦 Products</div>
          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">🛒 Orders</div>
          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">👤 Customers</div>
        </nav>
      </div>

      {/* MAIN */}
      <div className="flex-1">
        {/* NAVBAR */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Admin</span>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">{item.title}</p>
                    <h2 className="text-2xl font-bold text-gray-800 mt-1">{item.count}</h2>
                  </div>
                  <div
                    className={`${item.color} text-white w-12 h-12 flex items-center justify-center rounded-lg text-xl`}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl shadow">
            <div className="p-4 border-b font-semibold text-gray-700">Recent Orders</div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-600 text-sm">
                  <tr>
                    <th className="p-3">Order ID</th>
                    <th className="p-3">Service</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-3">{order.id}</td>
                      <td className="p-3">{order.name}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            order.status === 'Completed'
                              ? 'bg-green-100 text-green-600'
                              : order.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-600'
                                : 'bg-blue-100 text-blue-600'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="p-3 font-medium">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
