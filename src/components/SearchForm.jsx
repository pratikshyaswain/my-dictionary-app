import axios from "axios";
import React, { useState, useRef } from "react";

const SearchForm = () => {
  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState([]); // Initialize as null
  const [error, setError] = useState(null);
  const audioRef = useRef(null); // Ref to the audio element

  function fetchWord() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((response) => {
        setSearchWord(response.data);
        setError(null); // Clear any previous error
        setWord("");
        console.log(response.data);
      })
      .catch((e) => {
        setError("Word not found, please try another word.");
        setWord("");
        setSearchWord([]); // Clear previous successful result
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
          placeholder="search word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <br />
        <button onClick={fetchWord}>Fetch</button>
        {error && <p>{error}</p>}
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
                  {" "}
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
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default SearchForm;
