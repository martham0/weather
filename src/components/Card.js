import Tilt from 'react-tilt';

function Card({ weather, temp, zip, image }) {
  let url = `http://openweathermap.org/img/wn/${image}@2x.png`;
  return (
    <div className="ma3 ba br-pill shadow-5">
      <h1>{zip}</h1>

      <Tilt
        className="center "
        options={{ max: 30 }}
        style={{ height: 90, width: 90 }}
      >
        <img src={url} alt=""></img>
      </Tilt>

      <h3>
        Temp: {temp[0]}° | {weather}
      </h3>
      <h3>
        Min: {temp[1]}° | Max: {temp[2]}°
      </h3>

      <h3>Humidity: {temp[3]}%</h3>
    </div>
  );
}

export default Card;
