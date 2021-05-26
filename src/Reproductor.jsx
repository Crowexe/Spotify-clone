import { useContext } from "react";
import { useAudio } from "react-use";
import { currentSongContext } from "./context/currentSongContext";
import styles from "./Reproductor.module.css";

const Reproductor = () => {
  const {
    currentSong: { previewURL, name },
    setCurrentSong,
  } = useContext(currentSongContext);

  const [audio, state, controls] = useAudio({
    src: previewURL,
    autoPlay: true,
  });

  console.log(name);

  if (!name.length) {
    return null;
  }

  return (
    <div className={styles.reproductor}>
      <div className={styles.buttons}>
        {audio}
        <h2>{name}</h2>
      </div>
      <div className="buttons">
        <button onClick={state.paused ? controls.play : controls.pause}>
            {state.paused ? <i class="fas fa-play"/> : <i class="fas fa-pause"/>}
        </button>     
        <button onClick={() => setCurrentSong({ previewURL: "", name: "" })}>
          <i class="fas fa-ban" />
        </button>              
          {state.time ? <h3>{state.time}</h3> : <h4>loading...</h4>}  
      </div>
      <div className={styles.buttons}>
        <input
          className="volume"
          type="range"
          value={state.volume}
          onChange={(e) => controls.volume(Number(e.target.value))}
          min="0.0"
          max="1.0"
          step="0.05"
        />        
      </div>
    </div>
  );
};

export default Reproductor;
