import React from 'react'

import VideoListItem from './video_list_item'
import VideoDetail from './video_detail'


const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                video={video}
                key={video.etag}
                onVideoSelect = {props.onVideoSelect}    
            />
        );
    })
    return(
        <div className="col-md-4">
                <ul className="list-group">
                    {videoItems}
                </ul>
        </div>
    );
};

export default VideoList