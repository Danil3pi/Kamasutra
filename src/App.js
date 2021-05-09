import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContant from './components/ProfileContant/ProfileContant';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import { BrowserRouter, Route } from 'react-router-dom'

// Ведь вся бизнес логика должна быть передана в index.js 
//import {addPost, updatePostText} from './redux/state.js'; // Если просто импортировать без dafault, то нужно записывать в фигурных скобках.

const App = (props) => {
  console.log('APP');
  return (
    <BrowserRouter>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Nav state={props.state} />
          <Route exact path='/' component={News} />
          <Route path='/profile' render={ () => <ProfileContant profileData={props.state.ProfilePage} 
                                                                dispatch={props.dispatch} />} 
          />
          <Route path="/dialogs" render={() => <Dialogs state={props.state.DialogPage} dispatch={props.dispatch} />} />
          <Route path='/news' component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
