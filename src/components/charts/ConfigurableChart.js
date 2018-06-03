import React from 'react';
import { Line } from 'react-chartjs-2';



function drawLine(ctx, pointStart, chartInstance) {
    ctx.beginPath();
    ctx.strokeStyle = "grey";
    ctx.moveTo(pointStart, 0);
    ctx.lineTo(pointStart, chartInstance.scales["y-axis-0"].bottom);
    ctx.stroke();
}

class ConfigurableChart extends React.Component {

    render() {
        var startLine = this.props.startLine
        var endLine = this.props.endLine

        const plugins = [{
            beforeDraw: (chartInstance, easing) => {
                const ctx = chartInstance.ctx;
                var startIndex = chartInstance.data.labels.indexOf(startLine)
                var endIndex = chartInstance.data.labels.indexOf(endLine)
                if (startIndex != -1) {
                    var meta = undefined
                    var i = 0
                    while (meta===undefined || i == 500) {
                        meta = chartInstance.data.datasets[0]._meta[i] //why? after using more than one chart I had a problem that I Solved Like this 
                        i++;                   
                    }
                    var pointStart = meta.data[startIndex]._model.x
                    var pointEnd = meta.data[endIndex]._model.x
                    drawLine(ctx, pointStart, chartInstance)
                    drawLine(ctx, pointEnd, chartInstance)
                }
            }
        }];
        var chartData = this.props.data
        const data = {
            labels: [   1, 2, 3, 4, 5, 6, 7],
            datasets: [
                {
                    label: 'Intensywność ruchu',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    scaleSteps: 10,
                    data: chartData
                }
            ]
        };
        const options = {
            scales:{
                yAxes: [{
                    ticks: {
                        max: 90,
                    }
                }]
            }
        }
        return (
            <div>
                <Line data={data}
                    plugins={plugins}
                    options={options}
                />
            </div>
        );
    }
};
export default ConfigurableChart
