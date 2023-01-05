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

                name: 'Jan',
                y: 5,
                drilldown: 'parking-jan',
                //color: '#e7c500' //yellow
            }, {
                name: 'Feb',
                y: 2,
                drilldown: 'parking-feb',
                //color: '#e7c500' //yellow
            }, {
                name: 'Mar',
                y: 4,
                drilldown: 'parking-mar',
                //color: '#e7c500' //yellow
            }, {

                name: 'Apr',
                y: 5,
                drilldown: 'parking-apr',
                //color: '#e7c500' //yellow
            }, {
                name: 'May',
                y: 2,
                drilldown: 'parking-may',
                //color: '#e7c500' //yellow
            }, {
                name: 'Jun',
                y: 4,
                drilldown: 'parking-jun',
                //color: '#e7c500' //yellow
            }, {

                name: 'Jul',
                y: 5,
                drilldown: 'parking-jul',
                //color: '#e7c500' //yellow
            }, {
                name: 'Aug',
                y: 12,
                drilldown: 'parking-aug',
                //color: '#e7c500' //yellow
            }, {
                name: 'Sep',
                y: 4,
                drilldown: 'parking-sep',
                //color: '#e7c500' //yellow
            }, {

                name: 'Oct',
                y: 15,
                drilldown: 'parking-oct',
                //color: '#e7c500' //yellow
            }, {
                name: 'Nov',
                y: 2,
                drilldown: 'parking-nov',
                //color: '#e7c500' //yellow
            }, {
                name: 'Dec',
                y: 4,
                drilldown: 'parking-dec',
                //color: '#e7c500' //yellow
            }]
            //end of parking fee collections
        }, {
            //land rate collections
            name: 'Bill boards ',
            data: [{
                name: 'Jan',
                y: 11,
                drilldown: 'lr-jan',
                //color: '#0aae8f' // blue
            }, {
                name: 'Feb',
                y: 5,
                drilldown: 'lr-feb',
                //color: '#0aae8f' // blue
            }, {
                name: 'Mar',
                y: 2,
                drilldown: 'lr-mar',
                //color: '#0aae8f' // blue
            }, {
                name: 'Apr',
                y: 1,
                drilldown: 'lr-apr',
                //color: '#0aae8f' // blue
            }, {
                name: 'May',
                y: 5,
                drilldown: 'lr-may',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jun',
                y: 21,
                drilldown: 'lr-jun',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jul',
                y: 11,
                drilldown: 'lr-jul',
                //color: '#0aae8f' // blue
            }, {
                name: 'Aug',
                y: 5,
                drilldown: 'lr-aug',
                //color: '#0aae8f' // blue
            }, {
                name: 'Sep',
                y: 2,
                drilldown: 'lr-sep',
                //color: '#0aae8f' // blue
            }, {
                name: 'Oct',
                y: 1,
                drilldown: 'lr-oct',
                //color: '#0aae8f' // blue
            }, {
                name: 'Nov',
                y: 5,
                drilldown: 'lr-nov',
                //color: '#0aae8f' // blue
            }, {
                name: 'Dec',
                y: 2,
                drilldown: 'lr-dec',
                //color: '#0aae8f' // blue
            }]
            //end of landrate collections
        }, {
            //Illuminated Signs collections
            name: 'Illuminated Signs',
            data: [{
                name: 'Jan',
                y: 16,
                drilldown: 'sbp-jan',
                //color: '#0aae8f' // blue
            }, {
                name: 'Feb',
                y: 15,
                drilldown: 'sbp-feb',
                //color: '#0aae8f' // blue
            }, {
                name: 'Mar',
                y: 3,
                drilldown: 'sbp-mar',
                //color: '#0aae8f' // blue
            }, {
                name: 'Apr',
                y: 1,
                drilldown: 'sbp-apr',
                //color: '#0aae8f' // blue
            }, {
                name: 'May',
                y: 5,
                drilldown: 'sbp-may',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jun',
                y: 2,
                drilldown: 'sbp-jun',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jul',
                y: 11,
                drilldown: 'sbp-jul',
                //color: '#0aae8f' // blue
            }, {
                name: 'Aug',
                y: 5,
                drilldown: 'sbp-aug',
                //color: '#0aae8f' // blue
            }, {
                name: 'Sep',
                y: 2,
                drilldown: 'sbp-sep',
                //color: '#0aae8f' // blue
            }, {
                name: 'Oct',
                y: 1,
                drilldown: 'sbp-oct',
                //color: '#0aae8f' // blue
            }, {
                name: 'Nov',
                y: 5,
                drilldown: 'sbp-nov',
                //color: '#0aae8f' // blue
            }, {
                name: 'Dec',
                y: 2,
                drilldown: 'sbp-dec',
                //color: '#0aae8f' // blue
            }]
            //end of Illuminated Signs collections
        },{
            //Lamp post advertisement Fees collections
            name: 'Lamp post advertisement',
            data: [{
                name: 'Jan',
                y: 11,
                drilldown: 'market-jan',
                //color: '#0aae8f' // blue
            }, {
                name: 'Feb',
                y: 15,
                drilldown: 'market-feb',
                //color: '#0aae8f' // blue
            }, {
                name: 'Mar',
                y: 12,
                drilldown: 'market-mar',
                //color: '#0aae8f' // blue
            }, {
                name: 'Apr',
                y: 19,
                drilldown: 'market-apr',
                //color: '#0aae8f' // blue
            }, {
                name: 'May',
                y: 15,
                drilldown: 'market-may',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jun',
                y: 21,
                drilldown: 'market-jun',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jul',
                y: 11,
                drilldown: 'market-jul',
                //color: '#0aae8f' // blue
            }, {
                name: 'Aug',
                y: 5,
                drilldown: 'market-aug',
                //color: '#0aae8f' // blue
            }, {
                name: 'Sep',
                y: 2,
                drilldown: 'market-sep',
                //color: '#0aae8f' // blue
            }, {
                name: 'Oct',
                y: 13,
                drilldown: 'market-oct',
                //color: '#0aae8f' // blue
            }, {
                name: 'Nov',
                y: 5,
                drilldown: 'market-nov',
                //color: '#0aae8f' // blue
            }, {
                name: 'Dec',
                y: 2,
                drilldown: 'market-dec',
                //color: '#0aae8f' // blue
            }]
            //end of landrate collections
        },{
            //house and stall rents
            name: 'Landscape scheme & Tent Pitching',
            data: [{
                name: 'Jan',
                y: 1,
                drilldown: 'rent-jan',
                //color: '#0aae8f' // blue
            }, {
                name: 'Feb',
                y: 15,
                drilldown: 'rent-feb',
                //color: '#0aae8f' // blue
            }, {
                name: 'Mar',
                y: 2,
                drilldown: 'rent-mar',
                //color: '#0aae8f' // blue
            }, {
                name: 'Apr',
                y: 1,
                drilldown: 'rent-apr',
                //color: '#0aae8f' // blue
            }, {
                name: 'May',
                y: 15,
                drilldown: 'rent-may',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jun',
                y: 2,
                drilldown: 'rent-jun',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jul',
                y: 11,
                drilldown: 'rent-jul',
                //color: '#0aae8f' // blue
            }, {
                name: 'Aug',
                y: 5,
                drilldown: 'rent-aug',
                //color: '#0aae8f' // blue
            }, {
                name: 'Sep',
                y: 7,
                drilldown: 'rent-sep',
                //color: '#0aae8f' // blue
            }, {
                name: 'Oct',
                y: 13,
                drilldown: 'rent-oct',
                //color: '#0aae8f' // blue
            }, {
                name: 'Nov',
                y: 5,
                drilldown: 'rent-nov',
                //color: '#0aae8f' // blue
            }, {
                name: 'Dec',
                y: 2,
                drilldown: 'rent-dec',
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
                    id: 'parking-jan',
                    name: 'Annual Banners collections in January 2020',
                    data: [
                        ['1st Jan', 4],
                        ['2nd Jan', 2],
                        ['3rd Jan', 1],
                        ['4th Jan', 2],
                        ['5th Jan', 1]
                    ]
                }, {
                    id: 'parking-feb',
                    name: 'Annual Banners collections in February 2020',
                    data: [
                        ['1st Feb', 4],
                        ['2nd Feb', 2]
                    ]
                }, {
                    id: 'parking-mar',
                    name: 'Annual Banners collections in March 2020',
                    data: [
                        ['1st Mar', 4],
                        ['2nd Mar', 2],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'parking-apr',
                    name: 'Annual Banners collections in April 2020',
                    data: [
                        ['1st Apr', 4],
                        ['2nd Apr', 2],
                        ['3rd Apr', 1],
                        ['4th Apr', 2],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'parking-may',
                    name: 'Annual Banners collections in May 2020',
                    data: [
                        ['1st May', 4],
                        ['2nd May', 2]
                    ]
                }, {
                    id: 'parking-jun',
                    name: 'Annual Banners collections in June 2020',
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 2],
                        ['3rd Jun', 2]
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
                    id: 'lr-jan',
                    name: 'Bill boards  revenue collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'lr-feb',
                    name: 'Bill boards  revenue collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'lr-mar',
                    name: 'Bill boards  revenue collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'lr-apr',
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
                    id: 'lr-may',
                    name: 'Bill boards  revenue collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'lr-jun',
                    name: 'Bill boards  revenue collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'lr-jul',
                    name: 'Bill boards  revenue collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'lr-aug',
                    name: 'Bill boards  revenue collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'lr-sep',
                    name: 'Bill boards  revenue collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'lr-oct',
                    name: 'Bill boards  revenue collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'lr-nov',
                    name: 'Bill boards  revenue collections for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'lr-dec',
                    name: 'Bill boards  revenue collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },
				
				//start of Illuminated Signs daily collections
				 {
                    id: 'sbp-dec',
                    name: 'Illuminated Signs collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },{
                    id: 'sbp-jan',
                    name: 'Illuminated Signs collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
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

