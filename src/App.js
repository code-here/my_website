import { HashRouter, Switch, Route } from 'react-router-dom';

import About from './pages/about/about.page';
import Projects from './pages/projects/projects.component';
import Footer from './components/footer/footer.componet';
import Header from './components/header/header.component';

import './App.css';

const App = () => (
    <div className="app">
      <HashRouter  basename="/">
      <Header />
        <Switch>
          <Route exact path="/"  component={ About } />
          <Route path="/projects" component={ Projects } />
        </Switch>
      <Footer />
      </HashRouter>
    </div>
);

export default App;
