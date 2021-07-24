import { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';

import './App.css';

const About = lazy(() => import('./pages/about/about.page'));
const ProjectsPage = lazy(() => import('./pages/projects-page/projects-page.component'))
const Footer = lazy(() => import('./components/footer/footer.componet'));
const Header = lazy(() => import('./components/header/header.component'));



const App = () => (
  <HashRouter  basename="/">
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <Header />
          <Switch>
            <Route exact path="/"  component={ About } />
            <Route path="/projects" component={ ProjectsPage } />
          </Switch>
        <Footer />
      </Suspense>
    </div>
  </HashRouter>
);

export default App;
