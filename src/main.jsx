import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme.js'
import { JobsContextProvider } from './context/JobsContext'

import '@fontsource/league-spartan/500.css'
import '@fontsource/league-spartan/700.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <JobsContextProvider>
        <App />
      </JobsContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
