import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { useHistory } from "react-router-dom";
import { getGenres } from "../services/genreService";
import { getMovies, getMovie, saveMovie } from "../services/movieService";
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

 async populateGenres()
  {
    const { data } = await getGenres();
    const genres = data.data;
    console.log(genres);
    this.setState({ genres });
  }

  async populateMovie(){
    const movieId = this.props.match.params.id;
    if (movieId === "new") {
      return;
    } 
    try {
      const{data:movie} = await getMovie(movieId);
      
      console.log(movie);
      this.setState({ data: this.mapToViewModel(movie) });
     } catch(ex) {
        if(ex.response && ex.response.status===404)
        this.props.history.replace("/not-found");

      }
  }
  async componentDidMount() {
     
    await this.populateGenres();

    await this.populateMovie
    
    }
  
  mapToViewModel = (movie) => {
    console.log(movie._id);
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };
  doSubmit = async () => {
    await saveMovie(this.state.data);
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
