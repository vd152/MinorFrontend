import React, { Component } from "react";
import CardWrap from "../Cards/CardWrap";
import "./main.css";
import { removeAuthToken } from "../../utils/localStorage";
import api from "../../apis/api"
class Main extends Component {
  state = {
    searchWord: "",
    searchResults: []
  };
  getSearchResults = () => {
    let url = '/music/search/?search=' + this.state.searchWord
    api.get(url).then(res=>{
      this.setState({searchResults: res.data.songs})
    }).catch(err=>{
      console.log(err)
    })
  }
  render() {
    return (
      <div className="main-container">
        <div className="top-nav">
          <div className="d-flex justify-content-between w-100">
            <p>Music Player</p>
            {this.props.search && (
              <input
                type="text"
                className="search-input"
                value={this.state.searchWord}
                onChange={(e) => {
                  this.setState({ searchWord: e.target.value },()=>this.getSearchResults());
                }}
              />
            )}
            <button
              className="btn text-white"
              onClick={(e) => {
                removeAuthToken();
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        </div>
        {this.props.search ? (
          <div className="content">
            <CardWrap
              title={"Search results for: " + this.state.searchWord}
              key="search"
              searchResults={this.state.searchResults}
            />
          </div>
        ) : (
          <div className="content">
            <CardWrap title="Popular songs" popular={true} key="popular"/>
            <CardWrap title="2016 Top Hits" year="2016" key="top-2016"/>
            <CardWrap title="2015 Top Hits" year="2015" key="top-2015"/>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
