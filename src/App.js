import React, { Suspense } from 'react';
import './App.css'
import Header from './components/Header/index.js';
import Login from './pages/Login';
import Home from './pages/Home/index.js'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Pepito from './context/StaticContext.js'
import Register from './pages/Register/index.js'
import {GifsContextProvider} from './context/GifsContext.js'
import {UserContextProvider} from './context/UserContext.js'
import ErrorPage from './pages/ErrorPage/index.js'
import { Link, Route, Switch } from "wouter"

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <Link to="/">
              <figure className="App-logo">
                <img alt="Giffy logo" src="/logo.png" />
              </figure>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
                <Route component={ErrorPage} path="/:rest*" />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}
