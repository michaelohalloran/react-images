import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

    state = {
        imgs: []
    }

    onSearchSubmit = async term => {
        // console.log(term);
        let endURL = '/search/photos';
        const response = await unsplash.get(endURL, {
            params: {query: term},
        });
        const imgs = await response.data.results;
        this.setState({
            imgs
        });
    }

    render() {

        const {imgs} = this.state;

        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList imgs={imgs}/>
            </div>
        );
    }
}

export default App;