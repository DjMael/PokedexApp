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

interface IPokemonDescrpitSpecie {
    height: number,
    weight: number,
    pokemon_v2_pokemonspecy: IPokemonDescrpitSpecieDetails,
}

interface IPokemonDescrpitSpecieFlavorText {
    flavor_text: string,
    pokemon_v2_version: IPokemonDescrpitSpecieVersion
}

interface IPokemonDescrpitSpecieVersion {
    name: string
}

interface IPokemonDescrpitSpecieEggGroup {
    pokemon_v2_egggroup: IPokemonDescrpitSpecieEggGroupDescription
}

interface IPokemonDescrpitSpecieEggGroupDescription {
    name: string
}

interface IPokemonDescrpitSpecieGrowthRate {
    formula: string,
    name: string
}

interface IPokemonDescrpitSpecieDetails {
    gender_rate: number,
    pokemon_v2_evolutionchain: IPokemonDescrpitSpecieEvolutionChain,
    pokemon_v2_pokemonspeciesflavortexts: Array<IPokemonDescrpitSpecieFlavorText>,
    pokemon_v2_growthrate: IPokemonDescrpitSpecieGrowthRate,
    pokemon_v2_pokemonegggroups: Array<IPokemonDescrpitSpecieEggGroup>
}

interface IPokemonDescrpitSpecieEvolutionChain {
    pokemon_v2_pokemonspecies: Array<IPokemonDescrpitSpecieEvolutionChainDescript>
}

interface IPokemonDescrpitSpecieEvolutionChainDescript {
    name: string,
    order: number
}