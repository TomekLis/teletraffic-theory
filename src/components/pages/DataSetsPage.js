import React from 'react';
import './DataSetsPage.css'
import './pages.css'
import FractionChart from '../charts/FractionChart'
import TimeData from '../charts/data/TimeData'
import FractionData from '../charts/data/FractionData'
import { calculateBusiestHour, calculateAverage } from '../charts/calculation/BusyHour'

const timeData = TimeData;
class DataSetsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            avg: 0
        };
    }

    render() {
        const busyHour = calculateBusiestHour(FractionData.labels, FractionData.data)
        return (
            <div className="row text-content centerized">
                <div className="col-md-12">
                    <div className="row">
                        <div className="offset-3 col-md-6">
                            <h1><b>Wyznaczanie GNR</b></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-md-5">
                            <FractionChart busyHour={busyHour} />
                        </div>
                        <div className="offset-1 col-md-4">
                            <div className="row">
                                <h2><b>Minuta rozpoczęcia GNR</b></h2>
                            </div>
                            <div className="row">
                                <h2>{busyHour.startMinute}</h2>
                            </div>
                            <div className="row">
                                <h2><b>Minuta zakończenia GNR</b></h2>
                            </div>
                            <div className="row">
                                <h2>{busyHour.endMinute}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DataSetsPage
