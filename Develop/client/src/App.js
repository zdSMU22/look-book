import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { ApolloServer};
import { createHttpLink };

const graphql = createHttpLink ({
  uri: '/graphql',
});

const jwtLink = ((_, { Headers}) => {
  const idToken = localStorage.getItem('id_token');

  return{
    header: {
      authorization: idToken,},
    }
  }

);
const client = new ApolloServer ({
  link: authlink.concat(createHttpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

