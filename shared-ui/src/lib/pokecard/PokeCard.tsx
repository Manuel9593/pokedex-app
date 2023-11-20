import { PokemonType } from 'shared-types/src/lib/shared-types';
import { Card, CardBody, Image, Stack, Heading } from '@chakra-ui/react';

type PokeCardProps = {
  pokemon: PokemonType
}

export function PokeCard({ pokemon } : PokeCardProps) {
  return (
    <Card
    direction={{base: 'column', sm: 'row'}}
    overflow={'hidden'}
    variant={'outline'}
    border='black'
    borderWidth='1px'
    justify={'space-evenly'}>
      <Image src={pokemon.url}
      objectFit={'cover'}
      alt={pokemon.name}/>
      <Stack>
        <CardBody>
          <Heading>{pokemon.name}</Heading>
        </CardBody>
      </Stack>
    </Card>
  );
}