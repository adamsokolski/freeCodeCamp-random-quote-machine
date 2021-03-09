import React from "react";
import "./QuoteBox.scss";
import "./QuoteBoxAnimations.scss";
import "./Buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
  /* const tweetLength = (quote.text + quote.author).length;
  let isDisabled;
  if (tweetLength > 280) {
    isDisabled = true;
  } else {
    isDisabled = false;
  } */

  return (
    <div id="quote-box">
      <div className="quote-indside-box">
        <p id="text" className={fadeType}>
          {quote.text}
        </p>
        <p id="author" className={fadeType}>
          - {quote.author}
        </p>
      </div>

      <div className="buttons-box">
        <button id="new-quote" className="new-quote" onClick={handleNewQuote}>
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
        <button
          className="tweet"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = intentTweet;
          }}
        >
          {" "}
          <a
            href={intentTweet}
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </button>
      </div>
    </div>
  );
}
