import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.props.enterHandler(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(
            { type: event.target.value },
            () => this.props.enterHandler(this.state.search, this.state.type)
        );
    }

    render() {
        return (
            <div className="row" onClick={() => this.props.enterHandler(this.state.search, this.state.type)}>
                <div className="input-field col s12" >
                    <input
                    className='grey-text'
                    type="text"
                    value={this.state.search}
                    onChange={event => this.setState({ search: event.target.value })}
                    onKeyUp={this.handleEnter}
                    placeholder="Search movie" />

                </div>
                <p>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                            className="with-gap"
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
                            className="with-gap"
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                            className="with-gap"
                        />
                        <span>Series only</span>
                    </label>
                </p>
            </div>
        );
    }
}

export default Search;