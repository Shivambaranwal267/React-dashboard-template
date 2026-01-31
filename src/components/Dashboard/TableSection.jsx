import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const recentOrders = [
  {
    id: "#3847",
    customer: "John Doe",
    product: "Wireless Headphones",
    amount: "$99.99",
    status: "completed",
    date: "2024-06-15",
  },
  {
    id: "#3848",
    customer: "Sarah Johnson",
    product: "Smart Watch",
    amount: "$199.99",
    status: "pending",
    date: "2024-06-14",
  },
  {
    id: "#3849",
    customer: "Michael Brown",
    product: "Bluetooth Speaker",
    amount: "$49.99",
    status: "cancelled",
    date: "2024-06-13",
  },
  {
    id: "#3850",
    customer: "Emily Davis",
    product: "Smartphone",
    amount: "$699.99",
    status: "completed",
    date: "2024-06-12",
  },
];

const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "$2,499.99",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iPhone 14 Pro",
    sales: 987,
    revenue: "$999.99",
    trend: "down",
    change: "-5%",
  },
  {
    name: "iPad Air",
    sales: 756,
    revenue: "$599.99",
    trend: "up",
    change: "+8%",
  },
];

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Recent Orders */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Recent Orders
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Latest customer orders
            </p>
          </div>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
            View All
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {[
                  "Order ID",
                  "Customer",
                  "Product",
                  "Amount",
                  "Status",
                  "Date",
                  "Actions",
                ].map((head) => (
                  <th
                    key={head}
                    className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {order.id}
                  </td>

                  <td className="p-4 text-sm text-slate-800 dark:text-white">
                    {order.customer}
                  </td>

                  <td className="p-4 text-sm text-slate-800 dark:text-white">
                    {order.product}
                  </td>

                  <td className="p-4 text-sm text-slate-800 dark:text-white">
                    {order.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`${getStatusColor(order.status)} text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </td>

                  <td className="p-4 text-sm text-slate-500">{order.date}</td>

                  <td className="p-4">
                    <MoreHorizontal className="w-4 h-4 text-slate-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div
        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl
      border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
      >
        <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-800 dark:text-white">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              best performing products
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        {/* Dynamic Data */}
        <div className="p-6 space-y-4">
          {topProducts.map((product) => {
            return (
              <div
                key={product.name}
                className="p-4 flex items-center justify-between rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-100"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {product.sales}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    {product.revenue}
                  </p>
                  <div className="flex items-center space-x-1">
                    {product.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    )}
                    <span
                      className={`text-xs font-medium ${product.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {product.change}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
