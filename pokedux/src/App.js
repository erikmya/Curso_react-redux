import { useEffect } from 'react';
import { Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './PokemonList';
import logo from './components/statics/logo.svg';
import { getPokemons, getPokemonsDetails } from './api';
import { setPokemons } from './actions';
import './App.css';


function App() {

const pokemons = useSelector(state => state.pokemons);
const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonsDetails(pokemon)));
      dispatch(setPokemons(pokemonsRes));
      dispatch(setPokemons(pokemonsDetailed))
    };

  

    fetchPokemons();
  }, []);

  return ( 
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt='Pokedux' /> 
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
   );
}


export default App;
