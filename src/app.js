import React, {Component} from 'react';

import QuotesForm from "./components/QuoteForm/QuotesForm";
import QuotesList from "./components/QuoteList/QuotesList";

class App extends Component {
    render() { 
        return (  
            <div>
                <QuotesForm/>
                <QuotesList/>
            </div>
        )
    }
}

export default App;