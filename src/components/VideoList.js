import React from "react";
import VideoItem from "../components/VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem
                video={video}
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
            />
        );
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
