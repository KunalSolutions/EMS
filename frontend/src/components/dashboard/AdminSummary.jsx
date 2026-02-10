import React from "react";
import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaClipboardList,
  FaHourglassHalf,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import SummaryCard from "./SummaryCard";

const AdminSummary = () => {
  return (
    <main className="flex-1 p-6">
      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>

      {/* Top Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <SummaryCard
          icon={<FaUsers />}
          text="Total Employees"
          number={128}
        />
        <SummaryCard
          icon={<FaBuilding />}
          text="Total Departments"
          number={8}
        />
        <SummaryCard
          icon={<FaMoneyBillWave />}
          text="Monthly Salary"
          number="₹4,50,000"
        />
      </div>

      {/* Leave Section */}
      <h2 className="text-xl font-semibold mb-4">Leave Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <SummaryCard
          icon={<FaClipboardList />}
          text="Leave Applied"
          number={24}
        />
        <SummaryCard
          icon={<FaHourglassHalf />}
          text="Leave Pending"
          number={7}
        />
        <SummaryCard
          icon={<FaCheckCircle />}
          text="Leave Approved"
          number={14}
        />
        <SummaryCard
          icon={<FaTimesCircle />}
          text="Leave Rejected"
          number={3}
        />
      </div>
    </main>
  );
};

export default AdminSummary;
