import React, { Component } from 'react';
import { MENU_ITEM } from 'Constants/menuItems';
import { FOOTER_ITEM } from 'Constants/footerItems';
import TopStory from 'Components/TopStory';
import Menu from 'Components/Menu';
import Footer from 'Components/Footer';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

//Testing
// import hackerNewData from 'Data/topStories.json';
// const topStories = hackerNewData.data.hn.topStories;

const topStoriesFetch = gql`
  {
    hn {
      topStories(limit: 30) {
        id
        title
        url
        by {
          id
          about
        }
        time
        timeISO
        score
        descendants
      }
    }
  }
`;

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <a href="/#">
            <div className="logo" />
          </a>
          <div className="pagetop">
            <div className="brand-name">
              <a href="/#">Hacker News</a>
            </div>
            <Menu items={MENU_ITEM} />
          </div>
          <div className="login">
            <a href="/#">login</a>
          </div>
        </div>
        <Query query={topStoriesFetch}>
          {({ data, loading }) =>
            loading ? <span>Loading...</span> : <TopStory stories={data.hn.topStories} />
          }
        </Query>
        <Footer items={FOOTER_ITEM} />
      </div>
    );
  }
}

export default MainApp;
