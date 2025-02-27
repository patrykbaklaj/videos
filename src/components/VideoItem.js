import React from "react";
import "../components/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            className="video-item item"
            key={video.id.videoId}
            onClick={() => onVideoSelect(video)}
        >
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                {/* <div className="description">{video.snippet.description}</div> */}
            </div>
        </div>
    );
};

export default VideoItem;
