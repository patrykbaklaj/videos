import React from "react";

class SearchBar extends React.Component {
    state = {
        query: ""
    };

    onInputChange = event => {
        this.setState({ query: event.target.value });
        console.log(this.state.query);
    };

    onFormSubmit = event => {
        event.preventDefault();

        // TODO:
        // call a callback from parent component
        this.props.onFormSubmit(this.state.query);
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.query}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
