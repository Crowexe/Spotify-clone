import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.css";
import Song from "./Song";

const Search = () => {
  const queryRef = useRef(null);
  const [songs, setSongs] = useState([]);

  const search = async () => {
    setSongs([]);
    const queryString = queryRef.current.value;
    let baseURL = "https://api.napster.com";
    let key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
    let query = `query=${queryString}`;
    let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;

    let response = await fetch(url);
    let json = await response.json();
    setSongs(json.search.data.tracks.map((rsong) => ({ ...rsong})));
  };

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  return (
    <div className={styles.container}>
        <input ref={queryRef} className={styles.input} placeholder="Search an artist or song" />
        <button className={styles.btn} onClick={search}>
          <i class="fas fa-search"/>
        </button>
        <section className={styles.songsContainer}>
        {songs.map((song, index) => (
          <Song key={index} song={song} />
        ))}
      </section>
    </div>
  );
};



export default Search;
