import React from "react";
import { useSpring, animated } from "react-spring";
import * as easings from "d3-ease";

export default function QuoteAndAuthor({ quote, newQuote }) {
  let opacityNumber;
  if (newQuote) {
    opacityNumber = 0;
  } else {
    opacityNumber = 1;
  }
  const props = useSpring({
    from: { opacity: opacityNumber },
    to: { opacity: opacityNumber === 1 ? 0 : 1 },
    config: { duration: 1000, easing: easings.easeSinInOut },
  });
  return (
    <animated.div style={props}>
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
    </animated.div>
  );
}
