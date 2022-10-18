import { useEffect } from 'react';
import { Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './PokemonList';
import logo from './components/statics/logo.svg';
import { getPokemons } from './api';
import { getPokemonsWithDetails } from './actions';
import './App.css';


function App() {

const pokemons = useSelector(state => state.pokemons);
const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
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
