import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://w7.pngwing.com/pngs/312/1018/png-transparent-orange-blue-and-black-logo-logo-circle-technology-circle-blue-text-information-technology.png"/>
      </header>
      
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

      <div className="contant">
       <img src="https://im0-tub-ru.yandex.net/i?id=60494d3454c70acb8b21bffbd150e5f2&n=13"/>
      </div>
    </div>
  );
}



export default App;
