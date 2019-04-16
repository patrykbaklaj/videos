import React from "react";
import SearchBar from '../components/SearchBar'
import VideoDetail from '../components/VideoDetail'
import VideoList from '../components/VideoList'

class App extends React.Component {

    handleSampleCall(e){
        console.log(`I'm handling sample call from Search Bar ${e}`);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar sampleCall={this.handleSampleCall}/>
                <VideoDetail />
                <VideoList />
            </div>
        );
    }
}

export default App;
