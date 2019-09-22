export const filters = [
  {
    filterName: 'Nome',
    filterOne: 'name',
    filterTwo: '-films-length',
    id: 'filterByName'
  },
  {
    filterName: 'Gênero',
    filterOne: 'gender',
    filterTwo: '-films-length',
    id: 'filterByGender'
  },
  {
    filterName: 'Filmes',
    filterOne: '-films.length',
    filterTwo: 'name',
    id: 'filterByMovies'
  },
  {
    filterName: 'Altura',
    filterOne: 'height',
    filterTwo: '-films-length',
    id: 'filterByHeight'
  }
]
