import axios from "axios";
import React, { useState, useRef } from "react";
import loadingImg from "./assets/loading.png";
const SearchForm = () => {
  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const audioRef = useRef(null);

  function fetchWord() {
    setLoading(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((response) => {
        setSearchWord(response.data);
        setError(null);
        setLoading(false);
        setWord("");
        console.log(response.data);
      })
      .catch((e) => {
        setError("Word not found, please try another word.");
        setLoading(false);
        setWord("");
        setSearchWord([]);
        console.log(e);
      });
  }

  const playAudio = (audioUrl) => {
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  };

  const getAudioUrl = () => {
    if (searchWord && searchWord[0] && searchWord[0].phonetics) {
      const phonetics = searchWord[0].phonetics.find(
        (p) => p.audio && p.audio !== ""
      );
      return phonetics ? phonetics.audio : null;
    }
    return null;
  };

  const audioUrl = getAudioUrl();

  return (
    <div className="searchForm">
      <div className="searchBody">
        <h2>Find the Definition of Any Word</h2>
        <input
          type="text"
          placeholder="Search word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <br />
        <button onClick={fetchWord}>Fetch</button>
        <br />
        {loading ? (
          <img src={loadingImg} alt="loading" width="10%" />
        ) : (
          <>
            {error && <p className="p">{error}</p>}
            {searchWord.length > 0 && (
              <div className="content">
                <h3>
                  <b>Word:</b> {searchWord[0].word}
                </h3>
                {searchWord[0].meanings.map((data, index) => (
                  <div key={index}>
                    <p>
                      <b>Part Of Speech:</b> {data.partOfSpeech}
                    </p>

                    {data.definitions.length > 0 && (
                      <p>
                        <b>Definition:</b> {data.definitions[0].definition}
                      </p>
                    )}
                  </div>
                ))}
                {searchWord[0].sourceUrls.length > 0 && (
                  <b>
                    See more:
                    <a
                      href={searchWord[0].sourceUrls[0]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {searchWord[0].sourceUrls[0]}
                    </a>
                  </b>
                )}
                <br />
                <br />
                {audioUrl ? (
                  <button onClick={() => playAudio(audioUrl)}>
                    Play Pronunciation
                  </button>
                ) : (
                  <p>No pronunciation available</p>
                )}
              </div>
            )}
          </>
        )}
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default SearchForm;
