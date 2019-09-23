export const filters = [
  {
    filterName: 'Name',
    filterOne: 'name',
    filterTwo: '-films-length',
    id: 'filterByName'
  },
  {
    filterName: 'Gender',
    filterOne: 'gender',
    filterTwo: '-films-length',
    id: 'filterByGender'
  },
  {
    filterName: 'Movies',
    filterOne: '-films.length',
    filterTwo: 'name',
    id: 'filterByMovies'
  },
  {
    filterName: 'Height',
    filterOne: 'height',
    filterTwo: '-films-length',
    id: 'filterByHeight'
  }
]
