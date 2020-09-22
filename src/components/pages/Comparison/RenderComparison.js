import React, { useState } from "react";
import { Card, Button, Tabs } from "antd";
import ModalComponent from "../../common/Modal.js";
import LoadingComponent from "../../common/LoadingComponent.js";
// Graphs
import LineGraph from "../../common/Graphs/LineGraph";
import BarGraph from "../../common/Graphs/BarGraph";
import PieChart from "../../common/Graphs/PieChart";

export default function RenderComparison({ citiesData }) {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState({});
  const toggleModal = cityData => {
    setCity(cityData);
    // Toggles the modal to open
    setVisible(true);
  };

  //Ant design tabs
  const { TabPane } = Tabs;
  const callback = key => {
    console.log(key);
  };
  // Iterates through the cities state and renders the card per city
  const renderCard = () => {
    const cities = [];
    for (const data in citiesData) {
      cities.push(
        <div className="card" key={data}>
          <Card className="comparison-card" data-testid="city-cards">
            <div
              className="custom-image"
              style={{ backgroundImage: `url(${citiesData[data].image})` }}
            >
              <img
                alt={`Thumbnail for ${citiesData[data].name}, ${citiesData[data].state}`}
                src={citiesData[data].image}
              />
            </div>
            {!citiesData[data] ? (
              <LoadingComponent message="Loading city data..." />
            ) : (
              <div className="custom-card">
                <h3>
                  {citiesData[data].name}, {citiesData[data].state}
                </h3>
                <p>Population: {citiesData[data].population.data.total_pop}</p>
                <p>Rental Prices: ${citiesData[data].rent}</p>
                <p>Weather: {citiesData[data].weather}</p>
                <Button
                  className="more-info-btn"
                  data-testid="more-info-btn"
                  type="primary"
                  onClick={() => toggleModal(citiesData[data])}
                >
                  More Info
                </Button>
              </div>
            )}
          </Card>
        </div>
      );
    }
    return cities;
  };

  // funciton to put state names into an array for quick test
  const getStateName = () => {
    const stateName = [];
    for (let id in citiesData) {
      stateName.push({
        state: citiesData[id].state,
        plotX: citiesData[id].unemployRate.x,
        plotY: citiesData[id].unemployRate.y,
        graphName: "Unemployment Rate"
      });
    }
    return stateName;
  };
  return (
    <div className="comparison-container">
      <div className="card-container">{renderCard()}</div>
      {/* Renders the tabs for the user to navigate for different visuals */}
      {citiesData ? (
        <Tabs
          className="metrics-container"
          defaultActiveKey="1"
          onChange={callback}
          // style={{ width: "100%" }}
        >
          <TabPane className="graph-holder" tab="Unemployment Rate" key="1">
            <LineGraph
              state={getStateName()[0]}
              state2={getStateName()[1]}
              state3={getStateName()[2]}
            />
          </TabPane>
          <TabPane className="graph-holder" tab="Example Bar" key="2">
            <BarGraph />
          </TabPane>
          <TabPane className="graph-holder" tab="Example Pie" key="3">
            <PieChart />
          </TabPane>
        </Tabs>
      ) : (
        <LoadingComponent message="Loading graphs.." />
      )}

      <ModalComponent visible={visible} setVisible={setVisible} city={city} />
    </div>
  );
}
