import "../css/Quote.css";
import { useState, useEffect } from "react";

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchQuotes = async () => {
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          setQuotes([...data]);
        });
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    let tempQuote = quotes[randomNumber];
    setQuote(tempQuote);
  }, [quotes]);

  return (
    quote && (
      <div className="quote">
        <p className="quote__text">{quote.text}</p>
        <p className="quote__author">
          {quote.author ? `-${quote.author}` : ""}
        </p>
      </div>
    )
  );
}

export default Quote;
