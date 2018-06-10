import React from 'react';
import './pages.css'
import ConfigurableChart from '../charts/ConfigurableChart'


class TcbhMethodPage extends React.Component {
    render() {
        return (
            <div className="row text-content">
                <div className="offset-1 col-md-4 border-1">
                    <h1><b>Tcbh</b></h1>
                    <h2><b>Time Consistent Busy Hour</b></h2>
                    <br />
                    <p>
                        Okres jednej godziny, taki sam dla każdego dnia, który zapewnia największy średni ruch w przeciągu np. 10 dni
                    </p>
                </div>
                <div className="offset-2 col-md-3">
                    <div>
                        <ConfigurableChart defalutValue={true} startLine={3} endLine={4} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 50, 80, 85, 55, 50, 40] }}defalutValue={true}  />
                    </div>
                    <div>
                        <ConfigurableChart defalutValue={true} startLine={3} endLine={4} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 80, 75, 65, 55, 50, 40] }}defalutValue={true}  />
                    </div>
                    <div>
                        <ConfigurableChart defalutValue={true} startLine={3} endLine={4} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 60, 75, 80, 85, 50, 40] }}defalutValue={true}  />
                    </div>
                </div>
            </div>
        );
    }
}
export default TcbhMethodPage