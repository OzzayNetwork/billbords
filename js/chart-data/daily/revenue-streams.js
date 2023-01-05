//=======================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================
$(function () {

    // Create the chart
    $('#RevenueStreams2').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
		lang: {
        thousandsSep: ','
    },
        title: {
            text: 'Collection by Revenue stream',
            style: {
                color: '#a5a8ad'
            }
        },
        yAxis: {
            gridLineColor: '#197F07',
            gridLineWidth: 0.3,
            min: 0,
            title: {
                text: 'Total revenue collected'
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
            enabled: true
        },
		
		legend: {
        
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
    },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'white',
                        textShadow: '0 0 2px black, 0 0 2px black'
                    }
                },
                stacking: 'normal'
            }
        },
		
		 plotOptions: {
        column: {
            stacking: 'normal',
            grouping: false,
            dataLabels: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            },
//            point: {
//                events: {
//                    mouseOver: updateStackColor(0.2),
//                    mouseOut: updateStackColor(0)
//                }
//            }

        },
        series: {
            //connectNulls: true

            pointWidth: 15,
            borderWidth: 0,
            borderColor: 'black',


        },
    },
		
		 tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
//		useHTML: true,
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
            if (point.drilldown) {
				s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' +Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


    },

        series: [{
            //national bank collections by the months
            name: 'Annual Banners',
            data: [{

                name: '1st',
                y: 5,
                drilldown: 'parking-1st',
                //color: '#e7c500' //yellow
            }, {
                name: '2nd',
                y: 2,
                drilldown: 'parking-2nd',
                //color: '#e7c500' //yellow
            }, {
                name: '3rd',
                y: 4,
                drilldown: 'parking-3rd',
                //color: '#e7c500' //yellow
            }, {

                name: '4th',
                y: 5,
                drilldown: 'parking-4th',
                //color: '#e7c500' //yellow
            }, {
                name: '5th',
                y: 2,
                drilldown: 'parking-5th',
                //color: '#e7c500' //yellow
            }, {
                name: '6th',
                y: 4,
                drilldown: 'parking-6th',
                //color: '#e7c500' //yellow
            }, {

                name: '7th',
                y: 5,
                drilldown: 'parking-7th',
                //color: '#e7c500' //yellow
            }, {
                name: '8th',
                y: 12,
                drilldown: 'parking-8th',
                //color: '#e7c500' //yellow
            }, {
                name: '9th',
                y: 4,
                drilldown: 'parking-9th',
                //color: '#e7c500' //yellow
            }, {

                name: '10th',
                y: 15,
                drilldown: 'parking-10th',
                //color: '#e7c500' //yellow
            }, {
                name: '11th',
                y: 2,
                drilldown: 'parking-11th',
                //color: '#e7c500' //yellow
            }, {
                name: '12th',
                y: 4,
                drilldown: 'parking-12th',
                //color: '#e7c500' //yellow
            }]
            //end of parking fee collections
        }, {
            //land rate collections
            name: 'Bill boards ',
            data: [{
                name: '1st',
                y: 11,
                drilldown: 'lr-1st',
                //color: '#0aae8f' // blue
            }, {
                name: '2nd',
                y: 5,
                drilldown: 'lr-2nd',
                //color: '#0aae8f' // blue
            }, {
                name: '3rd',
                y: 2,
                drilldown: 'lr-3rd',
                //color: '#0aae8f' // blue
            }, {
                name: '4th',
                y: 1,
                drilldown: 'lr-4th',
                //color: '#0aae8f' // blue
            }, {
                name: '5th',
                y: 5,
                drilldown: 'lr-5th',
                //color: '#0aae8f' // blue
            }, {
                name: '6th',
                y: 21,
                drilldown: 'lr-6th',
                //color: '#0aae8f' // blue
            }, {
                name: '7th',
                y: 11,
                drilldown: 'lr-7th',
                //color: '#0aae8f' // blue
            }, {
                name: '8th',
                y: 5,
                drilldown: 'lr-8th',
                //color: '#0aae8f' // blue
            }, {
                name: '9th',
                y: 2,
                drilldown: 'lr-9th',
                //color: '#0aae8f' // blue
            }, {
                name: '10th',
                y: 1,
                drilldown: 'lr-10th',
                //color: '#0aae8f' // blue
            }, {
                name: '11th',
                y: 5,
                drilldown: 'lr-11th',
                //color: '#0aae8f' // blue
            }, {
                name: '12th',
                y: 2,
                drilldown: 'lr-12th',
                //color: '#0aae8f' // blue
            }]
            //end of landrate collections
        }, {
            //Illuminated Signs collections
            name: 'Illuminated Signs',
            data: [{
                name: '1st',
                y: 16,
                drilldown: 'sbp-1st',
                //color: '#0aae8f' // blue
            }, {
                name: '2nd',
                y: 15,
                drilldown: 'sbp-2nd',
                //color: '#0aae8f' // blue
            }, {
                name: '3rd',
                y: 3,
                drilldown: 'sbp-3rd',
                //color: '#0aae8f' // blue
            }, {
                name: '4th',
                y: 1,
                drilldown: 'sbp-4th',
                //color: '#0aae8f' // blue
            }, {
                name: '5th',
                y: 5,
                drilldown: 'sbp-5th',
                //color: '#0aae8f' // blue
            }, {
                name: '6th',
                y: 2,
                drilldown: 'sbp-6th',
                //color: '#0aae8f' // blue
            }, {
                name: '7th',
                y: 11,
                drilldown: 'sbp-7th',
                //color: '#0aae8f' // blue
            }, {
                name: '8th',
                y: 5,
                drilldown: 'sbp-8th',
                //color: '#0aae8f' // blue
            }, {
                name: '9th',
                y: 2,
                drilldown: 'sbp-9th',
                //color: '#0aae8f' // blue
            }, {
                name: '10th',
                y: 1,
                drilldown: 'sbp-10th',
                //color: '#0aae8f' // blue
            }, {
                name: '11th',
                y: 5,
                drilldown: 'sbp-11th',
                //color: '#0aae8f' // blue
            }, {
                name: '12th',
                y: 2,
                drilldown: 'sbp-12th',
                //color: '#0aae8f' // blue
            }]
            //end of Illuminated Signs collections
        },{
            //Lamp post advertisement Fees collections
            name: 'Lamp post advertisement',
            data: [{
                name: '1st',
                y: 11,
                drilldown: 'market-1st',
                //color: '#0aae8f' // blue
            }, {
                name: '2nd',
                y: 15,
                drilldown: 'market-2nd',
                //color: '#0aae8f' // blue
            }, {
                name: '3rd',
                y: 12,
                drilldown: 'market-3rd',
                //color: '#0aae8f' // blue
            }, {
                name: '4th',
                y: 19,
                drilldown: 'market-4th',
                //color: '#0aae8f' // blue
            }, {
                name: '5th',
                y: 15,
                drilldown: 'market-5th',
                //color: '#0aae8f' // blue
            }, {
                name: '6th',
                y: 21,
                drilldown: 'market-6th',
                //color: '#0aae8f' // blue
            }, {
                name: '7th',
                y: 11,
                drilldown: 'market-7th',
                //color: '#0aae8f' // blue
            }, {
                name: '8th',
                y: 5,
                drilldown: 'market-8th',
                //color: '#0aae8f' // blue
            }, {
                name: '9th',
                y: 2,
                drilldown: 'market-9th',
                //color: '#0aae8f' // blue
            }, {
                name: '10th',
                y: 13,
                drilldown: 'market-10th',
                //color: '#0aae8f' // blue
            }, {
                name: '11th',
                y: 5,
                drilldown: 'market-11th',
                //color: '#0aae8f' // blue
            }, {
                name: '12th',
                y: 2,
                drilldown: 'market-12th',
                //color: '#0aae8f' // blue
            }]
            //end of landrate collections
        },{
            //house and stall rents
            name: 'Landscape scheme & Tent Pitching',
            data: [{
                name: '1st',
                y: 1,
                drilldown: 'rent-1st',
                //color: '#0aae8f' // blue
            }, {
                name: '2nd',
                y: 15,
                drilldown: 'rent-2nd',
                //color: '#0aae8f' // blue
            }, {
                name: '3rd',
                y: 2,
                drilldown: 'rent-3rd',
                //color: '#0aae8f' // blue
            }, {
                name: '4th',
                y: 1,
                drilldown: 'rent-4th',
                //color: '#0aae8f' // blue
            }, {
                name: '5th',
                y: 15,
                drilldown: 'rent-5th',
                //color: '#0aae8f' // blue
            }, {
                name: '6th',
                y: 2,
                drilldown: 'rent-6th',
                //color: '#0aae8f' // blue
            }, {
                name: '7th',
                y: 11,
                drilldown: 'rent-7th',
                //color: '#0aae8f' // blue
            }, {
                name: '8th',
                y: 5,
                drilldown: 'rent-8th',
                //color: '#0aae8f' // blue
            }, {
                name: '9th',
                y: 7,
                drilldown: 'rent-9th',
                //color: '#0aae8f' // blue
            }, {
                name: '10th',
                y: 13,
                drilldown: 'rent-10th',
                //color: '#0aae8f' // blue
            }, {
                name: '11th',
                y: 5,
                drilldown: 'rent-11th',
                //color: '#0aae8f' // blue
            }, {
                name: '12th',
                y: 2,
                drilldown: 'rent-12th',
                //color: '#0aae8f' // blue
            }]
            //end of landrate collections
        },],
        drilldown: {
            activeDataLabelStyle: {
                color: 'white',
                textShadow: '0 0 2px black, 0 0 2px black'
            },
            series: [
                //parking collections by months and dates
                {
                    id: 'parking-1st',
                    name: 'Collection on the 1st 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'parking-feb',
                    name: 'Annual Banners collections in February 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'parking-mar',
                    name: 'Annual Banners collections in March 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'parking-apr',
                    name: 'Annual Banners collections in April 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'parking-may',
                    name: 'Annual Banners collections in May 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'parking-jun',
                    name: 'Annual Banners collections in June 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'parking-jul',
                    name: 'Annual Banners collections in July 2020',
                    data: [
                        ['1st Jul', 4],
                        ['2nd Jul', 2],
                        ['3rd Jul', 1],
                        ['4th Jul', 2],
                        ['5th Jul', 1]
                    ]
                }, {
                    id: 'parking-aug',
                    name: 'Annual Banners collections in Auust 2020',
                    data: [
                        ['1st aug', 4],
                        ['2nd aug', 2]
                    ]
                }, {
                    id: 'parking-sep',
                    name: 'Annual Banners collections in September 2020',
                    data: [
                        ['1st sep', 4],
                        ['2nd sep', 2],
                        ['3rd sep', 2]
                    ]
                }, {
                    id: 'parking-oct',
                    name: 'Annual Banners collections in October 2020',
                    data: [
                        ['1st Oct', 4],
                        ['2nd Oct', 2],
                        ['3rd Oct', 1],
                        ['4th Oct', 2],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'parking-nov',
                    name: 'Annual Banners collections in November 2020',
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 2]
                    ]
                }, {
                    id: 'parking-dec',
                    name: 'Annual Banners collections in December  2020',
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 2],
                        ['3rd Dec', 2]
                    ]
                },

                //end of parking collections by months and dates

                //start of land rates collections by months and dates
                {
                    id: 'lr-1st',
                    name: 'Bill boards  revenue collections for January 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-2nd',
                    name: 'Bill boards  revenue collections for February 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-3rd',
                    name: 'Bill boards  revenue collections for March 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-4th',
                    name: 'Bill boards  revenue collections for April 2020',
                    /*   stack: 1, */
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-5th',
                    name: 'Bill boards  revenue collections for May 2020',
                    /*  stack: 1, */
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-6th',
                    name: 'Bill boards  revenue collections for June 2020',
                    /* stack: 1, */
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-7th',
                    name: 'Bill boards  revenue collections for July 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-8th',
                    name: 'Bill boards  revenue collections for August 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-9th',
                    name: 'Bill boards  revenue collections for September 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-oct',
                    name: 'Bill boards  revenue collections for October 2020',
                    /*   stack: 1, */
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-nov',
                    name: 'Bill boards  revenue collections for November 2020',
                    /*  stack: 1, */
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'lr-dec',
                    name: 'Bill boards  revenue collections for December 2020',
                    /* stack: 1, */
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                },
				
				//start of Illuminated Signs daily collections
				 {
                    id: 'sbp-dec',
                    name: 'Illuminated Signs collections for December 2020',
                    /* stack: 1, */
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                },{
                    id: 'sbp-jan',
                    name: 'Illuminated Signs collections for January 2020',
                    data:  [  
                        ['12 AM - 1 AM ', 4],
                        ['1 AM - 2 AM', 5],
                        ['2 AM - 3 AM', 2],
                        ['3 AM - 4 AM', 6],
                        ['4 AM - 5 AM', 8],
                        ['5 AM - 6 AM', 9],
                        ['6 AM - 7 AM', 12],
                        ['7 AM - 8 AM', 52], 
                        ['8 AM - 9 AM', 21], 
                        ['9 AM - 10 AM', 30],
                        ['10 AM - 11 AM', 21],
                        ['11 AM - 12 PM', 25],
                        ['12 PM - 1 PM', 51],
                        ['1 PM - 2 PM', 21],
                        ['2 PM - 3 PM', 15],
                        ['3 PM - 4 PM', 21],
                        ['4 PM - 5 PM', 21],
                        ['5 PM - 6 PM', 21],
                        ['6 PM - 7 PM', 24],
                        ['7 PM - 8 PM', 68],
                        ['8 PM - 9 PM', 25],
                        ['9 PM - 10 PM', 54],
                        ['10 PM - 11 PM', 21],
                        ['11 PM - 12 AM', 51]
                
                    ]
                }, {
                    id: 'sbp-feb',
                    name: 'Illuminated Signs collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'sbp-mar',
                    name: 'Illuminated Signs collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'sbp-apr',
                    name: 'Bill boards  revenue collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'sbp-may',
                    name: 'Illuminated Signs collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'sbp-jun',
                    name: 'Illuminated Signs collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'sbp-jul',
                    name: 'Illuminated Signs collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'sbp-aug',
                    name: 'Illuminated Signs collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'sbp-sep',
                    name: 'Illuminated Signs collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'sbp-oct',
                    name: 'Illuminated Signs collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                },
				{
                    id: 'sbp-nov',
                    name: 'Illuminated Signs collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                },
				//end of Illuminated Signs collections
				
				//start of market fee collections
				{
                    id: 'market-jan',
                    name: 'Lamp post advertisement fee collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'market-feb',
                    name: 'Lamp post advertisement fee collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'market-mar',
                    name: 'Lamp post advertisement fee collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'market-apr',
                    name: 'Lamp post advertisement fee collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'market-may',
                    name: 'Lamp post advertisement fee collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'market-jun',
                    name: 'Lamp post advertisement fee collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'market-jul',
                    name: 'Lamp post advertisement fee collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'market-aug',
                    name: 'Lamp post advertisement fee collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'market-sep',
                    name: 'Lamp post advertisement fee collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'market-oct',
                    name: 'Lamp post advertisement fee collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'market-nov',
                    name: 'Lamp post advertisement fee collections for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'market-dec',
                    name: 'Lamp post advertisement fee collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },
				
				// end of market fees
				//start of house and stall rents
				{
                    id: 'rent-jan',
                    name: 'Landscape scheme & Tent Pitching for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'rent-feb',
                    name: 'Landscape scheme & Tent Pitching for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'rent-mar',
                    name: 'Landscape scheme & Tent Pitching for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'rent-apr',
                    name: 'Landscape scheme & Tent Pitching for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'rent-may',
                    name: 'Landscape scheme & Tent Pitching for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'rent-jun',
                    name: 'Landscape scheme & Tent Pitching for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'rent-jul',
                    name: 'Landscape scheme & Tent Pitching for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'rent-aug',
                    name: 'Landscape scheme & Tent Pitching for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'rent-sep',
                    name: 'Landscape scheme & Tent Pitching for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'rent-oct',
                    name: 'Landscape scheme & Tent Pitching for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'rent-nov',
                    name: 'Landscape scheme & Tent Pitching for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'rent-dec',
                    name: 'Landscape scheme & Tent Pitching for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },
				
            ]
        }
    })
});
//========================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================



Highcharts.chart('RevenueStreams', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent'

    },
    title: {
        text: 'Collection by Revenue stream',
        style: {
            color: '#a5a8ad'
        }
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Total revenue collected'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: '#a5a8ad'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
    },
    tooltip: {
        headerFormat: '<h3><strong class="mb-3" style="font-size: 20px !important;">{point.x}</strong></h3><br/><br/><br/>',
        /*  pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}', */
        pointFormat: '<strong style="color:{series.color}; font-weight:bold;">{series.name}</strong>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/><br/>',
		footerFormat	: 
                 '<table></tbody><tr style="border-top:1px solid black 0.5px; color:white;"><th>Total: </th>'
        		+'<td style="text-align:right"><b>KES {point.total:,.0f}</b></td></tr>'
            	+'</tbody></table>',
        shared: true,
        crosshairs: true


    },

    plotOptions: {
        column: {
            stacking: 'normal',
            grouping: false,
            dataLabels: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            },
            point: {
                events: {
                    mouseOver: updateStackColor(0.2),
                    mouseOut: updateStackColor(0)
                }
            }

        },
        series: {
            //connectNulls: true

            pointWidth: 10,
            borderWidth: 0,
            borderColor: 'black',


        },
    },
    series: [{
        name: 'Annual Banners Fees',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3]
    }, {
        name: 'Billboards and Advertisements',
        data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2]
    }, {
        name: 'Other incomes',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Lamp post advertisement Fees',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Single Business Permits',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Land Rates',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Plans and Inspections',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Fire Inspection Certificate',
        data: [2, 5, 3, 4, 3, 4, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'House and stall rents',
        data: [5, 3, 4, 3, 4, 4, 4, 2, 2, 5, 3, 4]
    }]
});
//		hover effect
function updateStackColor(alpha) {
    return function () {
        const x = this.x
        const color = Highcharts.color
        const colors = Highcharts.getOptions().colors

        this.series.chart.series.forEach((series, i) => {
            series.data.forEach(point => {
                const basePointColor = color(colors[i])

                point.update({
                    color: alpha === 0
                        ? basePointColor.get() // set original color
                        : point.x === x
                        ? basePointColor.brighten(-alpha).get() // brighten original color
                        : basePointColor.brighten(alpha).get() // dim orignal color
                }, false)
            })
        })

        this.series.chart.redraw(false)
    }
}


//		hover effect

