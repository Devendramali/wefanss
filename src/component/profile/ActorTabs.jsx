import React, { useState } from "react";
import Biography from "./Biography";
import Timeline from "./Timeline";
import Trivia from "./Trivia";

const ActorTabs = () => {
  const [activeTab, setActiveTab] = useState("Biography");

  const tabs = ["Biography", "Timeline", "Trivia"];

  return (
    <div className="bg-white rounded-[8px] p-6 shadow-xl">
      
      {/* Tabs */}
      <div className="flex gap-4 mb-6 bg-[#F0F0F0] rounded-[100px] p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 w-[33%] primary-font py-2 rounded-[100px] text-[16px] font-[500] transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-[#4285F4] text-white"
                  : "bg-transparent text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Biography" && <Biography />}
      {activeTab === "Timeline" && <Timeline />}
      {activeTab === "Trivia" && <Trivia />}
    </div>
  );
};

export default ActorTabs;
