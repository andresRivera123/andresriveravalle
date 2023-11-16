import React, { useEffect, useState } from "react";
import "../styles/tabs.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    //Actualiza el valor de --random cada vez que se activa una pestaña
    document.documentElement.style.setProperty('--random', Math.random() < 0.5 ? -1 : 1);
    setActiveTab(index);
  };


  return (
    <div className="tabs">
      <div className="tabs__container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <img src={tab.icon} alt={tab.label} className="tab-icon" />
            <span className="subtitle tab__label text__interactive">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
