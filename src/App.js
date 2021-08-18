
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Moviecard from './components/Moviecard'

import { Route, BrowserRouter as Router , Switch} from 'react-router-dom';
import Movielist from './components/Movielist';
import Description from './components/Description';

function App() {
  return (
    <Router>
    <div className="App">

    <Moviecard/>

     <div className="content">
      <Switch>
          <Route exact path='/Movie/:id'>

         <Description />
      </Route>


      </Switch>
      
  

     </div>
    
    </div>
    </Router>
  );
}

export default App;
