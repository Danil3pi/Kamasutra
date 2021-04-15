import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContant from './components/ProfileContant/ProfileContant';


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
