import { Badge } from '@chakra-ui/react'
import { useContext } from 'react'
import { JobsContext } from '../context/JobsContext'

export const JobBadge = ({ text }) => {
  const { getFilter } = useContext(JobsContext)

  return (
    <Badge
      onClick={getFilter}
      bgColor='cyan.100'
      color='primary.desaturated-dark-cyan'
      py='5px'
      px='8px'
      transition='.2s ease-in'
      cursor='pointer'
      _hover={{ bgColor: 'primary.desaturated-dark-cyan', color: 'white' }}>
      {text}
  </Badge>
  )
}
