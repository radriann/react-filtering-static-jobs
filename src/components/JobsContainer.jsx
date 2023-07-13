import { chakra } from '@chakra-ui/react'
import { JobItem } from './JobItem'
import jobs from '../data.json'

export const JobsContainer = () => {
  return (
    <chakra.main
      w='100%'
      px={{ base: '1rem', md: '6rem' }}
      mt='5rem'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      gap={{ base: '60px', md: '30px' }}
    >
     {jobs.map(job => (
      <JobItem key={job.id} {...job} />
     ))}
    </chakra.main>
  )
}
