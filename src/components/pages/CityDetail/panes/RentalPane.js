import React from "react";
import { Tabs } from "antd";
import LoadingSkeleton from "./LoadingSkeleton";
//icon
import rentIcon from "../../../../styles/icons/rent-96.png";

export default function RentalPane({ rent, predictions }) {
  const { TabPane } = Tabs;
  // This list will be the titles of the tabs
  // it also matches the keys in rent (although they're all lowercase in rent)
  const aptTypes = ["Studio", "1BR", "2BR", "3BR", "4BR"];

  // Make a color-coded price change display
  const PriceDisplay = ({ change }) => {
    change = Math.round(change * 100);
    let indicator = "";
    if (change < 0) {
      indicator = " down";
      change += "%";
    } else {
      if (change > 0) {
        indicator = " up";
      }
      change = "+" + change + "%";
    }
    return (
      <p>
        Trend:
        <span className={"rent-percent-change" + indicator}>{change}</span>
      </p>
    );
  };
  const renderPrediction = roomType => {
    console.log(JSON.parse(predictions[roomType.toLowerCase()]).data);
  };

  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div className="detail-header">
          <img
            className="detail-pane-icon"
            src={rentIcon}
            alt="Green icon of a house with a dollar sign inside"
          />
          <h2>Rental Prices:</h2>
        </div>

        <div className="housing-pane">
          {rent ? (
            <>
              {/* This JSX fragment contains everything shown when not loading */}
              <Tabs defaultActiveKey="1">
                {aptTypes.map((name, idx) => (
                  <TabPane key={idx} tab={name} className="rental-price-tab">
                    ${rent[name.toLowerCase()]}/month
                    {predictions ? renderPrediction(name) : null}
                  </TabPane>
                ))}
              </Tabs>
              <PriceDisplay change={rent.rental_pct_chg} />
            </>
          ) : (
            <LoadingSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}
