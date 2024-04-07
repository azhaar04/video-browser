import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import VideoDetails from "./components/video-detail.js";
import VideoList from "./components/video-list.js";
import axios from "axios";

class App extends Component {
  state = {
    searchTerm: "",
    data: {},
    videoId: "",
    title: "",
    description: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const getYoutubeVideos = () => {
      const BaseURL = "https://www.googleapis.com/youtube/v3/search";
      const key = 'AIzaSyAFFTKSFsNzFWGl7fodSnEKps9OcnWvyy8';
      const type = "video";
      const part = "snippet";
      const q = this.state.searchTerm;

      const URL = `${BaseURL}?type=${type}&part=${part}&key=${key}&q=${q}`;

      axios
        .get(URL)
        .then((response) =>
          this.setState({ ...this.state, data: response.data })
        )
        .catch((error) => console.log(error));
    };

    if (prevState.searchTerm !== this.state.searchTerm) getYoutubeVideos();
  }

  handleChange = (searchData) =>
    this.setState({ ...this.state, searchTerm: searchData });

 
  handleSelect = (videoId, title, description) =>{
    this.setState({
      ...this.state,
      videoId: videoId,
      title: title,
      description: description,
    });
  }
  
  
  getSearchData =()=> this.handleChange(document.getElementById("searchField").value)

  handleKeyPress=(event)=> { if(event.key=='Enter')this.getSearchData()};
 

  render() {
    return (
      <div className="container">
        
        <SearchBar getSearchData={this.getSearchData} handleKeyPress={this.handleKeyPress} />
        
        <div className="row">
          <VideoDetails
            videoId={this.state.videoId}
            title={this.state.title}
            description={this.state.description}
          />
          <VideoList
            items={this.state.data.items || []}
            handleSelect={this.handleSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
