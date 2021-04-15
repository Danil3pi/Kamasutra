import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import ProfileContant from './components/ProfileContant';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <ProfileContant />
    </div>
  );
}



export default App;
