import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setupIonicReact } from '@ionic/react'; // usa recurso android
import './index.css'
import App from './App.tsx'

// Força o estilo Material Design (Android) globalmente na aplicação
setupIonicReact({
  mode: 'md'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
