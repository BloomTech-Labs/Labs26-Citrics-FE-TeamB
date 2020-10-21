import React from "react";
import { Skeleton, Space, Tabs } from "antd";

import Graph from "../../common/Graphs/renderGraph";
import { LoadingSkeleton } from "../../common";

export default class ComparisonGraphs extends React.Component {
  getUnemployRate = () => {
    const unemployRate = [];
    for (let id in this.props.citiesData) {
      unemployRate.push({
        name: this.props.citiesData[id].name,
        plotX: JSON.parse(this.props.citiesData[id].unemployRate.viz).data[0].x,
        plotY: JSON.parse(this.props.citiesData[id].unemployRate.viz).data[0].y,
        type: "line",
        xLabel: "Year",
        yLabel: "Percentage %"
      });
    }
    return unemployRate;
  };
  // puts plot data  in an array for easier access
  getCityPop = () => {
    const cityPop = [];
    for (let id in this.props.citiesData) {
      cityPop.push({
        name: this.props.citiesData[id].name,
        plotX: JSON.parse(this.props.citiesData[id].population.viz).data[0].x,
        plotY: JSON.parse(this.props.citiesData[id].population.viz).data[0].y,
        type: "bar",
        xLabel: "Year",
        yLabel: "Population Count"
      });
    }
    return cityPop;
  };

  getRentals = () => {
    const rentals = [];
    for (let id in this.props.citiesData) {
      rentals.push({
        name: this.props.citiesData[id].name,
        plotY: ["Studio", "1BR", "2BR", "3BR", "4BR"],
        plotX: [
          this.props.citiesData[id].rent.studio,
          this.props.citiesData[id].rent["1br"],
          this.props.citiesData[id].rent["2br"],
          this.props.citiesData[id].rent["3br"],
          this.props.citiesData[id].rent["4br"]
        ],
        type: "bar",
        orientation: "h",
        xLabel: "Price $",
        yLabel: "Room Type"
      });
    }
    return rentals;
  };

  getJobs = cities => {
    const headers = [];

    // creates headers for the table
    this.props.citiesData.map(city => headers.push(city.name));

    // helper function to build keys to filter
    const helperFunc = (str = "job_ranked_") => {
      const allowed = [];
      for (let i = 1; i < 6; i++) {
        allowed.push(`${str}${i}`);
      }
      return allowed;
    };
    const allowedRanks = helperFunc();

    // helper function to filter and build array of top 5
    const helperBuild = (topArray, id) => {
      return Object.keys(this.props.citiesData[id].jobs.data)
        .filter(keys => topArray.includes(keys))
        .map(rankValue => {
          return this.props.citiesData[id].jobs.data[rankValue];
        });
    };
    // array to hold top 5 of each city
    const topJobs = [];
    // iterates through the citiesDta
    // gets all the keys and filters it only getting the allowedRanks
    // creates a new array of top 5 jobs for the city and pushes it into the topJobs array
    for (let id in this.props.citiesData) {
      topJobs.push(helperBuild(allowedRanks, id));
    }

    return {
      headers,
      values: topJobs,
      graphName: "Top Industries",
      type: "table"
    };
  };
  render() {
    const { getCityPop, getUnemployRate, getRentals, getJobs } = this;
    const { TabPane } = Tabs;

    // To determine if we're done loading, check every city for a "weather" prop
    const finishedLoading = Object.values(this.props.citiesData).reduce(
      (ac, { weather }) => weather && ac,
      true
    );
    // Some cities are missing job data, hence a separate check for jobs having been loaded
    const finishedLoadingJobs = Object.values(this.props.citiesData).reduce(
      (ac, { jobs }) => jobs && ac,
      true
    );

    return (
      <div className="visual-container">
        {/* Renders the tabs for the user to navigate for different visuals */}
        <Tabs
          data-testid="ant-d-tabs"
          className="metrics-container graphs"
          defaultActiveKey="1"
          centered={true}
          tabBarStyle={{
            color: "white"
          }}
        >
          <TabPane className="graph-holder" tab="Population Trend" key="1">
            {finishedLoading ? (
              <Graph
                dataSet={getCityPop()[0]}
                dataSet2={getCityPop()[1]}
                dataSet3={getCityPop()[2]}
              />
            ) : (
              <LoadingSkeleton />
            )}
          </TabPane>
          <TabPane className="graph-holder" tab="Apartment Prices" key="2">
            {finishedLoading ? (
              <Graph
                dataSet={getRentals()[0]}
                dataSet2={getRentals()[1]}
                dataSet3={getRentals()[2]}
              />
            ) : (
              <LoadingSkeleton />
            )}
          </TabPane>
          <TabPane className="graph-holder" tab="Unemployment Rate" key="3">
            {finishedLoading ? (
              <Graph
                dataSet={getUnemployRate()[0]}
                dataSet2={getUnemployRate()[1]}
                dataSet3={getUnemployRate()[2]}
              />
            ) : (
              <LoadingSkeleton />
            )}
          </TabPane>
        </Tabs>
        <div className="job-table">
          {finishedLoadingJobs ? (
            <Graph dataSet={getJobs()} />
          ) : (
            <div style={{ textAlign: "center" }}>
              <h3>Top Job Industries</h3>
              <Space>
                <Skeleton.Input
                  active
                  size={"large"}
                  style={{ width: "800px" }}
                />
              </Space>
            </div>
          )}
        </div>
      </div>
    );
  }
}
