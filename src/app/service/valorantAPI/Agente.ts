export type Agente = {

    status: string
    data: {
        uuid: string,
        displayName: string,
        description: string,
        displayIcon: string,
        displayIconSmall: string,
        background: string,
        bustPortrait: string,
        fullPortrait: string,
        fullPortraitV2: string,
        killfeedPortrait: string,
        backgroundGradientColors: [],
        role: {
            uuid: string,
            displayName: string,
            description: string,
            displayIcon: string,
        },
        abilities: [
            {
                displayName: string,
                description: string,
                displayIcon: string
            }
        ]
    }[]
}