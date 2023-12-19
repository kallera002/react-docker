import { RouterProvider } from 'react-router-dom';
import './App.css'
import { conditionalRouter } from './router';
import { Box } from '@chakra-ui/react';

function App() {


  return (
    <Box className="App">
      <RouterProvider router={conditionalRouter} />
    </Box>

  )
}

export default App
