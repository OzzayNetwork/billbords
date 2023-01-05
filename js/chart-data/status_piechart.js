Highcharts.chart('item_clamped_chart', {

    chart: {
        type: 'item',
        backgroundColor: 'transparent'
    },

    title: {
        text: 'Plates Rental Statuses',
        style: {
          color: '#a5a8ad'
      }
        
    },

    subtitle: {
        text: null
    },

    accessibility: {
        announceNewData: {
          enabled: true
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
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 0,
        itemStyle: {
            color: '#FFFFFF',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: '#FFFFFF',
            font: '600 10px "Muli", sans-serif'
        },
    },
    legend: {
        backgroundColor: 'transparent',
        labelFormat: '<span style="font-size:10px; color:white;">{name} <span style="font-weight:bold; font-size:10px; color:white;">{y}</span><span>'
    },
    plotOptions:{
      
        series: {
             animation: {
              duration: 2000
              },
               dataLabels:{
                enabled: true, 
                color: 'white'
            },
            borderColor: '#303030',
        },
       
    },

    series: [{
      
        name: 'Adverts',
        data: [{
            name: 'Rented',
            y: 3201,
            colors: '#009600',
            drilldown: "Rented"
        },{
            name: 'Available',
            y: 2500,
            colors: '#FFC400',
            drilldown: "Available"

        },{
            name: 'Damaged',
            y: 53,
            colors: '#D70000',
            drilldown: "Damaged"

        }],
        
        // dataLabels: {
        //     enabled: true,
        //     format: '{point.label}'
        // },

        // Circular options
        center: ['50%', '88%'],
        size: '120%',
        startAngle: -100,
        endAngle: 100
    }],  
    
    drilldown: {
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
