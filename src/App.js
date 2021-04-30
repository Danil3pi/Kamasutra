import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContant from './components/ProfileContant/ProfileContant';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import { BrowserRouter, Route } from 'react-router-dom'

import {addPost, updatePostText} from './redux/state.js'; // Если просто импортировать без dafault, то нужно записывать в фигурных скобках.

const App = (props) => {
  //debugger;
  
  return (
    <BrowserRouter>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Nav state={props.state}/>
          <Route exact path='/' component={News} />
          <Route path='/profile' render={ () => <ProfileContant profileData={props.state.ProfilePage} 
                                                                addPost={addPost} 
                                                                updatePostText={updatePostText} />} 
          />
          <Route path="/dialogs" render={() => <Dialogs state={props.state.DialogPage}/>} />
          <Route path='/news' component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
