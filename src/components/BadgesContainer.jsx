import { Flex, Badge, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { JobsContext } from '../context/JobsContext'

export const BadgesContainer = () => {
  const { filterTools, clearFilters } = useContext(JobsContext)

  return (
    <Flex
      position='absolute'
      w='60%'
      top='80%'
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
        gap='10px'
        display='inline'
      >
        {
          filterTools &&
            filterTools.map((filter, i) => (
              <Badge
              key={i}
              bgColor='cyan.100'
              color='primary.desaturated-dark-cyan'
              py='5px'
              px='8px'
              transition='.2s ease-in'
              cursor='pointer'
              mx='.5rem'
              _hover={{ bgColor: 'primary.desaturated-dark-cyan', color: 'white' }}
            >
              {filter}
            </Badge>
            ))
        }
      </Flex>

      <Button
        onClick={clearFilters}
        color='primary.desaturated-dark-cyan'
        position='absolute'
        right='20px'
        bottom='20px'
        variant='link'
      >
        Clear
      </Button>
    </Flex>
  )
}
