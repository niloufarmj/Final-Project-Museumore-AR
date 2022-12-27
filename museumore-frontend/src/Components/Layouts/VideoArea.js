import React from 'react';
import '../../Assets/CSS/video.css'

function VideoArea(params) {
    return(
        <video controls className='video'>
        <source src="/video-example.webm" type="video/webm" />
        <source src="/video-example.mp4" type="video/mp4"
        />
        Sorry, your browser doesn't support videos.
        </video>
        
    )
}

export default VideoArea;