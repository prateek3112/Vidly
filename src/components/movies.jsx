import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres,
    });
  }
  handleSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  onPageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };
  onLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  getpageData =()=> {

    const { movies: allMovies, selectedGenre, sortColumn } = this.state;
    const filtered =
    selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre.name === selectedGenre.name)
      : allMovies;

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const movies = paginate(
    sorted,
    this.state.currentPage,
    this.state.pageSize
  );

  return {totalCount : filtered.length , data :movies}
  }
  handleGenreSelect = (genre) => {
    console.log(genre);
    // const movies = this.state.movies.filter((m) => m.genre.name == genre.name);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {

    const { movies: selectedGenre, sortColumn , currentPage} = this.state;

    const { totalCount , data:movies} = this.getpageData();

    if (totalCount === 0) return <h2>There are no movies available.</h2>;

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
            valueProperty="_id"
          />
        </div>

        <div className="col">
          <h4>{totalCount} movies are available.</h4>
          <MoviesTable
            movies={movies}
            onLike={this.onLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={this.state.pageSize}
            onPageChange={this.onPageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
