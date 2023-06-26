import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import NotFound from "../component/NotFound";
import DefinitionSearch from "../component/DefinitionSearch";

export default function Definition() {
  const [word, setWord] = useState();
  const [word1, setWord1] = useState();
  const [word3, setWord3] = useState();
  const [word2, setWord2] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }

        if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong!");
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings[0].definitions[0].definition);
        setWord1(data[0].meanings[0].definitions[1].definition);
        setWord3(data[0].meanings[0].definitions[2].definition);
        setWord2(data[0].meanings[0].partOfSpeech);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  // no dependency array --> updates for any state change!
  // empty dependency array --> executes once
  // when data is declared --> executes when ever the data is updated.

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <br />
        <Link to="/dictionary">Search another</Link>
      </>
    );
  }

  if (error === true) {
    return (
      <>
        <p>SOmething went wrong, Try again!</p>
        <br />
        <Link to="/dictionary">Search another</Link>
      </>
    );
  }

  return (
    <>
      {word ? (
        <>
          <h1>Here are definitions:</h1>
          <br />
          {{ word } ? <p>{word}</p> : null}
          <br />
          {{ word1 } ? <p>{word1}</p> : null}
          <br />
          {{ word3 } ? <p>{word3}</p> : null}
          <br />
          <h3>Part Of Speech: </h3>
          <br />
          {{ word2 } ? <p>{word2}.</p> : null}
          <br />

          <p>Search Again:</p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}
