import React, { Component } from "react";

class VideoDetails extends Component {
  render() {
    const { videoId, title, description } = this.props;
    return (
      <div className="col-md-8 " style={{ marginTop: "20px" }}>
        <div className="embed-responsive embed-responsive-16y9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${videoId}`}
            style={{ height: "50vh", width: "45vw" }}
          />
        </div>
        <div
          id="details"
          
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            width:"45vw", 
          }}
        >
          <h3> {title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetails;

//<iframe width="1857" height="797" src="https://www.youtube.com/embed/JnX7Oc8LqD8" title="সূরা আর রহমান (الرحمن)  - মন জুড়ানো তেলাওয়াত | Zain Abu Kautsar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
