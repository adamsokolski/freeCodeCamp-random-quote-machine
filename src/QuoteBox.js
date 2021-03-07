import React from "react";

export default function QuoteBox({ quote, handleNewQuote }) {
  return (
    <div id="quoute-box">
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
      <button id="new-quote" onClick={handleNewQuote}>
        New quote
      </button>
      <a
        href="https://twitter.com/intent/tweet?text=Hello%20world"
        id="tweet-quote"
      >
        Tweet quote
      </a>
    </div>
  );
}
