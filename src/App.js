import React from "react";
import QuoteBox from "./QuoteBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      newQuote: true,
      disableButton: false,
      items: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  fetchApi() {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleNewQuote() {
    // Start fading out quote and disable button
    this.setState((state) => ({
      newQuote: !state.newQuote,
      disableButton: true,
    }));
    setTimeout(() => {
      this.fetchApi();
    }, 1000);

    // Start fading in and enable button
    setTimeout(() => {
      this.setState((state) => ({
        newQuote: !state.newQuote,
        disableButton: false,
      }));
    }, 1100);
  }

  render() {
    const { error, isLoaded, items, newQuote, disableButton } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div></div>;
    } else {
      return (
        <QuoteBox
          handleNewQuote={this.handleNewQuote}
          quote={items.quotes[0]}
          newQuote={newQuote}
          disableButton={disableButton}
        />
      );
    }
  }
}

export default App;
