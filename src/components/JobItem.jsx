import { Flex, Heading, Avatar, Badge, Text } from '@chakra-ui/react'
import { JobBadge } from './JobBadge'

export const JobItem = (job) => {
  return (
    <Flex
      w='100%'
      h='fit-content'
      p='2rem'
      alignItems={{ base: '', md: 'center' }}
      justifyContent='space-between'
      bgColor='white'
      boxShadow='md'
      borderRadius='4px'
      borderLeftWidth='6px'
      borderLeftColor='primary.desaturated-dark-cyan'
      position='relative'
      flexDir={{ base: 'column', md: 'row' }}
    >
     <Flex
      alignItems='center'
      gap='20px'
     >
      <Avatar
        h='70px'
        w='70px'
        src={job.logo}
        alt={job.company}
        position={{ base: 'absolute', md: 'relative' }}
        top={{ base: '-50px', md: '0' }}
        left={{ base: '10px', md: '0' }}
      />

      <Flex
        flexDir='column'
        alignItems={{ base: 'flex-start', md: '' }}
        justifyContent={{ base: 'flex-start', md: '0' }}
      >
        <Flex gap='10px' alignItems={{ base: 'flex-start', md: 'center' }} mb='.3rem'>
          <Text
            color='primary.desaturated-dark-cyan'
            fontWeight='700'
            fontSize='18px'
          >
            {job.company}
          </Text>
          <Badge px={{ base: '8px', md: '10px' }} py={{ base: '3px', md: '5px' }} bgColor={job.new ? 'primary.desaturated-dark-cyan' : null} borderRadius='full' fontSize={{ base: '12px', md: '14px' }} display={job.new ? 'inline' : 'none'}>
            {job.new ? 'New!' : null}
          </Badge>
          <Badge px={{ base: '8px', md: '10px' }} py={{ base: '3px', md: '5px' }} bgColor={job.featured ? 'neutral.very-dark-grayish-cyan' : null} borderRadius='full' fontSize={{ base: '12px', md: '14px' }} display={job.featured ? 'inline' : 'none'}>
            {job.featured ? 'Featured' : null}
          </Badge>
        </Flex>
        <Heading mb='.5rem' fontSize={{ base: '20px', md: '25px' }} color='primary.desaturated-dark-cyan'>{job.position}</Heading>
        <Flex gap='20px'>
          <Text color='neutral.dark-grayish-cyan'>{job.postedAt}</Text>
          <Text color='neutral.dark-grayish-cyan'>{job.contract}</Text>
          <Text color='neutral.dark-grayish-cyan'>{job.location}</Text>
        </Flex>
      </Flex>
     </Flex>

    <Flex
      alignItems='center'
      gap='15px'
      flexWrap={{ base: 'wrap' }}
      mt={{ base: '1rem', md: '0' }}
    >
      <JobBadge text={job.role} />
      <JobBadge text={job.level} />
      {job.languages.map((language, i) => (
        <JobBadge key={i} text={language} />
      ))}
      {job.tools.map((tool, i) => (
        <JobBadge key={i} text={tool} />
      ))}
    </Flex>
    </Flex>
  )
}
