import { chakra } from '@chakra-ui/react'
import { JobItem } from './JobItem'
import { useContext } from 'react'
import { JobsContext } from '../context/JobsContext'

export const JobsContainer = () => {
  const { jobs, filterTools, filterJobs } = useContext(JobsContext)
  const filteredJobs = filterJobs(jobs, filterTools)

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
     {filteredJobs.map(job => (
      <JobItem key={job.id} {...job} />
     ))}
    </chakra.main>
  )
}
