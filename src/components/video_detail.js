import React from 'react'

const VideoDetail = ({video}) => {
    if(video){
        const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <div className="details">
                    <h6>{video.snippet.channelTitle}</h6>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
    else{
        return (
            <h4>Loading . . .</h4>
        );
    }
}

export default VideoDetail