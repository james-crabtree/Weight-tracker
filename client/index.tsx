import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './components/App.tsx'

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>)