import { Component, OnInit } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import { data } from 'cypress/types/jquery';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass'],
})
export class GraphsComponent implements OnInit {
  trace5: any;
  constructor(private plots: PlotlyModule) {}

  ngOnInit(): void {}

  public polarChartOptions = {};

  public polarChartLabels = ['Red', 'Green', 'Yellow', 'Grey', 'Blue'];

  public polarChartType = 'polarArea';

  public polarChartLegend = true;

  public polarChartData = [{ data: [5, 16, 17, 3, 14], label: 'Polar Chart' }];

  public polarChartBackgrounds = [
    'rgb(255, 99, 132)',

    'rgb(75, 192, 192)',

    'rgb(255, 205, 86)',

    'rgb(201, 203, 207)',

    'rgb(54, 162, 235)',

  ];

  graph1 = {
    data: [{ x: [1, 2, 3, 4], y: [2, 3, 4, 5], type: 'bar' }],
    layout: { title: 'Some Data to Hover Over' },

  };
  // Line chart
  graph2 = {
    data: [
      {
        x: [1, 2, 3, 4, 5],
        y: [1, 4, 9, 4, 1],
        type: 'line',
        marker: { color: 'black' },
      },
      { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [2, 4, 5, 6, 9], type: 'bar' },
    ],
    layout: { title: 'Some Data to Highlight' },
  };
  graph3 = {
    data: [
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: 'black' },
      },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
    ],
    layout: { width: 500, height: 500, title: 'A Fancy Plot' },
  };

  graph4 = {
    data: [
      {
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie',
      },
    ],
    layout: { height: 400, width: 500, title: 'Pie Chart' },
  };

  // mousewheel or two-finger scroll zooms the plot

  private trace1 = {
    x: ['2020-10-04', '2021-11-04', '2023-12-04'],
    y: [90, 40, 60],
    type: 'scatter',
  };

  data = [this.trace1];

  layout = {
    title: 'Scroll and Zoom',
    showlegend: false,
  };
  config = {
    scrollZoom: true,
  };







  //  Click Here<br>to Edit Chart Title
  private trace2 = {
    x: [0, 1, 2, 3, 4],
    y: [1, 5, 3, 7, 5],
    mode: 'lines+markers',
    type: 'scatter',
  };
  trace3 = {
    x: [1, 2, 3, 4, 5],
    y: [4, 0, 4, 6, 8],
    mode: 'lines+markers',
    type: 'scatter',
  };

  data1 = [this.trace2, this.trace3];

  layout1 = { title: 'Click Here<br>to Edit Chart Title' };
  config1 = {
    scrollZoom: true,
    editable: true,
  };

  // Making a Static Chart
  private trace4 = {
    x: [0, 1, 2, 3, 4, 5, 6],
    y: [1, 9, 4, 7, 5, 2, 4],
    mode: 'markers',
    marker: {
      size: [20, 40, 25, 10, 60, 90, 30],
    },
  };
  data2 = [this.trace4];

  layout2 = {
    title: 'Create a Static Chart',
    showlegend: false,
  };
  config2 = {
    scrollZoom: true,
  };

  // DoubleClickDelay

  DoubleClickDelay = {
    data: [
      {
        type: 'bar',
        y: [3, 5, 3, 2],
        x: ['2019-09-02', '2019-10-10', '2019-11-12', '2019-12-22'],
      },
    ],
    layout: {
      title: 'Double Click Delay!',
      xaxis: { type: 'date' },
    },
    config: { doubleClickDelay: 1000 },
  };

  //Force The Modebar to Always Be Visible

  AlwaysdisplaytheModebar = {
    data: [
      {
        y: [
          'Marc',
          'Henrietta',
          'Jean',
          'Claude',
          'Jeffrey',
          'Jonathan',
          'Jennifer',
          'Zacharias',
        ],

        x: [90, 40, 60, 80, 75, 92, 87, 73],

        type: 'bar',

        orientation: 'h',
      },
    ],

    layout: {
      title: 'Always Display the Modebar',

      showlegend: false,
    },

    config: {
      displayModeBar: true,
    },
  };
  // Making a Responsive Chart
  MakingResponsiveChart = {
    trace1: {
      type: 'bar',
      x: [1, 2, 3, 4],
      y: [5, 10, 2, 8],
      marker: {
        color: '#C8A2C8',
        line: {
          width: 2.5,
        },
      },
    },
    data: [this.trace1],
    layout: {
      title: 'Responsive to window size!',
      font: { size: 18 },
    },
    config: {
      responsive: true,
    },
  };

  trace6 = {
    x: [0, 1, 2, 3, 4, 5, 6],
    y: [1, 9, 4, 7, 5, 2, 4],
    mode: 'lines+markers',
    type: 'scatter',
  };
  Displaytheeditchartlink = {
    data: [this.trace6],
    layout: {
      title: 'Display the Edit Chart Link',
    },

    config: {
      showLink: true,
      plotlyServerURL: 'https://chart-studio.plotly.com',
    },
  };

  Customizetheeditchartlinktext = {
    data: [
      {
        z: [
          [0, 1, 2, 3, 4, 5, 6],
          [1, 9, 4, 7, 5, 2, 4],
          [2, 4, 2, 1, 6, 9, 3],
        ],
        type: 'heatmap',
      },
    ],
    layout: { title: 'Customize The Edit Chart Link Text' },
    config: {
      showLink: true,
      plotlyServerURL: 'https://chart-studio.plotly.com',
    },
  };

  Chartstudiomodebar = {
    data: [
      {
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie',
      },
    ],
    layout: {
      title: 'Show Edit in Chart Studio Modebar Button',
    },
    config: {
      showEditInChartStudio: true,
      plotlyServerURL: 'https://chart-studio.plotly.com',
    },
  };

  trace7 = {
    type: 'bar',
    x: [1, 2, 3, 4],
    y: [5, 10, 2, 8],
    marker: {
      color: '#C8A2C8',
      line: {
        width: 2.5,
      },
    },
  };
  Responsivetowindowsize = {
    data: [this.trace7],
    layout: {
      title: 'Responsive to window size!',
      font: { size: 18 },
    },
    config: { responsive: true },
  };

  // h

  trace = {
    x: ['INDIA', 'USA', 'RUSSIA'],
    y: [90, 40, 60],
    type: 'bar',
    name: 'Old Zoo',
  };
  trace9 = {
    x: ['INDIA', 'USA', 'RUSSIA'],
    y: [10, 80, 45],
    type: 'bar',
    name: 'New Zoo',
  };
  HideTheModeBar = {
    data: [this.trace, this.trace9],
    layout: {
      title: 'Hide the Modebar',
      showlegend: true,
    },
    config: {
      displayModeBar: false,
    },
  };

  private trace10 = {
    type: 'scatter',
    mode: 'lines',
    x: ['2018-01-01', '2018-08-31'],
    y: [10, 5],
    line: { color: '#17BECF' },
  };

  trace11 = {
    type: 'scatter',
    mode: 'lines',
    x: ['2018-01-01', '2018-08-31'],
    y: [3, 7],
    line: { color: '#7F7F7F' },
  };

  data10 = [this.trace10, this.trace11];

  layout10 = {
    title: 'Custom Locale',
  };



}
