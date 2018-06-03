import React from 'react';
import './pages.css'
import ConfigurableChart from '../charts/ConfigurableChart'


class BusiestHourMethods extends React.Component {
    render() {
        return (
            <div className="row text-content">
                <div className="offset-1 col-md-4 border-1">
                    <h1><b>ADPH</b></h1>
                    <h2><b>Average Daily Peak Hour</b></h2>
                </div>
                <div className="offset-1 col-md-3">
                    <div>
                        <ConfigurableChart startLine={3} endLine={4} data={[40, 60, 80, 85, 55, 50, 40]} />
                    </div>
                    <div>
                        <ConfigurableChart startLine={2} endLine={3} data={[40, 80, 85, 60, 55, 50, 40]} />
                    </div>
                    <div>
                        <ConfigurableChart startLine={4} endLine={5} data={[40, 60, 55, 80, 85, 50, 40]} />
                    </div>
                </div>
            </div>
        );
    }
}
export default BusiestHourMethods