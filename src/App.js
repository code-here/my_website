import { HashRouter, Switch, Route } from 'react-router-dom';

import About from './pages/about/about.page';
import ProjectsPage from './pages/projects-page/projects-page.component';
import Footer from './components/footer/footer.componet';
import Header from './components/header/header.component';

import './App.css';

const App = () => (
  <HashRouter  basename="/">
    <div className="app">
      <Header />
        <Switch>
          <Route exact path="/"  component={ About } />
          <Route path="/projects" component={ ProjectsPage } />
        </Switch>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
