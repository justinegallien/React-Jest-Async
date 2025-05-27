import React, { useEffect, useState } from "react";
import { getData } from "./CallApi";

export default function CatFacts({}) {
  const [data, setData] = useState({});
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      try {
        const catFact = await getData(
          "https://cors-anywhere.herokuapp.com/https://catfact.ninja/facts"
        );
        setData(catFact);
        console.log(catFact);
        if (catFact && catFact.data && catFact.data.length > 0) {
          setFact(catFact.data[0].fact);
          return data.data;
        } else {
          setFact("No cat fact found.");
        }
      } catch (error) {
        console.error("Error fetching cat fact:", error);
        setError("Failed to fetch cat fact. Please try again later.");
        setFact(null);
      } finally {
        setLoading(false); 
      }
    }
    load();
  }, [fact]);
  if (loading) {
    return (
      <div>
        <h2>Loading cat fact...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Cat Fact:</h1>
      <h2>{<p>{fact}</p>}</h2>
    </div>
  );
}
