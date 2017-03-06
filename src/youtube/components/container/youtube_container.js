import React from 'react';
import SearchBar from '../search_bar';
import VideoList from '../video_list';
import VideoPlayer from '../video_player';
import YTSearch from 'youtube-api-search';

class youtube extends React.Component {

	constructor(props){
		super(props);

		this.state = { videos: [], term: '', key : 'AIzaSyAr9kRx1elGe1NaSE9mZxPpCk_CSRyVb_w', video : null };
		this.onFilterChange = this.onFilterChange.bind(this);
		this.onVideoSelect = this.onVideoSelect.bind(this);

		this.onFilterChange("French Bull dogs");

	}

	onFilterChange(term){
		//note: setting state here and then using state in the setState doesn't work, it's async
		YTSearch({ key: this.state.key, term : term }, (videos) => {
			this.setState({ videos });
			const video = videos.length > 0 ? videos[0] : null;
			this.setState({ videos, video, term });
		});
	}

	onVideoSelect(video){
		this.setState({ video });
	}
	
	render(){
		return (<div>
					Use inputs below to filter results
					<br></br>
					<SearchBar onFilterChange={this.onFilterChange} value={this.state.term} />
					<VideoPlayer video={this.state.video} />
					<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
				</div>)
	}



}

export default youtube;