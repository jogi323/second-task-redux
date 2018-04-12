import React, {Component,Fragment} from 'react';

import QuotesForm from "./components/QuoteForm/QuotesForm";
import QuotesList from "./components/QuoteList/QuotesList";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes:[]
        };
    }
    addQuote = (data) => {
        this.setState({
            quotes: data
        });
    };

    removeQuote = (index) => {
        this.state.quotes.splice(index,1);
        this.forceUpdate();
    };

    render() { 
        return (
            <Fragment>  
                <QuotesForm addQuote={this.addQuote} initialQuotes={this.state.quotes}/>
                <QuotesList quotes={this.state.quotes} deleteQuote = {this.removeQuote}/>
            </Fragment>
        )
    }
}

export default App;