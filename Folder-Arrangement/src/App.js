import { BrowserRouter as Router , Route } from 'react-router-dom'
import { NavBar  } from './components';
 import { Home } from './pages/index'

const  App = () =>{
  return (
      <Router>
       {/* <NavBar /> */}
     <Home />
      </Router>
  );
}

export default App;
