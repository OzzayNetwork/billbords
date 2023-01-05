var pieColors = ['#009600', '#FFC400', '#D70000'];

// Build the chart
Highcharts.chart('status_piechart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: 'transparent'

    },
    title: {
        text: 'Plates Rental Statuses',
        style: {
          color: '#a5a8ad'
      }
        
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
        tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:16px; font-weight:800;">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:{point.color}>' + point.name + '</span> :<b>' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ( '+Math.round(point.percentage)+'% )' + '<br/></p>';
            if (point.drilldown) {
                s += '<p><br/> Click to view <b>' + point.name + '</b> Adverts </p>';
            }
            return s;
        },
        crosshairs: true


    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },

    yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Number of Adverts'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: '#a5a8ad'
            }
        }
    },
    xAxis: {
        type: 'category'
    },

    legend: {
        backgroundColor: 'transparent',
        labelFormat: '<span style="font-size:10px; color:white;">{name} <span style="font-weight:bold; font-size:10px; color:white;">{y}</span><span>'
    },
    plotOptions: {
        pie: {
            colors: pieColors,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false, 
                color: 'white',
            },
            showInLegend: true,
            
        }
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Rented',
            y: 320,
            colors: '#009600',
            drilldown: "Rented"
        }, {
            name: 'Available',
            y: 250,
            colors: '#FFC400',
            drilldown: "Available"
        }, {
            name: 'Damaged',
            y: 53,
            colors: '#D70000',
            drilldown: "Damaged"
        }]
    }],

    drilldown: {
        plotOptions: {
            borderWidth: 0,
            
        },
        series: [
          {
            type: 'column',
            name: "Rented",
            id: "Rented",
            data: [
              [
                "Buru",
                100 
              ],
              [
                "CBD",
                181 
              ],
              [
                "COMM",
                325 
              ],
              [
                "County Bus Station",
                41 
              ],
              [
                "Eastleigh",
                88
              ],
              [
                "HighRidge",
                56
              ],
              [
                "Hurlingham",
                45
              ],
              [
                "Ind. Area",
                49
              ],
              [
                "Karen",
                32
              ],
              [
                "Kariokor",
                29
              ],
              [
                "Kenyatta Market",
                79
              ],
              [
                "Kijabe",
                18
              ],
              [
                "Kilimani",
                13
              ],
              [
                "Kombo",
                16
              ],
              [
                "Langata Rd",
                13
              ],
              [
                "Lavington",
                11
              ],
              [
                "Muthaiga",
                17
              ],
              [
                "Nairobi West",
                26
              ]
            ]
          },
          {
            type: 'column',
            name: "Available",
            id: "Available",
            data: [
                [
                  "Buru",
                  100 
                ],
                [
                  "CBD",
                  181 
                ],
                [
                  "COMM",
                  325 
                ],
                [
                  "County Bus Station",
                  41 
                ],
                [
                  "Eastleigh",
                  88
                ],
                [
                  "HighRidge",
                  56
                ],
                [
                  "Hurlingham",
                  45
                ],
                [
                  "Ind. Area",
                  49
                ],
                [
                  "Karen",
                  32
                ],
                [
                  "Kariokor",
                  29
                ],
                [
                  "Kenyatta Market",
                  79
                ],
                [
                  "Kijabe",
                  18
                ],
                [
                  "Kilimani",
                  133
                ],
                [
                  "Kombo",
                  168
                ],
                [
                  "Langata Rd",
                  135
                ],
                [
                  "Lavington",
                  112
                ],
                [
                  "Muthaiga",
                  170
                ],
                [
                  "Nairobi West",
                  26
                ]
              ]
          },{
            type: 'column',
            name: "Damaged",
            id: "Damaged",
            data: [
                [
                  "Buru",
                  100 
                ],
                [
                  "CBD",
                  181 
                ],
                [
                  "COMM",
                  325 
                ],
                [
                  "County Bus Station",
                  41 
                ],
                [
                  "Eastleigh",
                  88
                ],
                [
                  "HighRidge",
                  56
                ],
                [
                  "Hurlingham",
                  45
                ],
                [
                  "Ind. Area",
                  49
                ],
                [
                  "Karen",
                  32
                ],
                [
                  "Kariokor",
                  29
                ],
                [
                  "Kenyatta Market",
                  79
                ],
                [
                  "Kijabe",
                  18
                ],
                [
                  "Kilimani",
                  13
                ],
                [
                  "Kombo",
                  500
                ],
                [
                  "Langata Rd",
                  401 
                ],
                [
                  "Lavington",
                  223 
                ],
                [
                  "Muthaiga",
                  196 
                ],
                [
                  "Nairobi West",
                  469 
                ]
              ]
          }
        ]
    }
});