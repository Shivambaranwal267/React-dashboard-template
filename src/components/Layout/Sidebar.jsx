import React, { useEffect, useState } from "react";
import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  ShoppingBag,
  Package,
  Settings,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

const Sidebar = ({ collapsed, currentPage, onPageChange }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = (id) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Auto-expand submenu if active page is inside it
  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.submenu?.some((sub) => sub.id === currentPage)) {
        setExpandedItems((prev) => new Set([...prev, item.id]));
      }
    });
  }, [currentPage]);

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
      border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl shadow-lg bg-linear-to-r from-blue-500 to-purple-600">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive =
            currentPage === item.id ||
            item.submenu?.some((sub) => sub.id === currentPage);

          return (
            <div key={item.id}>
              <button
                onClick={() =>
                  item.submenu
                    ? toggleExpanded(item.id)
                    : onPageChange(item.id)
                }
                className={`flex items-center w-full p-2 rounded-lg transition-all
                ${
                  isActive
                    ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                />

                {!collapsed && (
                  <>
                    <span className="ml-3 text-sm font-medium">
                      {item.label}
                    </span>

                    {item.badge && (
                      <span className="ml-auto px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}

                    {item.count && (
                      <span className="ml-auto px-2 py-0.5 text-xs bg-slate-200 dark:bg-slate-700 rounded-full">
                        {item.count}
                      </span>
                    )}

                    {item.submenu && (
                      <ChevronDown
                        className={`ml-auto w-4 h-4 transition-transform ${
                          expandedItems.has(item.id) ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </>
                )}
              </button>

              {/* Submenu */}
              {!collapsed &&
                item.submenu &&
                expandedItems.has(item.id) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => onPageChange(sub.id)}
                        className={`w-full text-left p-2 text-sm rounded-lg transition-all
                        ${
                          currentPage === sub.id
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src="https://i.pravatar.cc/300"
              alt="User"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">
                John Doe
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
