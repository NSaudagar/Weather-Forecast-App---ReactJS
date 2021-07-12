import './App.css';
import WeatherForecast from './components/weatherforecast/weatherforecast';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast App</h1>
      </header>
      <main>
        <WeatherForecast></WeatherForecast>
      </main>
      <footer>
        Weather Forecast App created for Demo purpose to AM/NS
      </footer>
    </div>
  );
}

export default App;
