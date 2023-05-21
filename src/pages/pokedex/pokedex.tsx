import {useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  View,
} from 'react-native';
import Header from '../../components/header/header';
import PokemonCard from '../../components/pokemonCard/pokemonCard';
import PokemonService from '../../services/PokemonService';
import ColorDefault from '../../styles/ColorDefault';

const Pokedex = () => {
  const [pokemonList, SetPokemonList] = useState<Array<IHomePokemons>>([]);
  const [limit, SetLimit] = useState<number>(20);
  const [offset, SetOffset] = useState<number>(0);
  const [loading, SetLoading] = useState<boolean>(true);

  const fetchPokemonList = async () => {
    await PokemonService.GetPokemonHomeGraph({
      limit: limit,
      offset: offset,
    }).then(pokemon => {
      let types = pokemon[0].pokemon_v2_pokemontypes[0];
      console.log(types);
      SetPokemonList([...pokemonList, ...pokemon]);
    });
    SetLoading(false);
  };

  useLayoutEffect(() => {
    fetchPokemonList();
  }, []);

  const OnReachEnded = () => {
    SetOffset(offset + limit);
    SetLoading(true);
    if (!loading) fetchPokemonList();
  };

  const renderPokemonCard = ({item: pk}: ListRenderItemInfo<IHomePokemons>) => {
    return <PokemonCard pokemon={pk} />;
  };

  return (
    <View style={{backgroundColor: ColorDefault.white, flex: 1}}>
      <Header title="Pokedex" />
      <FlatList
        data={pokemonList}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPokemonCard}
        onEndReached={() => OnReachEnded()}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
};

export default Pokedex;
