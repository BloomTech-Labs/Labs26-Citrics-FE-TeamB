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

    showlegend: true,
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
    showlegend: true,
    barmode: set1.mode ? set1.mode : "group"
  };

  return { dataPlot, layout };
};
export const pieChart = (set1, set2, set3) => {
  var ultimateColors = [
    [
      "rgb(56, 75, 126)",
      "rgb(18, 36, 37)",
      "rgb(34, 53, 101)",
      "rgb(36, 55, 57)",
      "rgb(6, 4, 4)"
    ],
    [
      "rgb(177, 127, 38)",
      "rgb(205, 152, 36)",
      "rgb(99, 79, 37)",
      "rgb(129, 180, 179)",
      "rgb(124, 103, 37)"
    ],
    [
      "rgb(33, 75, 99)",
      "rgb(79, 129, 102)",
      "rgb(151, 179, 100)",
      "rgb(175, 49, 35)",
      "rgb(36, 73, 147)"
    ],
    [
      "rgb(146, 123, 21)",
      "rgb(177, 180, 34)",
      "rgb(206, 206, 40)",
      "rgb(175, 51, 21)",
      "rgb(35, 36, 21)"
    ]
  ];
  let pieData = [
    {
      values: set1.values,
      labels: set1.labels,
      type: "pie",
      name: set1.name,
      marker: {
        colors: ultimateColors[0]
      },
      domain: {
        row: 0,
        column: 0
      },
      hoverinfo: "label+percent+name",
      textinfo: "none"
    },
    set2
      ? {
          values: set2.values,
          labels: set2.labels,
          type: "pie",
          name: set2.name,
          marker: {
            colors: ultimateColors[1]
          },
          domain: {
            row: 1,
            column: 0
          },
          hoverinfo: "label+percent+name",
          textinfo: "none"
        }
      : {},
    set3
      ? {
          values: set3.values,
          labels: set3.labels,
          type: "pie",
          name: set3.name,
          marker: {
            colors: ultimateColors[2]
          },
          domain: {
            row: 0,
            column: 1
          },
          hoverinfo: "label+percent+name",
          textinfo: "none"
        }
      : {}
  ];

  let layout = {
    height: 1000,
    width: 1000,
    grid: { rows: 1, columns: 2 }
  };
  return { pieData, layout };
};
