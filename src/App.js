
import './App.css';
import { Header } from './components/Header/HeaderComponent';
import { Home } from './components/Home/HomeComponent';
import { Blogs } from './components/Blogs/BlogsComponent';

import  { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/blogs' component={Blogs} />
          <Redirect to='/'/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
