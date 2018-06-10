import React from 'react';
import './pages.css'
import ConfigurableChart from '../charts/ConfigurableChart'


class AdphMethodPage extends React.Component {
    render() {
        return (
            <div className="row text-content">
                <div className="offset-1 col-md-4 border-1">
                    <h1><b>ADPH</b></h1>
                    <h2><b>Average Daily Peak Hour</b></h2>
                    <br />
                    <p>
                        Godzina największego ruchu określana jest oddzielnie dla każdego dnia (inny czas dla różnych dni), a następnie obliczana jest średnia dla np. 10 dni
                    </p>
                    <p>
                        Do obliczeń można stosować rozpiętość czasu wynoszącą pełną godzinę (ADPH-F) lub kwadrans (ADPH-Q)
                    </p>
                </div>
                <div className="offset-2 col-md-3">
                    <div>
                        <ConfigurableChart defalutValue={true} startLine={3} endLine={4} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 60, 80, 85, 55, 50, 40] }} />
                    </div>
                    <div>
                        <ConfigurableChart defalutValue={true} startLine={2} endLine={3} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 80, 85, 60, 55, 50, 40] }} />
                    </div>
                    <div>
                        <ConfigurableChart defalutValue={true} startLine={4} endLine={5} data={{ labels: [1, 2, 3, 4, 5, 6, 7], data: [40, 60, 55, 80, 85, 50, 40] }} />
                    </div>
                </div>
            </div>
        );
    }
}
export default AdphMethodPage