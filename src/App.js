import { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import Search from './components/Search';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      temp: '',
      weather: '',
      typing: '',
      image: '',
      status: 'wait',
      api: '04a4336902f247d8cb2f967b426f2481',
    };
  }
  input = (event) => {
    this.setState({ typing: event.target.value });
  };
  faren = (numb) => {
    return Math.round(((numb - 273.15) * 9) / 5 + 32);
  };
  press = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=${this.state.api}&zip=${this.state.typing}`
    )
      .then((res) => res.json())
      .then((city) => {
        this.setState({
          zip: this.state.typing,
          weather: city.weather[0].description,
          temp: [
            this.faren(city.main.temp),
            this.faren(city.main.temp_min),
            this.faren(city.main.temp_max),
            city.main.humidity,
          ],
          image: city.weather[0].icon,
          status: 'fetch',
        });
      })
      .catch((err) => {
        this.setState({ status: 'error' });
        console.log('OOOPS: ' + err);
      });
  };

  render() {
    return (
      <div className="App">
        <Logo />
        <h1 className="f-subheadline pt0 "> Weather</h1>
        <Search className="ma3" input={this.input} press={this.press} />
        {(() => {
          switch (this.state.status) {
            case 'fetch':
              return (
                <Card
                  weather={this.state.weather}
                  temp={this.state.temp}
                  zip={this.state.zip}
                  image={this.state.image}
                />
              );
            case 'error':
              return (
                <h1 className="pa5">
                  Could not find Zipcode. <br></br>Please Try again.
                </h1>
              );
            case 'wait':
              return '';
          }
        })()}
      </div>
    );
  }
}

export default App;
