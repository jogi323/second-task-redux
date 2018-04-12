import React, {Component} from 'react';

import QuotesForm from "./components/QuoteForm/QuotesForm";
import QuotesList from "./components/QuoteList/QuotesList";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes:[]
            // [{author:"Jogi",quote:"A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc.",liked:false,count:0},{author:"Chinna",quote:"A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc.",liked:false,count:0}]
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
            <div>
                <QuotesForm addQuote={this.addQuote} initialQuotes={this.state.quotes}/>
                <QuotesList quotes={this.state.quotes} deleteQuote = {this.removeQuote}/>
            </div>
        )
    }
}

export default App;