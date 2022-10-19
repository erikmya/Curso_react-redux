import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonsWithDetails } from '../actions';
import { getPokemons } from '../api';

const initialState = {
    pokemons: [],
}

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    async (_, {dispatch}) => {
        // Dispatch loader
        // fetch
        // dispatch
      const pokemonsRes = await getPokemons();
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonsWithDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.get.pokemons.findIndex((pokemon)=> {
                return pokemon.id === action.payload.pokemonId
              });
        
              if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                state.pokemons[currentPokemonIndex].favorite = ! isFavorite;
              
        
              return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
            }
        },
    },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;

