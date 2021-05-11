import styled from 'styled-components';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContant from './components/ProfileContant/ProfileContant';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import { Route, Switch } from 'react-router-dom'

// Ведь вся бизнес логика должна быть передана в index.js 
//import {addPost, updatePostText} from './redux/state.js'; // Если просто импортировать без dafault, то нужно записывать в фигурных скобках.

const AppWrapper = styled.div`
display: grid; /**/

grid-template-areas: 
"header header "
"nav contant";

grid-template-rows: .1fr 1fr;
grid-template-columns: 0.5fr 3fr;
grid-gap: 5px;
`;

const App = (props) => {
  return (
    <div className="container">
      <AppWrapper>
        <Header />
        <Nav state={props.state} />
        <Switch>\
          <Route exact path='/' component={News} />
          <Route path='/profile' render={() => <ProfileContant profileData={props.state.ProfilePage}
            dispatch={props.dispatch} />}
          />
          <Route path="/dialogs" render={() => <Dialogs state={props.state.DialogPage} dispatch={props.dispatch} />} />
          <Route path='/news' component={News} />
        </Switch>
        </AppWrapper>
    </div>
  );
}



export default App;
