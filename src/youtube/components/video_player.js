import React from 'react';

const VideoPlayer = ({video}) => {

if(!video){
	return (<p>Video Loading....</p>)
}

const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;


	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoPlayer;