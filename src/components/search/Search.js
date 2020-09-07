import React, { Component } from 'react';
import SuggestionInputSearch from 'suggestion-react-input-search';
import './search.css';

import classnames from "classnames";



export default class Search extends Component {

    // Search Option
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    // Search Option

    handleOnSubmit(term) {
        // Do whatever you need i.e. calling API
    }

    render() {

        const recentSearches = ['mobile phone', 'samsung', 'home made', 'home made 2', 'gadget 1', 'gadget 2',];
        const placeholder = 'Search here';

        return (
            <>
            <nav
                className={classnames("search-dd-cm-main-section", {
                "search-dd-cm-main-section-hidden": !this.state.visible
                })}
            >
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

            </nav>
            </>
        )
    }
}
