import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
<BrowserRouter basename={import.meta.env.VITE_REACT_BASE_URL}>    <App /></BrowserRouter>


)
