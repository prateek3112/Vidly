import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { useHistory } from "react-router-dom";
import { getGenres } from "../services/fakeGenreService";
import { getMovies, getMovie, saveMovie } from "../services/fakeMovieService";
import Select from "./common/select";

export default class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
    genres: [],
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Number In Stock")
      .min(0)
      .max(20),
    dailyRentalRate: Joi.number()
      .required()
      .label("Daily Rental Rate")
      .min(0)
      .max(20),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.params.id;
    debugger;
    if (movieId === "new") {
      return;
    } else {
      const movie = getMovie(movieId);
      if (!movie) {
        return this.props.history.replace("/not-found");
      } else this.setState({ data: this.mapToViewModel(movie) });
    }
  }
  mapToViewModel = (movie) => {
    console.log(movie);
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}
