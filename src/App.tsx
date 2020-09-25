import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import UsersPage from './containers/UsersPage';
import UserPage from './containers/UserPage';
import { Layout } from 'antd';

const apolloClient = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

function App() {
  const { Header, Content } = Layout;

  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Layout>
          <Header>
            <div className="container">
              <h3>
                <Link to="/">Posts App</Link>
              </h3>
            </div>
          </Header>
          <Content>
            <div className="container page-container">
              <Switch>
                <Route exact path="/">
                  <UsersPage />
                </Route>
                <Route path="/user/:userId">
                  <UserPage />
                </Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
