import { BarChart3, TrendingUp, Users, DollarSign, Eye, Download } from "lucide-react";

export default function Analytics() {
  const metrics = [
    {
      title: "Total Projects",
      value: "47",
      change: "+12%",
      changeType: "positive",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Active Clients",
      value: "23",
      change: "+8%",
      changeType: "positive",
      icon: <Users size={24} />
    },
    {
      title: "Revenue",
      value: "$2.4M",
      change: "+15%",
      changeType: "positive",
      icon: <DollarSign size={24} />
    },
    {
      title: "Page Views",
      value: "12.5K",
      change: "+5%",
      changeType: "positive",
      icon: <Eye size={24} />
    }
  ];

  const chartData = [
    { month: "Jan", projects: 12, revenue: 180000 },
    { month: "Feb", projects: 15, revenue: 220000 },
    { month: "Mar", projects: 18, revenue: 280000 },
    { month: "Apr", projects: 22, revenue: 320000 },
    { month: "May", projects: 25, revenue: 380000 },
    { month: "Jun", projects: 28, revenue: 420000 }
  ];

  const topProjects = [
    { name: "E-Commerce Platform", progress: 85, status: "In Progress", revenue: "$45,000" },
    { name: "Healthcare Management", progress: 100, status: "Completed", revenue: "$38,000" },
    { name: "Mobile Banking App", progress: 60, status: "In Progress", revenue: "$52,000" },
    { name: "Analytics Dashboard", progress: 100, status: "Completed", revenue: "$28,000" },
    { name: "CRM System", progress: 40, status: "In Progress", revenue: "$35,000" }
  ];

  const recentActivity = [
    { action: "New project started", project: "E-Commerce Platform", time: "2 hours ago" },
    { action: "Client meeting completed", project: "Healthcare Management", time: "4 hours ago" },
    { action: "Project delivered", project: "Analytics Dashboard", time: "1 day ago" },
    { action: "New client onboarded", project: "CRM System", time: "2 days ago" },
    { action: "Project milestone reached", project: "Mobile Banking App", time: "3 days ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Overview of your business performance and key metrics</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className={`text-sm ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last month
                  </p>
                </div>
                <div className="text-teal-600">
                  {metric.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Revenue & Projects</h2>
              <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700">
                <Download size={16} />
                Export
              </button>
            </div>
            <div className="h-64 flex items-end justify-between">
              {chartData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-8 bg-teal-600 rounded-t mb-2" style={{ height: `${(data.revenue / 500000) * 200}px` }}></div>
                  <div className="text-xs text-gray-600">{data.month}</div>
                  <div className="text-xs text-gray-500">${(data.revenue / 1000).toFixed(0)}K</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Projects */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Projects</h2>
            <div className="space-y-4">
              {topProjects.map((project, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{project.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-teal-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{project.progress}%</span>
                  </div>
                  <p className="text-sm text-gray-600">Revenue: {project.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <div>
                    <p className="text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.project}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
