export type Pokemon = {
    id: number
    name: string
    height: number
    weight: number
    base_experience: number
    abilities: [
        {
            ability: {
                name: string,
            }
        },
        {
            ability: {
                name: string,
            }
        }
    ]
    moves: {
        move: {
            name: string
        }
    }[]
    sprites: {
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    }
    types: {
        slot: number,
        type: {
            name: string,
        }
    }[]
}