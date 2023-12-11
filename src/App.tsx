import { RouterProvider } from 'react-router-dom';
import './App.css'
import { conditionalRouter } from './router';

function App() {
  

  return (
    <>
      <RouterProvider router={conditionalRouter} />
    </>
  )
}

export default App
