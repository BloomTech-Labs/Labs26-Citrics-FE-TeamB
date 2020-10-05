import React, { Component } from "react";
import { Tabs } from "antd";
import LoadingComponent from "../../common/LoadingComponent.js";
import ComparisonCard from "./comparisonCard";
import Graph from "../../common/Graphs/renderGraph";

class RenderComparison extends Component {
  // puts state name in an array for easier access
  getUnemployRate = () => {
    const unemployRate = [];
    // for (let id in this.props.citiesData) {
    //   unemployRate.push({
    //     name: this.props.citiesData[id].name,
    //     plotX: JSON.parse(this.props.citiesData[id].unemployRate.viz).data[0].x,
    //     plotY: JSON.parse(this.props.citiesData[id].unemployRate.viz).data[0].y,
    //     graphName: "Unemployment Rate",
    //     type: "line"
    //   });
    // }
    return unemployRate;
  };
  // puts plot data  in an array for easier access
  getCityPop = () => {
    const cityPop = [];
    // for (let id in this.props.citiesData) {
    //   cityPop.push({
    //     name: this.props.citiesData[id].name,
    //     plotX: JSON.parse(this.props.citiesData[id].population.viz).data[0].x,
    //     plotY: JSON.parse(this.props.citiesData[id].population.viz).data[0].y,
    //     graphName: "Population Trend",
    //     type: "bar"
    //   });
    // }
    return cityPop;
  };

  getRentals = () => {
    const rentals = [];
    // for (let id in this.props.citiesData) {
    //   rentals.push({
    //     name: this.props.citiesData[id].name,
    //     plotY: ["Studio", "1BR", "2BR", "3BR", "4BR"],
    //     plotX: [
    //       this.props.citiesData[id].rent.studio,
    //       this.props.citiesData[id].rent["1br"],
    //       this.props.citiesData[id].rent["2br"],
    //       this.props.citiesData[id].rent["3br"],
    //       this.props.citiesData[id].rent["4br"]
    //     ],
    //     graphName: "Apartment Prices",
    //     type: "bar",
    //     orientation: "h"
    //   });
    // }
    return rentals;
  };

  getJobs = cities => {
    const headers = [];

    // // creates headers for the table
    // this.props.citiesData.map(city => headers.push(city.name));

    // // helper function to build keys to filter
    // const helperFunc = (str = "job_ranked_") => {
    //   const allowed = [];
    //   for (let i = 1; i < 6; i++) {
    //     allowed.push(`${str}${i}`);
    //   }
    //   return allowed;
    // };
    // const allowedRanks = helperFunc();

    // // helper function to filter and build array of top 5
    // const helperBuild = (topArray, id) => {
    //   return Object.keys(this.props.citiesData[id].jobs.data)
    //     .filter(keys => topArray.includes(keys))
    //     .map(rankValue => {
    //       return this.props.citiesData[id].jobs.data[rankValue];
    //     });
    // };
    // // array to hold top 5 of each city
    const topJobs = [];
    // // iterates through the citiesDta
    // // gets all the keys and filters it only getting the allowedRanks
    // // creates a new array of top 5 jobs for the city and pushes it into the topJobs array
    // for (let id in this.props.citiesData) {
    //   topJobs.push(helperBuild(allowedRanks, id));
    // }

    return {
      headers,
      values: topJobs,
      type: "table"
    };
  };

  render() {
    const { citiesData } = this.props;
    const { getCityPop, getUnemployRate, getRentals, getJobs } = this;
    const { TabPane } = Tabs;
    return (
      <div className="comparison-container">
        <div className="card-container">
          {citiesData.map(city => {
            return <ComparisonCard citiesData={city} key={city.id} />;
          })}
        </div>
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
              <Graph
                dataSet={getCityPop()[0]}
                dataSet2={getCityPop()[1]}
                dataSet3={getCityPop()[2]}
              />
            </TabPane>
            <TabPane className="graph-holder" tab="Apartment Prices" key="2">
              <Graph
                dataSet={getRentals()[0]}
                dataSet2={getRentals()[1]}
                dataSet3={getRentals()[2]}
              />
            </TabPane>
            <TabPane className="graph-holder" tab="Unemployment Rate" key="3">
              <Graph
                dataSet={getUnemployRate()[0]}
                dataSet2={getUnemployRate()[1]}
                dataSet3={getUnemployRate()[2]}
              />
            </TabPane>
            {/* <TabPane className="graph-holder" tab="Job Market" key="4">
              <Graph dataSet={getJobs()} />
            </TabPane> */}
          </Tabs>
          <div className="job-table">
            <Graph dataSet={getJobs()} />
          </div>
        </div>
      </div>
    );
  }
}

export default RenderComparison;
