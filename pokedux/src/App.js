import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './PokemonList';
import logo from './components/statics/logo.svg';
import { fetchPokemonWithDetails } from './slices/dataSlice';
import './App.css';



function App() {

const pokemons = useSelector((state) => 
  state.data.pokemons, shallowEqual);
/**
 * === 
 * 1 === 1 // true
 * 1 === '1' // false
 * 
 * const a = {
 * b: 1
 * c: 2
 * }
 * 
 * const b = a;
 * 
 * a === b // true
 * 
 * const c = {...a}
 * a === c // false
 */
//const loading = useSelector((state) => state.ui.loading;
const loading = false;

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  return ( 
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt='Pokedux' /> 
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? ( <Col offset={12}>
      <Spin spinning size='large' />
      </Col> 
      ) : ( 
      <PokemonList pokemons={pokemons} /> 
      )}
      
    </div>
   );
}


export default App;
