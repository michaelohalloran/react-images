import React, {Component} from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import keys from '../keys/keys';

class App extends Component {

    state = {
        term: ''
    }

    onSearchSubmit = term => {
        // console.log(term);
        let url = 'https://api.unsplash.com/search/photos';
        axios.get(url, {
            params: {query: term},
            headers: {
                Authorization: `Client-ID ${keys.accessKey}`,
            }
        })
            .then(res => console.log('res: ', res))
            .catch(err => console.log('Err: ', err));
        // this.setState({term});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;