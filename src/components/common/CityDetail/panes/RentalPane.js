import React from "react";
import { Tabs } from "antd";
import { lineGraph } from "../../Graphs/graphType";
import Plot from "react-plotly.js";
import LoadingSkeleton from "../../LoadingSkeleton";
//icon
import rentIcon from "../../../../styles/icons/rent-96.png";

export default function RentalPane({ rent, predictions }) {
  const { TabPane } = Tabs;
  // This list will be the titles of the tabs
  // it also matches the keys in rent (although they're all lowercase in rent)
  const aptTypes = ["Studio", "1BR", "2BR", "3BR", "4BR"];

  const renderPrediction = roomType => {
    const { dataPlot, layout } = lineGraph({
      name: "",
      plotX: JSON.parse(predictions[roomType.toLowerCase()]).data[1].x,
      plotY: JSON.parse(predictions[roomType.toLowerCase()]).data[1].y,
      type: "line",
      xLabel: "Year",
      yLabel: "Price",
      graphName: `${roomType} Price Predictions`
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
            <Tabs defaultActiveKey="1" className="metrics-container rental">
              {aptTypes.map((name, idx) => (
                <TabPane key={idx} tab={name} className="rental-price-tab">
                  <div className="rental-data-container">
                    <div>${rent[name.toLowerCase()]}/month</div>
                    <div>{renderPrediction(name)}</div>
                  </div>
                </TabPane>
              ))}
            </Tabs>
          ) : (
            <LoadingSkeleton minWidth="400px" />
          )}
        </div>
      </div>
    </div>
  );
}
