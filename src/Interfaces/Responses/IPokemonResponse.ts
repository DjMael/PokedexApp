interface IPokemonResponse {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Array<IPokemonAbility>;
    forms: Array<IBaseEntityResponse>;
    game_indices: Array<IVersionGameIndex>;
    held_items: Array<IPokemonHeldItem>;
    location_area_encounters: string;
    moves: Array<IPokemonMove>;
    past_types: Array<IPokemonTypePast>;
    sprites: IPokemonSprites;
    species: IBaseEntityResponse;
    stats: Array<IPokemonStats>;
    types: Array<IPokemonType>;
}

interface IPokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: IBaseEntityResponse;
}

interface IPokemonHeldItem {
    item: IBaseEntityResponse;
    version_details: Array<IPokemonHeldItemVersion>;
}

interface IPokemonHeldItemVersion {
    version: IBaseEntityResponse;
    rarity: number;
}

interface IPokemonMove {
    move: IBaseEntityResponse;
    version_group_details: Array<IPokemonMoveVersion>
}

interface IPokemonMoveVersion {
    move_learn_method: IBaseEntityResponse;
    version_group: IBaseEntityResponse;
    level_learned_at: number;
}

interface IPokemonTypePast {
    generation: IBaseEntityResponse;
    types: Array<IPokemonType>;
}

interface IPokemonType {
    slot: number;
    type: IBaseEntityResponse;
}

interface IPokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
    other: IPokemonSpritesOther | null;
}

interface IPokemonSpritesOther {
    dream_world: IPokemonSprites;
    home: IPokemonSprites;
    "official-artwork": IPokemonSprites;
}


interface IPokemonStats {
    stat: IBaseEntityResponse;
    effort: number;
    base_stat: number;
}