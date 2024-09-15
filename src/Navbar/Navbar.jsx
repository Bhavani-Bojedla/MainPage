import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [selectedOptions, setSelectedOptions] = useState({
    inr: "INR", // Default option for INR
    btc: "BTC", // Default option for BTC
  });

  const optionsINR = [
    { value: "INR", label: "INR" }];
  const optionsBTC = [
    { value: "BTC", label: "BTC" },
    { value: "ETH", label: "ETH" },
    { value: "USDT", label: "USDT" },
    { value: "XRP", label: "XRP" },
    { value: "TRX", label: "TRX" },
    { value: "DASH", label: "DASH" },
    { value: "ZEC", label: "ZEC" },
    { value: "XEM", label: "XEM" },
    { value: "IOST", label: "IOST" },
    { value: "WIN", label: "WIN" },
    { value: "BIT", label: "BIT" },
    { value: "WRX", label: "WRX" },
  ];

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown); // Toggle the clicked dropdown
  };

  const handleOptionSelect = (dropdown, option) => {
    setSelectedOptions({ ...selectedOptions, [dropdown]: option.label }); // Update the label of only the clicked dropdown
    setOpenDropdown(null); // Close the dropdown after selecting an option
  };

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime === 0 ? 60 : prevTime - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const progress = (timeLeft / 60) * 100;

  return (
    
      <div className="nav">
        <div className="title"></div>
        <div className="middle">
          {/* INR Dropdown */}
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("inr")}
            >
              {selectedOptions["inr"]} <IoMdArrowDropdown className="icon" />
            </button>
            {openDropdown === "inr" && (
              <div className="dropdown-menu">
                {optionsINR.map((option) => (
                  <div
                    key={option.value}
                    className="dropdown-item"
                    onClick={() => handleOptionSelect("inr", option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* BTC Dropdown */}
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("btc")}
            >
              {selectedOptions["btc"]} <IoMdArrowDropdown className="icon" />
            </button>
            {openDropdown === "btc" && (
              <div className="dropdown-menu">
                {optionsBTC.map((option) => (
                  <div
                    key={option.value}
                    className="dropdown-item"
                    onClick={() => handleOptionSelect("btc", option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* BUY BTC Button */}
          <div className="dropdown">
            <button className="dropdown-toggle temp">BUY BTC</button>
          </div>
        </div>
        <div className="end">
          <div className="circular-timer">
            <svg viewBox="0 0 36 36" className="progress-circle">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${progress}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="timer-text">
                {timeLeft}
              </text>
            </svg>
          </div>
          <button className="telegram">
            <FaTelegramPlane className="icon2" />
            Connect Telegram
          </button>
          <div
            className={`toggle-container ${isToggled ? "toggled" : ""}`}
            onClick={() => setIsToggled(!isToggled)}
          >
            <div className="toggle-circle"></div>
          </div>
        </div>
      </div>
  );
}
