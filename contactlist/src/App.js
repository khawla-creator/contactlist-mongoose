import { Route } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact/AddContact';
// import EditContact from './Components/EditContact/EditContact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Others from './Components/Others/Others';

function App() {  
  return (
    <div className="App">
              <Header/>

              <Route exact path='/'>
              <Home/>
              </Route>

              <Route path= '(/addContact|/editcontact)'>
                <AddContact/>
              </Route>
              
              {/* <Route path='/editcontact'>
                <EditContact/>
              </Route> */}

              <Route path='/others'>
                <Others/>
              </Route>

    </div>
  );
}

export default App;
