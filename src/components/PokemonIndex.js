import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount () {
    fetch('http://localhost:3000/pokemon') 
    .then(resp => resp.json ())
    .then(pokemonData => this.setState({
      pokemon: pokemonData
    }) 
    )
  }

  updateSearchTerm = (val) => {
    this.setState({
      searchTerm: val
    })
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.updateSearchTerm} />
        <br />
        <PokemonCollection searchTerm={this.state.searchTerm} pokemon={this.state.pokemon} />
      </Container>
    )
  }
}

export default PokemonPage
