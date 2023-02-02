import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DecaUIProvider } from '@deca-ui/react'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import PlacePage from './PlacePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/places/:placeId',
    element: <PlacePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DecaUIProvider>
      <RouterProvider router={router} />
    </DecaUIProvider>
  </React.StrictMode>,
)
