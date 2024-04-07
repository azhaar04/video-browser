import React, { Component } from "react";
import VideoListItem from "./video-list-item";

class VideoList extends Component {
  render() {
    const { items, handleSelect } = this.props;
    return (
      <ul className="list-group col-md-4" style={{ marginTop: "20px" }}>
        {items.map((item ,index) => {
          console.log(item);
          return (
            <VideoListItem
              key={index}
              imgURL={item.snippet.thumbnails.high.url}
              videoId={item.id.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
              handleSelect={handleSelect}
            />
          );
        })}

        {/* <VideoListItem
        src="https://i.ytimg.com/vi/ng74uaBTC4s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCA-5RB5UvHgDep6yDewds7iT45lA"
        title="Shorer duita gan"
      /> */}
      </ul>
    );
  }
}

export default VideoList;
