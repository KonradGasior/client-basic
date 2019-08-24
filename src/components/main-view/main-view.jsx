import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';

import "./main-view.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class MainView extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      showRegister: null
    };
  }

  // One of the "hooks" available in a React Component
  componentDidMount() {
    axios.get('https://myflixapi123.herokuapp.com/movies')
      .then(response => {
        // Assign the result to the state
        console.log(response.data);
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  handleToMain() {
    this.setState({
      selectedMovie: null
    });
  };

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onShowRegister(showRegister) {
    this.setState({
      showRegister
    });
  }

  render() {
    const { movies, selectedMovie, user, showRegister } = this.state;

    if(!user && showRegister === true) return <RegistrationView onLoggedIn={user => this.onLoggedIn(user)} onShowRegister={showRegister => this.onShowRegister(showRegister)} />

    if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} onShowRegister={showRegister => this.onShowRegister(showRegister)} />;


    // Before the movies have been loaded
    if (!movies) return  <Container className="main-view" />;

    return (
      <Row>
      {selectedMovie
        ? <MovieView movie={selectedMovie} onToMain={movie => this.handleToMain(movie)}/>
        : movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
        ))
      }
      </Row>
    );
}
}

MainView.proTypes = {
  onToMain: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}