import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../Css/layout.css"; // 새로운 CSS 파일을 import 합니다.

const Layout = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "FIND US";
      // 다른 경로에 대한 제목을 여기에 추가
      default:
        return "FIND US";
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white text-gray-800">
      <header className="bg-primary text-white">
        <div className="px-4 py-3 flex items-center justify-between">
          {location.pathname !== "/" && (
            <button
              onClick={() => window.history.back()}
              className="text-white"
            >
              ← Back
            </button>
          )}
          <h1 className="text-lg font-bold">{getPageTitle()}</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-grow overflow-auto p-4 hide-scrollbar">
        <Outlet />
      </main>

      <nav className="bg-primary text-white">
        <div className="flex justify-around items-center h-16">
          <span>Home</span>
          <span>Map</span>
          <span>Search</span>
          <span>Profile</span>
        </div>
      </nav>

      <footer className="bg-gray-100 text-gray-600 text-sm">
        <div className="px-4 py-3 text-center">
          <p>&copy; 2023 FIND US. All rights reserved.</p>
          <p className="mt-1">
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            |
            <a href="#" className="underline ml-2">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
