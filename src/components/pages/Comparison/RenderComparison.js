import React, { useState } from "react";
import { Card, Button, Tabs } from "antd";
import ModalComponent from "../../common/Modal.js";
import LoadingComponent from "../../common/LoadingComponent.js";
// Graph
import Graph from "../../common/Graphs/renderGraph";

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
        graphName: "Unemployment Rate",
        type: "line"
      });
    }
    return stateName;
  };
  const getCityPop = () => {
    const cityPop = [];
    for (let id in citiesData) {
      cityPop.push({
        state: citiesData[id].state,
        plotX: JSON.parse(citiesData[id].population.viz).data[0].x,
        plotY: JSON.parse(citiesData[id].population.viz).data[0].y,
        graphName: "Population Trend",
        type: "bar"
      });
    }
    return cityPop;
  };
  return (
    <div className="comparison-container">
      {citiesData.length ? (
        <>
          <div className="card-container">{renderCard()}</div>

          {/* Renders the tabs for the user to navigate for different visuals */}
          <Tabs
            className="metrics-container"
            defaultActiveKey="1"
            onChange={callback}
            centered="true"
            tabBarStyle={{
              color: "white"
            }}
          >
            <TabPane className="graph-holder" tab="Population Trend" key="1">
              <Graph
                dataSet={getCityPop()[0]}
                dataSet2={getCityPop()[1]}
                dataSet3={getCityPop()[2]}
              />
            </TabPane>
            <TabPane className="graph-holder" tab="Unemployment Rate" key="2">
              <Graph
                dataSet={getStateName()[0]}
                dataSet2={getStateName()[1]}
                dataSet3={getStateName()[2]}
              />
            </TabPane>
            {/* Will implement  */}
            {/* <TabPane className="graph-holder" tab="Example Pie" key="3">
              <PieChart />
            </TabPane> */}
          </Tabs>
          <ModalComponent
            visible={visible}
            setVisible={setVisible}
            city={city}
          />
        </>
      ) : (
        <LoadingComponent message="Loading cities..." />
      )}
    </div>
  );
}
