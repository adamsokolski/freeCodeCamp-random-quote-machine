import React from "react";
import QuoteBox from "./QuoteBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fadeType: "fadeIn",
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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
    this.fetchApi();
  }

  render() {
    const { error, isLoaded, items, fadeType } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <QuoteBox firstReload={true} />;
    } else {
      return (
        <QuoteBox
          handleNewQuote={this.handleNewQuote}
          quote={items.quotes[0]}
          fadeType={fadeType}
        />
      );
    }
  }
}

export default App;
