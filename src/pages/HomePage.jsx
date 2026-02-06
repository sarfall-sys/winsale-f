import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center bg-bg-light dark:bg-bg-dark min-h-screen p-6">
      <h1 className="text-text-primary dark:text-text-primary text-5xl font-bold text-center mb-4">
        Welcome to the WinSale
      </h1>
      <p className="text-text-primary dark:text-text-primary text-center max-w-2xl">
        Your all-in-one sales analytics solution. Dive into comprehensive
        insights and make data-driven decisions to boost your sales performance.
      </p>
    </div>
  );
}

export default HomePage;
