import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'


import "./movie-view.scss"

export class MovieView extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

render() {
  const { movie, onToMain } = this.props;

  return (
    <Container className="movie-view">
        <Col>
          <Row className="label">Title</Row>
          <Row className="value">{movie.Title}</Row>
        </Col>
        <Col className="movie-description">
          <Row className="label">Description</Row>
          <Row className="value">{movie.Description}</Row>
        </Col>
        <Image className="movie-poster" src={'imgs/' + movie.ImagePath} />
        <Col className="movie-genre">
          <Row className="label">Genre</Row>
          <Row className="value">{movie.Genre.Name}</Row>
        </Col>
        <Col className="movie-director">
          <Row className="label">Director</Row>
          <Row className="value">{movie.Director.Name}</Row>
        </Col>
        <Row className="button">
        <Button type="primary" onClick = {onToMain}>Back</Button>
        </Row>
      </Container>
  );
}
}

MovieView.propTypes = {
  movie: PropTypes.object.isRequired,
  onToMain: PropTypes.func.isRequired
}
