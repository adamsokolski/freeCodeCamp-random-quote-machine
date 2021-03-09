import React from "react";
import "./QuoteBox.scss";
import "./Buttons.scss";
import QuoteAndAuthor from "./QuoteAndAuthor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function QuoteBox({
  quote,
  handleNewQuote,
  newQuote,
  disableButton,
}) {
  const intentTweet = `https://twitter.com/intent/tweet?text="${quote.text}" ${quote.author}`;

  return (
    <div id="quote-box">
      <QuoteAndAuthor quote={quote} newQuote={newQuote} />

      <div className="buttons-box">
        <button
          id="new-quote"
          className="new-quote"
          onClick={handleNewQuote}
          disabled={disableButton}
        >
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
