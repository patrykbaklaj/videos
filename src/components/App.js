import React from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "../components/VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {

    state = {
        videos: []
    }

    onQuerySubmit = async query => {
        console.log(query);
        const response = await youtube.get("/search", {
            params: {
                q: query
            }
        });

        this.setState({
            videos: response.data.items
        });
    };

    componentDidUpdate(){
        console.log(this.state.videos);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onQuerySubmit} />
                <div>I have {this.state.videos.length} videos</div>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
