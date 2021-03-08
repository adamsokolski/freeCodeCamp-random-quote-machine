import React from "react";
import "./QuoteBox.scss";
import "./QuoteBoxAnimations.scss";

export default function QuoteBox({
  quote,
  handleNewQuote,
  fadeType,
  firstReload,
}) {
  if (firstReload) {
    return <div id="quote-box"></div>;
  }
  const intentTweet = `https://twitter.com/intent/tweet?text="${quote.text}" ${quote.author}`;
  const tweetLength = (quote.text + quote.author).length;
  let isDisabled;
  if (tweetLength > 280) {
    isDisabled = true;
  } else {
    isDisabled = false;
  }

  return (
    <div id="quote-box">
      <p id="text" className={fadeType}>
        {quote.text}
      </p>
      <p id="author" className={fadeType}>
        - {quote.author}
      </p>
      <button id="new-quote" onClick={handleNewQuote}>
        New quote
      </button>
      <button disabled={isDisabled}>
        <a href={intentTweet} id="tweet-quote" target="_blank" rel="noreferrer">
          Tweet quote
        </a>
      </button>
    </div>
  );
}
