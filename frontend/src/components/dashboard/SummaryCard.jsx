import React from "react";

const SummaryCard = ({ icon, text, number }) => {
  return (
    <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4 hover:shadow-md transition">
      <div className="text-3xl text-[#1B2D59]">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{text}</p>
        <h3 className="text-xl font-semibold">{number}</h3>
      </div>
    </div>
  );
};

export default SummaryCard;
