interface IEvolutionChainResponse {
    id: number;
    baby_trigger_item: IBaseEntityResponse | undefined;
    chain: IChainLink;
}

interface IChainLink {
    is_baby: boolean;
    species: IBaseEntityResponse;
    evolution_details: Array<IEvolutionDetail>;
    evolves_to: Array<IChainLink>;
}

interface IEvolutionDetail {
    item: IBaseEntityResponse;
    trigger: IBaseEntityResponse;
    gender: number;
    held_item: IBaseEntityResponse;
    known_move: IBaseEntityResponse;
    known_move_type: IBaseEntityResponse;
    location: IBaseEntityResponse;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: IBaseEntityResponse;
    party_type: IBaseEntityResponse;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: IBaseEntityResponse;
    turn_upside_down: boolean;
}