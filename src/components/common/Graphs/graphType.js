// LINE GRAPH CONFIG
export const lineGraph = (set1, set2, set3) => {
  let trace2, trace3;

  let trace1 = {
    automargin: true,
    x: set1.plotX,
    y: set1.plotY,
    line: { color: set1.color ?? "rgba(222,45,38,0.8)" },
    mode: "lines",
    name: set1.name,
    type: "scatter"
  };
  if (set2) {
    trace2 = {
      automargin: true,
      x: set2.plotX,
      y: set2.plotY,
      line: { color: set2.color ?? "rgb(49,130,189)" },
      mode: "lines",
      name: set2.name ?? "",
      type: "scatter"
    };
  }
  if (set3) {
    trace3 = {
      automargin: true,
      x: set3.plotX,
      y: set3.plotY,
      line: { color: set3.color ?? "rgb(204,204,204)" },
      mode: "lines",
      name: set3.name ?? "",
      type: "scatter",
      hoverinfo: set3.hoverinfo ?? "",
      fill: set3.fill ?? "",
      fillcolor: set3.fillcolor ?? ""
    };
  }

  let dataPlot = [trace1, set2 ? trace2 : {}, set3 ? trace3 : {}];
  let layout = {
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    font: {
      size: 12,
      color: "#000"
    },
    showlegend: true,
    title: set1.graphName ?? "",
    autosize: true,
    xaxis: {
      title: {
        text: set1.xLabel ?? ""
      }
    },
    yaxis: {
      title: {
        text: set1.yLabel ?? ""
      }
    }
  };
  return {
    dataPlot,
    layout
  };
};

// BAR GRAPH CONFIG
export const barGraph = (set1, set2, set3) => {
  let trace2, trace3;

  let trace1 = {
    automargin: true,
    x: set1.plotX,
    y: set1.plotY,
    type: "bar",
    name: set1.name,
    marker: {
      color: "rgb(49,130,189)",
      opacity: 0.7
    },
    orientation: set1.orientation ?? "v"
  };
  if (set2) {
    trace2 = {
      automargin: true,
      x: set2.plotX,
      y: set2.plotY,
      type: "bar",
      name: set2.name,
      marker: {
        color: "rgb(247, 77, 77,.5)",
        opacity: 0.5
      },
      orientation: set1.orientation ?? "v"
    };
  }
  if (set3) {
    trace3 = {
      automargin: true,
      x: set3.plotX,
      y: set3.plotY,
      type: "bar",
      name: set3.name,
      marker: {
        color: "rgb(158,202,225)",
        opacity: 0.5
      },
      orientation: set1.orientation ?? "v"
    };
  }
  let dataPlot = [trace1, set2 ? trace2 : {}, set3 ? trace3 : {}];

  let layout = {
    title: set1.graphName ?? "",
    autosize: true,
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    font: {
      size: 12,
      color: "#000"
    },
    showlegend: true,
    barmode: set1.mode ? set1.mode : "group",
    xaxis: {
      title: {
        text: set1.xLabel ?? ""
      }
    },
    yaxis: {
      title: {
        text: set1.yLabel ?? ""
      }
    }
  };

  return { dataPlot, layout };
};

// TABLE CONFIG
export const table = set1 => {
  let tableData = [
    {
      type: "table",
      header: {
        values: set1.headers,
        align: "center",
        line: { width: 0.5, color: "black" },
        fill: { color: "#de2817" },
        font: { size: 12, color: "white" }
      },
      cells: {
        values: set1.values,
        align: "left",
        line: { color: "black", width: 0.5 },
        font: { size: 10, color: ["black"] }
      }
    }
  ];
  let layout = {
    title: set1.graphName ?? "",
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent"
  };
  return { tableData, layout };
};
