import React from 'react';
import { Line } from 'react-chartjs-2';
import Data from '../../Data'
import ParticlesComponent from '../particles/particles'

const data = {
  labels: Data,
  datasets: [
    {
      label: 'My First dataset',
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
      data: Data
    }
  ]
};

class LineExample extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            <ParticlesComponent/>
              {/* <Line data={data} /> */}
        </div>
      </div>
    );
  }
};
export default LineExample