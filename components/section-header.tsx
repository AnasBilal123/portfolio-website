import React from "react";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-medium capitalize text-3xl mb-8 text-center">
      {children}
    </div>
  );
}

export default SectionHeader;
