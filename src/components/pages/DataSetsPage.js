import React from 'react';
import './DataSetsPage.css'
import './pages.css'
import FractionChart from '../charts/FractionChart'
import TimeData from '../charts/data/TimeData'
import FractionData from '../charts/data/FractionData'
import { calculateBusiestHour, calculateAverage } from '../charts/calculation/BusyHour'
import ReactFileReader from 'react-file-reader';

const timeData = TimeData;
class DataSetsPage extends React.Component {
    constructor(props) {
        super(props);
        var busyHourInitial = calculateBusiestHour(FractionData.labels, FractionData.data)
        this.state = {
            data: FractionData,
            busyHour: busyHourInitial
        };
        this.handleSubmit = this.handleFiles.bind(this);
    }
    handleFiles = files => {
        const file = files.fileList[0]
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            var fileData = JSON.parse(evt.target.result);
            var busyHour = calculateBusiestHour(fileData.labels, fileData.data)
            this.setState({ data: fileData, busyHour: busyHour });
            // FractionChart.forceUpdate();
        }.bind(this)
        reader.onerror = function (evt) {
            alert("error reading file");
        }
    }
    render() {

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
                            <FractionChart data={this.state.data} busyHour={this.state.busyHour} />
                        </div>
                        <div className="offset-1 col-md-4">
                            <div className="row">
                                <h2><b>Minuta rozpoczęcia GNR</b></h2>
                            </div>
                            <div className="row">
                                <h2>{this.state.busyHour.startMinute}</h2>
                            </div>
                            <div className="row">
                                <h2><b>Minuta zakończenia GNR</b></h2>
                            </div>
                            <div className="row">
                                <h2>{this.state.busyHour.endMinute}</h2>
                            </div>
                            <div className="row">
                                <ReactFileReader handleFiles={this.handleFiles} fileTypes={[".json"]} base64={true} multipleFiles={false} >
                                    <button className='btn'>Upload</button>
                                </ReactFileReader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DataSetsPage
