import { Container, Card, CardBody, CardFooter, Badge, Image, Heading, Text, Stack } from '@chakra-ui/react'
import { FaMedal, FaMoneyBill } from 'react-icons/fa'
import { CgPokemon } from 'react-icons/cg'
import RedImage from '../../../assets/red-poketrainerpng.png'

export function PokeTrainer () {
    return (
        <Container maxW={'sm'}>
            <Card direction={{base: 'column', sm: 'row'}}
            overflow={'hidden'}
            variant={'outline'}>
                <Image objectFit={'cover'}
                    src={RedImage}
                    maxH={{base: '50%', md: '200px'}}
                    alt={'Red Trainer'}/>
                <Stack>
                    <CardBody>
                        <Heading size={'md'}>Red</Heading>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quaerat repellendus dolor nesciunt autem eveniet aperiam tempora modi corrupti numquam natus, animi facere perferendis quo voluptate rem doloribus enim omnis?</Text>
                    </CardBody>
                    <CardFooter>
                        <Badge>
                            <FaMoneyBill /> 
                            500
                        </Badge>
                        <Badge>
                            <FaMedal /> 
                            7
                        </Badge>
                        <Badge>
                            <CgPokemon /> 
                            254
                        </Badge>
                    </CardFooter>
                </Stack>
            </Card>
        </Container>
    )
}

export default PokeTrainer