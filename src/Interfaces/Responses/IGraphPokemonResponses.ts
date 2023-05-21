interface IHomePokemons {
    id: number,
    order: number,
    name: string,
    pokemon_v2_pokemonsprites: Array<IHomePokemonsSprites>,
    pokemon_v2_pokemontypes: Array<IHomePokemonsTypes>,
}

interface IHomePokemonsSprites {
    id: number,
    sprites: string,
}

interface IHomePokemonsTypes {
    id: number,
    slot: number,
    pokemon_v2_type: IHomePokemonsTypeName
}

interface IHomePokemonsTypeName {
    generation_id: number,
    id: number,
    name: string
}