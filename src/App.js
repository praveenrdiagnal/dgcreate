import React from 'react';
import ReactTV from 'react-tv';

import Sidebar from './Sidebar.js'
import List from './List.js'
import Search from './Search.js'

import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation'

export default class ReactTVApp extends React.Component {
  constructor() {
    super();

    this.state = {
      active: null,
    }

    this.lists = ["Featured", "Science Fiction", "Continue Watching", "Trending", "Most Popular"];
  }

  changeFocusTo(index) {
    this.setState({active: index});
  }

  onBlurLists() {
    this.setState({active: null});
  }

  render() {
    return (
      <Navigation>
        <div id="container">
          <HorizontalList>
            <Sidebar/>
            <div class="mainbox">
              <VerticalList navDefault>
                <Search/>
                <VerticalList id="content" onBlur={() => this.onBlurLists()}>
                  {this.lists.map((list, i) =>
                    <List key={i} title={list} onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true} />
                  )}
                </VerticalList>
              </VerticalList>
            </div>
          </HorizontalList>
        </div>
      </Navigation>
    );
  }
}

// ReactTV.render(<ReactTVApp />, document.querySelector('#root'));
