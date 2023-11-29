import { PokemonType } from '@manuel-workspace/shared-types'
import { PokeCard } from '@manuel-workspace/shared-ui'
import { Container, SimpleGrid, Box } from '@chakra-ui/react'

type PokeStoreProps = {
  pokemon_list: PokemonType[],
}

function renderPokeCard(pokemon: PokemonType): JSX.Element{
    return (
    <Box
    key={pokemon.id}
    minHeight={'100px'}>
        <PokeCard pokemon={pokemon}/>
    </Box>
    )
}

export function PokeStore({ pokemon_list } : PokeStoreProps) {
    return (
        <Container size={'md'}>
            <SimpleGrid
            gap={3}>
                { pokemon_list.map(pokemon => renderPokeCard(pokemon)) }
            </SimpleGrid>
        </Container>
    );
}

export default PokeStore