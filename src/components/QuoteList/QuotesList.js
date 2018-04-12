import React, { Component,Fragment } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { connect } from "react-redux";

import "./QuotesList.scss";
import { DeleteQuotes, LikeQuotes } from "../../actions/QuoteActions";

class QuotesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: this.props.quotes
    };
  };

  liked = (index) => {
    this.props.LikeQuotes(index);
  };

  deleteQuote = (ind) => {
    this.props.DeleteQuotes(ind);
  };
  
  render() {
    return (
      <Fragment>
        <div className="quotes-list">
          <h1>List of Quotes:</h1>
          {this.props.Quotes.Quotes.map((item,index)=>{
            return (
              <section key={item.author}>
                <article>
                  <blockquote>"{item.quote}"</blockquote>
                  <footer>- {item.author}</footer>
                  <div className="icons">
                  <span className="like" onClick={()=>this.liked(index)}>{item.liked?<FontAwesome.FaHeart/>:<FontAwesome.FaHeartO/>}{item.count>0?item.count:null}</span>
                    <span className="delete" onClick={()=>this.deleteQuote(index)}><FontAwesome.FaTrashO/></span>
                  </div>
                </article>
              </section>
            )
          })}
        </div>
      </Fragment>
    )
  }
}
const getQuotes = (state) => state;


export default connect(getQuotes,{DeleteQuotes,LikeQuotes})(QuotesList);
