import React from 'react';
import './pages.css'

class TitlePage extends React.Component {
    render() {
        return (
            <div className="row text-content">
                <div className="offset-1 col-md-5 border-1">
                    <h1><b>Intensywność ruchu</b></h1>
                    <p>
                        W sieciach telekomunikacyjnych natężenie ruchu jest miarą przeciętnego obłożenia serwera lub zasobu w określonym czasie, zwykle w godzinach pracy. Mierzone jest w jednostkach ruchu (erlangach) i definiowane jako stosunek czasu, w którym obiekt jest łącznie zajęty, do momentu, w którym obiekt ten jest dostępny dla obłożenia.
                    </p>
                </div>
                <div className="offset-1 col-md-3">
                    <h2><b>i = λ·T</b></h2>
                    <p>
                        gdzie: <br/>
                        <b>λ</b> - liczba połączeń w określonym czasie. <br/>
                        <b>T</b> - średni czas połączenia <br/>
                    </p>
                    <h3>
                        LUB
                    </h3>
                    <h2> <b>i = a<sup>L</sup>&frasl;<sub>R</sub></b></h2>
                    <p>
                        gdzie:<br/>
                        <b>a</b> - średnia szybkość otrzymywania pakietów (np. w pakietach na sekundę)<br/>
                        <b>L</b> - średnia długość pakietu (na przykład w bitach)<br/>
                        <b>R</b> - jest prędkość transmisji (na przykład bitów na sekundę)<br/>
                    </p>
                </div>
            </div>
        );
    }
}
export default TitlePage
