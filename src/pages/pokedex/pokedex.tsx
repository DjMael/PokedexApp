import {useCallback, useLayoutEffect, useState} from 'react';
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
  const [pokemonList, SetPokemonList] = useState<Array<IPokemonResponse>>([]);
  const [limit, SetLimit] = useState<number>(20);
  const [offset, SetOffset] = useState<number>(0);
  const [loading, SetLoading] = useState<boolean>(false);

  const fetchPokemonList = useCallback(async () => {
    if (loading) return;
    const genericPokemonList = await PokemonService.GetPokemons({
      limit: limit,
      offset: offset,
    });
    let genericListPokemon = await forPokemon(genericPokemonList);
    SetPokemonList([...pokemonList, ...genericListPokemon]);
    SetLoading(false);
  }, [offset, loading]);

  const forPokemon = async (
    genericPokemonList: IBaseResponse<IBaseEntityResponse>,
  ): Promise<Array<IPokemonResponse>> => {
    let genericListPokemon = new Array<IPokemonResponse>();
    for (let pk of genericPokemonList.results) {
      let pkDetails = await PokemonService.GetPokemonById(pk.name);
      genericListPokemon.push(pkDetails);
    }
    return genericListPokemon;
  };

  useLayoutEffect(() => {
    fetchPokemonList();
  }, []);

  const OnReachEnded = () => {
    SetOffset(offset + limit);
    SetLoading(true);
    fetchPokemonList();
  };

  const renderPokemonCard = ({
    item: pk,
  }: ListRenderItemInfo<IPokemonResponse>) => {
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
