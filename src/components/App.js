import React from "react";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
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

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onQuerySubmit} />
                <div>I have {this.state.videos.length} videos</div>
                {/* <VideoDetail /> */}
                {/* <VideoList /> */}
            </div>
        );
    }
}

export default App;
