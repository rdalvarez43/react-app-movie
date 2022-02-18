// eslint-disable-next-line no-unused-vars
import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPages } from "./pages/LandingPages";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/"> 
                    <h1 className={styles.movieTitle} >Movies</h1>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId"><MovieDetails/></Route>
                    <Route path="/"><LandingPages/></Route>
                    {/* <Route path="/">404</Route> */}
                </Switch>
            </main>
        </Router>
    )
}


