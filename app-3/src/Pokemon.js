import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) =>{
    const {name} = props.match.params
    const [pokemon,setPokemon] = useState({})


    useEffect( ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res)=>{
            setPokemon(res.data)
            console.log(res.data.sprites.versions.["generation-i"]["red-blue"].front_default)
        })
    },[name])

return(
    <p>
        <h1>{pokemon.name}</h1>
        {/* <img alt={pokemon.name} src={pokemon.sprites?.front_default}/>  */}
        <img alt={pokemon.name} src={pokemon.sprites?.versions.["generation-i"]["red-blue"].front_default}/>
    </p>
)
}
export default Pokemon