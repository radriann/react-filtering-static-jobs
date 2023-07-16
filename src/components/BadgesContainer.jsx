import { Flex, Badge, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { JobsContext } from '../context/JobsContext'

export const BadgesContainer = () => {
  const { filterTools, clearFilters, removeFilter } = useContext(JobsContext)

  return (
    <Flex
      position='absolute'
      w='60%'
      top={{ base: '50%', md: '80%' }}
      left='20%'
      borderRadius='6px'
      boxShadow='md'
      display={filterTools.length > 0 ? 'block' : 'none'}
      transition='display .2s ease'
      bgColor='white'
      padding='1rem'
      justify='space-between'
    >
      <Flex
        alignItems='center'
        display='inline'
      >
        {
          filterTools &&
            filterTools.map((filter, i) => (
              <Flex
                key={i}
                w='fit-content'
                alignItems='center'
                display='inline'
                position='relative'
                mr='2rem'
              >
                <Badge
                  bgColor='cyan.100'
                  color='primary.desaturated-dark-cyan'
                  py='5px'
                  px='8px'
                  transition='.2s ease-in'
                  cursor='pointer'
                  mx='.5rem'
                  my={{ base: '.5rem', md: '0' }}
                  _hover={{ bgColor: 'primary.desaturated-dark-cyan', color: 'white' }}
                  position='relative'
                >
                {filter}
              </Badge>
              <Button
                onClick={removeFilter}
                bgColor='primary.desaturated-dark-cyan'
                borderRadius='0px'
                borderTopRightRadius='6px'
                borderBottomRightRadius='6px'
                w='30px'
                h='28px'
                value={filter}
                position='absolute'
                right='-30px'
                _hover={{ bgColor: 'gray.800' }}
              >
                X
              </Button>
            </Flex>
            ))
        }
      </Flex>

      <Button
        onClick={clearFilters}
        color='primary.desaturated-dark-cyan'
        position='absolute'
        right='20px'
        bottom={{ base: '30px', md: '20px' }}
        variant='link'
      >
        Clear
      </Button>
    </Flex>
  )
}
