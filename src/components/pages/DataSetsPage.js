import React from 'react';
import './DataSetsPage.css'
import './pages.css'
import FractionChart from '../charts/FractionChart'
import TimeData from '../charts/data/TimeData'
import FractionData from '../charts/data/FractionData'
import {calculateBusiestHour, calculateAverage} from '../charts/calculation/BusyHour'

const timeData = TimeData;
class DataSetsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            avg: 0
        };
    }
    
    render() {
        return (
            <div className="row text-content centerized">
                <div className="col-md-12">
                    <div className="row">
                        <div className="offset-3 col-md-6">
                            <h1><b>Zbiory danych</b></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-md-5">
                            <FractionChart />
                        </div>
                        <div className="offset-1 col-md-4">
                            <div className="row">
                                <h2><b>Średni czas trwania połączeń w ciągu badanej doby</b></h2>
                                <br/>
                                <h2>{calculateAverage(timeData)}[s]</h2>
                            </div>
                            <div className="row">
                                <h2><b>Liczba wywołań w ciągu doby</b></h2>
                                <br/>
                                <h2>{calculateAverage(timeData)}[s]</h2>
                                {calculateBusiestHour(FractionData.labels, FractionData.data)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DataSetsPage
