import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Search";
import Favorites from "./Favorites";
import styles from "./App.module.css";
import { CurrentSongProvider } from "./context/currentSongContext";
import Reproductor from "./Reproductor";
import { FavoritesProvider } from "./context/favoritesContext";

const App = () => {
  return (
    <FavoritesProvider>
      <CurrentSongProvider>
        <Router>
        <div><text className="topo"><i class="fab fa-spotify"/>Spotify</text></div>          
          <nav className={styles.nav}>
            <Link className={styles.link} to="/search">
              <i class="fas fa-search"/> Search
            </Link>
            <Link to="/favorites" className={styles.link}>
             <i class="fas fa-heart"/> Favorites
            </Link>          
          </nav>
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </Router>
        <Reproductor />
      </CurrentSongProvider>
    </FavoritesProvider>
  );
};

export default App;
