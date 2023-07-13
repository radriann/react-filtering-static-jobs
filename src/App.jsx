import { chakra } from '@chakra-ui/react'
import { JobsContainer } from './components/JobsContainer'
import { useContext } from 'react'
import { JobsContext } from './context/JobsContext'
import desktopBackground from './assets/bg-header-desktop.svg'

function App () {
  return (
    <chakra.main
      w='100%'
      minH='100vh'
      bgColor='neutral.light-grayish-cyan'
      color='black'
    >
      <chakra.header
        w='100%'
        h='120px'
        bgColor='primary.desaturated-dark-cyan'
        bgImage={desktopBackground}
        bgSize='cover'
        bgRepeat='no-repeat'
      >
      </chakra.header>
      <JobsContainer />
    </chakra.main>
  )
}

export default App
