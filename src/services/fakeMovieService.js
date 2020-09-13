const movies = [
  {
    _id: "z3w4xertv6ybu",
    title: "Die Hard",
    genre: { _id: "4e5rft6gy7hu", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 3,
    publishDate: "2020-01-01",
    liked : true
  },
  {
    _id: "z3w4xe5cr6tvybun",
    title: "Harry Potter",
    genre: { _id: "4e5rtv6yb7", name: "Fantasy" },
    numberInStock: 10,
    dailyRentalRate: 5,
    publishDate: "2020-01-01",
    liked : true
  },
  {
    _id: "xe4cr5ftv6g",
    title: "Before Sunrise",
    genre: { _id: "4ed5rftg6yh", name: "Romantic" },
    numberInStock: 10,
    dailyRentalRate: 5,
    publishDate: "2020-01-01",
    liked : true
  },
  {
    _id: "xed4cr5fv6gh",
    title: "The notebook",
    genre: { _id: "34exdcrf5g6h", name: "Romantic" },
    numberInStock: 10,
    dailyRentalRate: 4,
    publishDate: "2020-01-01",
    liked : true
  },
  {
    _id: "3sxd4c5fvg6",
    title: "Avengers",
    genre: { _id: "sxd4cf56gh7", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 3,
    publishDate: "2020-01-01",
    liked : false
  },
  {
    _id: "3sxd4c53zw4erct",
    title: "365 Days",
    genre: { _id: "sxd4cf4e5rct", name: "Action" },
    numberInStock: 8,
    dailyRentalRate: 2,
    publishDate: "2020-01-01",
    liked : false
  },
];

export function getMovies() {
  return movies;
}
