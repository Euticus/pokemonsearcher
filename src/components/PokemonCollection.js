import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  renderPokemon = () => {
    if(this.props.searchTerm !== ''){
      let filterPokemon = this.props.pokemon.filter(pokemon => pokemon.name.includes(this.props.searchTerm))
      return filterPokemon.map(pokemon => <PokemonCard pokemon={pokemon}/>)
    } else {
      return this.props.pokemon.map(pokemon => <PokemonCard pokemon={pokemon}/>)
    }
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
