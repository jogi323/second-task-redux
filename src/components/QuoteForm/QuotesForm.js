import React, { Component ,Fragment} from 'react';
import { connect } from "react-redux";
import { AddQuotes } from "../../actions/QuoteActions";
import "./QuotesForm.scss";

class QuotesForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      author: "",
      quote: "",
      list: this.props.initialQuotes
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submit = (e) => {
    e.preventDefault();
    const data = {
      author: this.state.author,
      quote: this.state.quote,
      liked: false,
      count: 0
    };
    this.props.AddQuotes(data);
    this.setState({
      author: "",
      quote: ""
    })
  }

  render() {
    return (
      <Fragment>
      <section className="section">
        <form>
          <h1>Please enter your quote</h1>
          <div className="input-field">
            <label htmlFor="Author">Author: </label>
            <input type="text" name="author" placeholder="Author......." value={this.state.author} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="quote">Quote: </label>
            <textarea name="quote" placeholder="Please enter your quote........" rows="3" value={this.state.quote} onChange={this.handleChange} required></textarea>
          </div>
          <div className="submit">
            <button onClick={this.submit}>Add Quote</button>
          </div>
        </form>
      </section>
      </Fragment>
    )
  }
}

export default connect(null, {AddQuotes})(QuotesForm);
