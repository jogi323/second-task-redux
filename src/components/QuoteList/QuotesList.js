import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { connect } from "react-redux";

import "./QuotesList.scss";
import { DeleteQuotes } from "../../Actions/QuoteActions";

class QuotesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: this.props.quotes
    };
  };

  liked = (index) => {
    this.state.list[index].liked = !this.state.list[index].liked;
    if(this.state.list[index].liked === true) {
      this.state.list[index].count++;
    }
    this.forceUpdate();
  };

  deleteQuote = (ind) => {
    this.state.list.splice(ind,1);
    this.forceUpdate();
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="quotes-list">
          <h1>List of Quotes:</h1>
          {this.props.quotes.map((item,index)=>{
            return (
              <section key={item.author}>
                <article>
                  <q>{item.quote}</q>
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
      </React.Fragment>
    )
  }
}

const getQuotes = (state) => {
  return  state;
}

export default connect(getQuotes,{DeleteQuotes})(QuotesList);
