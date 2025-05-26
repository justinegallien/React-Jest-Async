import React, { useEffect, useState } from "react";
import { getData } from "./CallApi";

export default function CatFacts({ fact }) {
  const [data, setData] = useState({});
  const [fact, setFact] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const catFact = await getData(
          "https://cors-anywhere.herokuapp.com/https://catfact.ninja/facts"
        );
        setData(catFact);
        console.log(catFact);
        setFact(data.fact);
      } catch (error) {
        console.error(error);
      }
    }
    load();
  }, [fact]);
  return (
    <div>
      <h1>{fact ? <p>{fact}</p> : <p>No cat fact found.</p>}</h1>
    </div>
  );
}
