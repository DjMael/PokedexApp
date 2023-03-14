export interface IPokemonSpecie {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: IBaseEntityResponse;
    pokedex_numbers: Array<IPokemonSpeciesDexEntry>;
    egg_groups: Array<IBaseEntityResponse>;
    color: IBaseEntityResponse;
    shape: IBaseEntityResponse;
    evolves_from_species: IBaseEntityResponse;
    evolution_chain: IBaseEntityResponse;
    habitat: IBaseEntityResponse;
    generation: IBaseEntityResponse;
    names: Array<INames>;
    pal_park_encounters: Array<IPalParkEncounterSpecies>;
    flavor_text_entries: Array<IFlavorText>;
    form_descriptions: Array<IDescription>;
    genera: Array<IGenus>;
}

interface INames {
    name: string;
    language: IBaseEntityResponse;
    varieties: IPokemonSpeciesVariety;
}

interface IPalParkEncounterSpecies {
    base_score: number;
    rate: number;
    pokemon_species: IBaseEntityResponse;
}

interface IFlavorText {
    flavor_text: string;
    language: IBaseEntityResponse;
    version: IBaseEntityResponse;
}

interface IDescription {
    description: string;
    language: IBaseEntityResponse;
}

interface IGenus {
    genus: string;
    language: IBaseEntityResponse;
}

interface IPokemonSpeciesVariety {
    is_default: boolean;
    pokemon: IBaseEntityResponse;
}

interface IPokemonSpeciesDexEntry {
    entry_number: number;
    pokedex: IBaseEntityResponse;
}