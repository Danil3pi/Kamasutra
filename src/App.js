import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContant from './components/ProfileContant/ProfileContant';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Route path='/profile' component={ProfileContant} />
        <Route path='/dialogs' component={Dialogs} />
      </div>
    </BrowserRouter>
  );
}



export default App;
