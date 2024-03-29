import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./movie-card.scss";

export class MovieCard extends React.Component {
  render()  {
    const { movie, onClick } = this.props;
    return (
      <Card className="card" style={{ width: '16rem'}}>
        <Card.Img variant="top" src={"imgs/" + movie.ImagePath} />
        <Card.Body>
          <Card.Title className="title">{movie.Title}</Card.Title>
          <Card.Text className="description">{movie.Description}</Card.Text>
          <Button onClick={() => onClick(movie)} variant="link">Open</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
