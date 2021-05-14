import styled from 'styled-components';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContant from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News.jsx';
import { Route, Switch } from 'react-router-dom'
import Functions from './components/Functions/Functions';
import NewProfile from './components/NewProfile/NewProfile';



// Ведь вся бизнес логика должна быть передана в index.js 
//import {addPost, updatePostText} from './redux/state.js'; // Если просто импортировать без dafault, то нужно записывать в фигурных скобках.

const AppWrapper = styled.div`
display: grid; /**/

grid-template-areas: 
"header header header"
"nav contant functions";

grid-template-rows: .1fr 1fr;
grid-template-columns: 0.5fr 3fr;
grid-gap: 5px;
`;


const AppContainer = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`;


const App = (props) => {
  return (
    <AppContainer>

      <AppWrapper>
        <Header />
        <Nav state={props.state} />
        <Switch>\
          <Route exact path='/' component={News} />
          <Route path='/profile' render={() => <NewProfile state={props.state.ProfilePage} dispatch={props.dispatch}/>}
          />
          <Route path="/dialogs" render={() => <DialogsContainer state={props.state.DialogPage} dispatch={props.dispatch} />} />
          <Route path='/news' component={News} />
        </Switch>
        <Functions />
      </AppWrapper>

    </AppContainer>
  );
}



export default App;
