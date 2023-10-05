export type Pokemon = {
    id: number
    name: string
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