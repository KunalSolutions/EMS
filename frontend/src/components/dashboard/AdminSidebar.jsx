import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCog,
} from "react-icons/fa";

const AdminSidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/admin-dashboard", icon: FaTachometerAlt },
    { name: "Employee", path: "/admin-employee", icon: FaUsers },
    { name: "Department", path: "/admin-department", icon: FaBuilding },
    { name: "Leave", path: "/admin-leave", icon: FaCalendarAlt },
    { name: "Salary", path: "/admin-salary", icon: FaMoneyBillWave },
    { name: "Setting", path: "/admin-setting", icon: FaCog },
  ];

  return (
    <aside className="h-screen w-64 bg-[#1B2D59] text-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/20 text-center font-semibold text-lg">
        Employee Management System
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition
                ${
                  isActive
                    ? "bg-[#D1A783] text-[#1B2D59] font-medium"
                    : "hover:bg-white/10"
                }`
              }
            >
              <Icon className="text-lg" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
