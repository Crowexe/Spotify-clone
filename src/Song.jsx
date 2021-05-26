import { useContext } from "react";
import { currentSongContext } from "./context/currentSongContext";
import { useFavorites } from "./context/favoritesContext";
import styles from "./Song.module.css";

const Song = ({ song }) => {
  const { setCurrentSong } = useContext(currentSongContext);
  const { favoriteSongs, setFavoriteSongs } = useFavorites();

  const addToFavoriteSongs = () => {
    if (!favoriteSongs.includes(song)) {
      setFavoriteSongs([...favoriteSongs, song]);
    }
  };

  const removeFromFavorites = () => {
    setFavoriteSongs(favoriteSongs.filter((fs) => fs.id !== song.id));
  };

  return (
    <section className={styles.song}>  
        <button id="play" onClick={() => setCurrentSong(song)}><i class="fas fa-play"/></button>
        <h3>{song.name}</h3>
        <section id="options">       
          <button className="fav" onClick={addToFavoriteSongs}><i class="fas fa-heart"/></button>
          <button className="remove" onClick={removeFromFavorites}><i class="fas fa-trash-alt"/></button>
        </section>        
    </section>
  );
};

export default Song;
