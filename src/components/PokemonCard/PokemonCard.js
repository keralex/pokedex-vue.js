// eslint-disable-next-line no-unused-vars
const axios = require('axios')
export default {
  name: 'PokemonList',
  props: [
    'nameProp',
    'pokemonUrl',
    'keyProp'
  ],
  data () {
    return {
      name: '',
      imageUrl: '',
      pokemonIndex: '',
      types: null
    }
  },
  mounted () {
    axios
      .get(this.pokemonUrl)
      .then(response => {
        this.name = response.data.name
        this.imageUrl = response.data.sprites.front_default
        this.pokemonIndex = this.keyProp
        this.types = response.data.types.map(type => type.type)
        console.log(response.data)
        console.log(this.types)
      })
  }
}
