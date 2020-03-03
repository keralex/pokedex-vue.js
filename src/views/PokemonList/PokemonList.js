import pokemonCard from '../../components/PokemonCard'
const axios = require('axios')
export default {
  name: 'PokemonList',
  components: {
    pokemonCard
  },
  data () {
    return {
      pokemons: null
    }
  },
  beforeMount () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=350&offset=0')
      .then(response => {
        this.pokemons = response.data.results
        console.log(this.pokemons)
      })
  }
}
