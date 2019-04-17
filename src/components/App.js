import React from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "../components/VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    onQuerySubmit = async query => {
        const response = await youtube.get("/search", {
            params: {
                q: query
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    // For testing purpose only
    // componentDidUpdate(){
    //     console.log(this.state.videos);
    // }
    // -----------------

    componentDidMount() {
        const todayStr = new Date().toLocaleDateString().slice(0, 5);
        this.onQuerySubmit(todayStr);
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onQuerySubmit} />
                <div className="ui grid container">
                    <div className="ui row">
                        <div className="nine wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="seven wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
