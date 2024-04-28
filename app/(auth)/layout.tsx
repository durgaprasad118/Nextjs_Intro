import React from "react";
const Laayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="px-2 py-3 bg-gray-100 border border-gray-200">
        Do within this month for getting 20% off!
      </div>
      
      {children}
    </div>
  );
};

export default Laayout;
