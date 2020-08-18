import React, { Component } from 'react';
import SuggestionInputSearch from 'suggestion-react-input-search';
import './search.css';



export default class Search extends Component {

    handleOnSubmit(term) {
        // Do whatever you need i.e. calling API
    }

    render() {

        const recentSearches = ['mobile phone', 'samsung', 'home made', 'home made 2', 'gadget 1', 'gadget 2',];
        const placeholder = 'Search here';

        return (
            <>
            <div className="search-dd-cm-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                        <div className="icon-dd-mbl">
                            <button><i className="fa fa-search"></i></button>
                        </div>
                        <SuggestionInputSearch
                            onSubmitFunction={this.handleOnSubmit}
                            recentSearches={recentSearches}
                            placeholder={placeholder}
                        />
                        

                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
