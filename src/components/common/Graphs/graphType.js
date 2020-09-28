export const lineGraph = (set1, set2, set3) => {
  let trace2, trace3;

  let trace1 = {
    x: set1.plotX,
    y: set1.plotY,
    line: { color: "rgba(222,45,38,0.8)" },
    mode: "lines",
    name: set1.name,
    type: "scatter"
  };
  if (set2) {
    trace2 = {
      x: set2.plotX,
      y: set2.plotY,
      line: { color: "rgb(49,130,189)" },
      mode: "lines",
      name: set2 ? set2.name : "Fix me"
    };
  }
  if (set3) {
    trace3 = {
      x: set3.plotX,
      y: set3.plotY,
      line: { color: "rgb(204,204,204)" },
      mode: "lines",
      name: set3 ? set3.name : "Fix me too"
    };
  }

  let dataPlot = [trace1, set2 ? trace2 : {}, set3 ? trace3 : {}];
  let layout = {
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    // yaxis: {
    //   showgrid: false
    // },
    // xaxis: {
    //   showgrid: false
    // },
    font: {
      size: 14,
      color: "#000"
    },

    showlegend: false,
    title: set1.graphName
  };
  return {
    dataPlot,
    layout
  };
};

export const barGraph = (set1, set2, set3) => {
  let trace2, trace3;

  let trace1 = {
    x: set1.plotX,
    y: set1.plotY,
    type: "bar",
    name: set1.name,
    marker: {
      color: "rgb(49,130,189)",
      opacity: 0.7
    },
    orientation: set1.orientation ? set1.orientation : "v"
  };
  if (set2) {
    trace2 = {
      x: set2.plotX,
      y: set2.plotY,
      type: "bar",
      name: set2.name,
      marker: {
        color: "rgb(247, 77, 77,.5)",
        opacity: 0.5
      },
      orientation: set1.orientation ? set1.orientation : "v"
    };
  }
  if (set3) {
    trace3 = {
      x: set3.plotX,
      y: set3.plotY,
      type: "bar",
      name: set3.name,
      marker: {
        color: "rgb(158,202,225)",
        opacity: 0.5
      },
      orientation: set1.orientation ? set1.orientation : "v"
    };
  }
  let dataPlot = [trace1, set2 ? trace2 : {}, set3 ? trace3 : {}];

  let layout = {
    title: set1.graphName,
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    // yaxis: {
    //   showgrid: false
    // },
    // xaxis: {
    //   showgrid: false
    // },
    font: {
      size: 14,
      color: "#000"
    },
    showlegend: false,
    barmode: set1.mode ? set1.mode : "group"
  };

  return { dataPlot, layout };
};
