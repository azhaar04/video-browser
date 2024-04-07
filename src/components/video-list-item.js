import React, { Component } from "react";


class VideoListItem extends Component {
  render() {
    const { handleSelect, imgURL, videoId, title, description } = this.props;

    return (
      <li
        onClick={(event) => {
          handleSelect(videoId, title, description);
        }}
        className="list-group-item media videoListItem d-flex p-2"
      >
        <img
          className="mr-3 "
          style={{ height: "150px", width: "100px !important" }}
          src={imgURL}
        />
        <div style={{ marginLeft: "10px", fontSize: "15px" }}>{title}</div>
      </li>
    );
  }
}

export default VideoListItem;
