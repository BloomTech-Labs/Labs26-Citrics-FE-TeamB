import React from "react";
import { Tabs } from "antd";
import { lineGraph } from "../../../common/Graphs/graphType";
import Plot from "react-plotly.js";
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
  // Takes the roomtype from tab pan loop and generates a graph for each room
  const renderPrediction = roomType => {
    const { dataPlot, layout } = lineGraph({
      name: "",
      plotX: JSON.parse(predictions[roomType.toLowerCase()]).data[1].x,
      plotY: JSON.parse(predictions[roomType.toLowerCase()]).data[1].y,
      type: "line",
      graphName: `${roomType} price predictions`
    });

    return (
      <Plot
        data={dataPlot}
        layout={{ ...layout, showlegend: false }}
        style={{ width: "100%", height: "100%" }}
      />
    );
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
          {predictions && rent ? (
            <>
              <PriceDisplay change={rent.rental_pct_chg} />
              {/* This JSX fragment contains everything shown when not loading */}
              <Tabs defaultActiveKey="1" className="metrics-container rental">
                {aptTypes.map((name, idx) => (
                  <TabPane key={idx} tab={name} className="rental-price-tab">
                    <div className="rental-data-container">
                      ${rent[name.toLowerCase()]}/month
                      {renderPrediction(name)}
                    </div>
                  </TabPane>
                ))}
              </Tabs>
            </>
          ) : (
            <LoadingSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}
