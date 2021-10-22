import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Login, MovieSuggestions, SignUp, TvSuggestions } from './pages';
import { Header, PrivateRoute } from './components'

import './App.css';

const App = () => {
    return (
        <Router>
        <div className="App">
                <Header/>
                <div className="bg-container">
                    <>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route path='/login'>
                                <Login />
                            </Route>
                            <Route path='/signup'>
                                <SignUp />
                            </Route>
                            <PrivateRoute path='/movie-suggestions'>
                                <MovieSuggestions />
                            </PrivateRoute>
                            <PrivateRoute path='/tv-suggestions'>
                                <TvSuggestions />
                            </PrivateRoute>
                        </Switch>
                    </>
                </div>
        </div>
        </Router>
    );
}

export default App;