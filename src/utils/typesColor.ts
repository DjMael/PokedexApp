const getTypeColor = (type: string) => {
    switch (type) {
        case "normal":
            return "#aaaa99";
        case "fire":
            return "#ec4225";
        case "water":
            return "#4e9aff";
        case "electric":
            return "#f5cc34";
        case "grass":
            return "#77cc55";
        case "ice":
            return "#6cf";
        case "fighting":
            return "#bb5545";
        case "poison":
            return "#aa5599";
        case "ground":
            return "#db5";
        case "flying":
            return "#89f";
        case "psychic":
            return "#ee5499";
        case "bug":
            return "#aabb22";
        case "rock":
            return "#ba6";
        case "ghost":
            return "#6667bc";
        case "dragon":
            return "#7867ee";
        case "dark":
            return "#775544";
        case "steel":
            return "#aab";
        case "fairy":
            return "#e9e";
    }
}
export default getTypeColor;