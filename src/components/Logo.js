import beach from './beach.png';
import Tilt from 'react-tilt';

function Logo() {
  return (
    <div className="pa0">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 0, width: 90 }}
      >
        <img className="w-auto h-ns" src={beach} alt="" />
      </Tilt>
    </div>
  );
}

export default Logo;
