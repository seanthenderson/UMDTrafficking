Highcharts.theme = {
    chart: {
		backgroundColor: '#252527'
    },
    title: {
        style: {
            color: 'white',
            font: ''
        }
    },
    subtitle: {
        style: {
            color: 'white',
            font: ''
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'white'
        },
        itemHoverStyle:{
            color: 'white'
        }   
    },	
	tooltip: {
		enabled: false
	},
	legend: {
		enabled: false
	},
	xAxis: {
		labels: {
			style: {
				color: '#B0B0B0'
			}
		}
	},
	yAxis: {
		labels: {
			style: {
				color: '#B0B0B0'
			}
		},
		gridLineColor: '#333'
	},
	plotOptions: {
		series: {
			animation: {
				duration: 2000
			}
		}
	},		
	series: [{
			color: '#606060',
			borderWidth: 0
	}]
};
