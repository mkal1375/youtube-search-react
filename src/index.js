import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_TOKEN = 'AIzaSyCBlpeYe2z5-HHscV7Xw3Bs5kI4oZ0nxyI'

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null,
        }

        this.searchVideos('React js')
    }
    searchVideos(term){
        if(this.state.term != term){
            YTSearch({ key: API_TOKEN, term: term }, videos => {
                this.setState({
                    videos,
                    selectedVideo: videos[0]
                })
                // this.setState({videos: videos}) in ES5
            })
        }
    }
    render(){
        const videoSearch = _.debounce((term) => { this.searchVideos(term) }, 300)
        return (
            <div>
                <SearchBar
                    changeTerm={this.changeTerm}
                    onChangeTerm={changedTerm => {
                        videoSearch(changedTerm)
                    }}
                />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        videos={this.state.videos}
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    />
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('#root'))