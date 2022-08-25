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
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<SearchBooks />} 
            />
            <Route 
              path="/saved" 
              element={<SavedBooks />} 
            />
            <Route 
              path="*" 
              element={<h1>Wrong page!</h1>} 
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
