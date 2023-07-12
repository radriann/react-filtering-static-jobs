import { Box, Heading, Image } from '@chakra-ui/react'
import jobs from '../data.json'

export const JobsContainer = () => {
  return (
    <Box>
      {jobs.map(job => (
        <Box
          key={job.id}
        >
          <Heading>{job.position}</Heading>
          <Image src={job.logo} />
        </Box>
      ))}
    </Box>
  )
}
