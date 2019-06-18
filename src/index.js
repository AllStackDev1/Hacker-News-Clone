import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'Assets/css/sass/styles.scss';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://hacker-news.firebaseio.com/v0/topstories'
});

const rootEl = document.getElementById('root');

const render = () => {
  const MainApp = require('./App').default;
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MainApp />
    </ApolloProvider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <ApolloProvider client={client}>
        <NextApp />
      </ApolloProvider>,
      rootEl
    );
  });
}

render();
