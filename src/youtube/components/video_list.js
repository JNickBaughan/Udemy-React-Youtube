import React from 'react';
import VideoSummaryItem from './video_summary_item';

const VideoList = (props) => {

	const vids = props.videos.map((video) => {
		return (<VideoSummaryItem key={video.etag} video={video} onVideoSelect={() => { props.onVideoSelect(video) } }/>)
	});

	return (<ul className="col-md-4 list-group">
				{vids}
			</ul>);
};

export default VideoList;