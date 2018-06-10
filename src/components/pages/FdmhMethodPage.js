import React from 'react';
import './pages.css'
import ConfigurableChart from '../charts/ConfigurableChart'


class FdmhMethodPage extends React.Component {
    render() {
        return (
            <div className="row text-content">
                <div className="offset-1 col-md-4 border-1">
                    <h1><b>FDMH</b></h1>
                    <h2><b> Fixed Daily Measurement Hour</b></h2>
                    <br />
                    <p>
                        Predefiniowana godzina pomiaru (np. 9,30-10,30) zmierzony ruch jest uśredniany w ciągu np. 10 dni
                    </p>
                </div>
                <div className="offset-2 col-md-3">
                    <div>
                        {}
                        <ConfigurableChart defalutValue={true} startLine={2} endLine={3} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 60, 80, 85, 55, 50, 40] }} />
                    </div>
                    <div>
                        <ConfigurableChart defalutValue={true} startLine={2} endLine={3} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 80, 85, 60, 55, 50, 40] }} />
                    </div>
                    <div>
                        <ConfigurableChart defalutValue={true} startLine={2} endLine={3} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 60, 55, 80, 85, 50, 40] }} />
                    </div>
                </div>
                </div>
                );
            }
        }
export default FdmhMethodPage