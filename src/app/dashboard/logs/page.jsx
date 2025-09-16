import { Search, Filter, Download, AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import { useState } from "react";

export default function Logs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const logLevels = [
    { id: "all", name: "All", color: "gray" },
    { id: "error", name: "Error", color: "red" },
    { id: "warning", name: "Warning", color: "yellow" },
    { id: "info", name: "Info", color: "blue" },
    { id: "success", name: "Success", color: "green" }
  ];

  const logs = [
    {
      id: 1,
      level: "error",
      message: "Database connection failed",
      source: "Database Service",
      timestamp: "2024-01-15 14:30:25",
      details: "Connection timeout after 30 seconds. Check database server status."
    },
    {
      id: 2,
      level: "warning",
      message: "High memory usage detected",
      source: "System Monitor",
      timestamp: "2024-01-15 14:25:10",
      details: "Memory usage is at 85%. Consider scaling resources."
    },
    {
      id: 3,
      level: "info",
      message: "User login successful",
      source: "Authentication Service",
      timestamp: "2024-01-15 14:20:45",
      details: "User john.doe@example.com logged in successfully."
    },
    {
      id: 4,
      level: "success",
      message: "Project deployment completed",
      source: "Deployment Service",
      timestamp: "2024-01-15 14:15:30",
      details: "Project 'ecommerce-platform' deployed to production successfully."
    },
    {
      id: 5,
      level: "error",
      message: "API rate limit exceeded",
      source: "API Gateway",
      timestamp: "2024-01-15 14:10:15",
      details: "Client exceeded rate limit of 1000 requests per hour."
    },
    {
      id: 6,
      level: "info",
      message: "Backup completed successfully",
      source: "Backup Service",
      timestamp: "2024-01-15 14:05:00",
      details: "Daily backup completed. 2.5GB of data backed up."
    },
    {
      id: 7,
      level: "warning",
      message: "SSL certificate expires soon",
      source: "Security Monitor",
      timestamp: "2024-01-15 13:55:20",
      details: "SSL certificate for api.manzio.com expires in 30 days."
    },
    {
      id: 8,
      level: "success",
      message: "Email sent successfully",
      source: "Email Service",
      timestamp: "2024-01-15 13:50:10",
      details: "Welcome email sent to new user sarah.johnson@example.com."
    }
  ];

  const getLevelIcon = (level) => {
    switch (level) {
      case "error":
        return <XCircle size={16} className="text-red-500" />;
      case "warning":
        return <AlertCircle size={16} className="text-yellow-500" />;
      case "info":
        return <Info size={16} className="text-blue-500" />;
      case "success":
        return <CheckCircle size={16} className="text-green-500" />;
      default:
        return <Info size={16} className="text-gray-500" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "error":
        return "bg-red-100 text-red-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      case "success":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || log.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">System Logs</h1>
          <p className="text-gray-600">Monitor system events and troubleshoot issues</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Level Filter */}
            <div className="flex gap-2">
              {logLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedLevel === level.id
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>

            {/* Export Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getLevelIcon(log.level)}
                        <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(log.level)}`}>
                          {log.level.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{log.message}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{log.source}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{log.timestamp}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredLogs.length}</span> of <span className="font-medium">{filteredLogs.length}</span> results
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700">
              1
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
