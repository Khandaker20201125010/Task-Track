import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';
import AuthProvider from './Provider/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <QueryClientProvider client={queryClient}><AuthProvider> <RouterProvider router={router} /></AuthProvider></QueryClientProvider>
  </StrictMode>,
)
