import React from "react";

function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-white text-neutral-800">
      <div className="w-full h-full py-4 px-8 flex flex-col">{children}</div>
    </div>
  );
}

export default Layout;
