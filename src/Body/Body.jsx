import React from "react";
import "./Body.css";
import priceTableData from "./Data";
export default function Body() {
  return (
    <div>
      <div className="head">Best Price to Trade</div>


      <div className="money">
        <div className="box">
          <div className="percent">0.1 %</div>
          <div className="desc">5 Mins</div>
        </div>
        <div className="box">
          <div className="percent">0.96 %</div>
          <div className="desc">1 Hour</div>
        </div>
        <div className="boxx">
          <div className="percents">&#8377; 26,56,110</div>
          <div className="desc">Average BTC/INR net price including commission</div>
        </div>
        <div className="box">
          <div className="percent">2.73 %</div>
          <div className="desc">1 Day</div>
        </div>
        <div className="box">
          <div className="percent">7.51 %</div>
          <div className="desc">7 Days</div>
        </div>
      </div>
      
      <div className="price-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy / Sell Price</th>
            <th>Difference</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          {priceTableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td className="logo-box">
                {/* <span className="logo"></span> */}
                <img src={row.imageUrl} className="logo" />
                {row.platform}</td>
              <td>{row.lastPrice}</td>
              <td>{`${row.buyPrice} / ${row.sellPrice}`}</td>
              <td className={row.difference.includes('-') ? 'negative' : 'positive'}>
                {row.difference}
              </td>
              <td className={row.savingsNegative ? 'negative' : 'positive'}>
                {row.savingsNegative ? `▼ ${row.savings}` : `▲ ${row.savings}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="final">
    <button className="end-button">
      Add hodlinfo to home screen
    </button>
    </div>
    </div>
  );
}