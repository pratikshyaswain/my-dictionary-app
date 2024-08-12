import React from "react";

const SecondSection = () => {
  return (
    <div>
      <div className="secondSection">
        <div className="para">
          <h2>Key Features</h2>
        </div>
        <div className="parent">
          <div className="first">
            <h3>Word Lookup</h3>
            <p>
              Quickly find definitions for any word you search for. Our app
              provides a comprehensive and up-to-date dictionary at your
              fingertips.
            </p>
          </div>
          <div className="first">
            <h3>Detailed Word Information</h3>
            <p>
              Explore detailed information about each word, including its
              phonetics, part of speech.
            </p>
          </div>
          <div className="first">
            <h3>Personalized Word Lists</h3>
            <p>
              Save words to custom lists for study or reference. Organize your
              vocabulary learning with our personalized word list feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
