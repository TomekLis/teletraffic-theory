import React from 'react';
import './pages.css'
import './BusyHourMethodsPage.css'

class BusyHourMethodsPage extends React.Component {
    render() {
        return (
            <div className="row text-content centerize">
                <div className="col-md-12">
                    <div className="row text-section">
                        <div className="offset-3 col-md-6">
                            <h1><b>GNR</b></h1>
                            <h2><b>Godzina Największego Ruchu</b></h2>
                        </div>
                    </div>
                    <div className="row text-section">
                        <div className="offset-3 col-md-6">
                            Dostosowywanie sieci do największego maksymalnego natężenia ruchu, jakie może wystąpić jest niepraktyczne.
                            Dlatego opracowano metodę obliczania wartości szczytu ruchu, gdzie poszczególne maksymalne wartości
                            są uśrednione.
                        </div>
                    </div>
                    <div className="row text-section">
                        <div className="offset-3 col-md-6 border">
                            Okres trwania jednej godziny podczas
                            której natężenie ruchu jest największe
                            </div>
                    </div>
                    <div className="row text-section">
                        <div className="offset-3 col-md-6">
                            <ul>
                                <li>Z powodu różnych czynników, natężenie ruchu fluktuuje wokół jego średniej</li>
                                <li>W celu odpowiedniego przygotowania sieci na obłożenie rekomendowane są sposoby
                                    mierzenia natężenia ruchu
                                </li>
                                <li>
                                    Sposoby przedstawione są na kolejnych slajdach
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default BusyHourMethodsPage
