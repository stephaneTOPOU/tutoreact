import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Form from './form.jsx'
import FluxDeDonne from './FluxDeDonne.jsx'
import ListeDeProduit from './ListeDeProduit.jsx'
import HookUseEffect from './HookUseEffect.jsx'
import HookUseEffect2 from './HookUseEffect2.jsx'
import HookUseMemo from './HookUseMemo.jsx'
import HookUseRef from './HookUseRef.jsx'
import HookPersonnalise from './HookPersonnalise.jsx'
import HookFetch from './HookFetch.jsx'
import MemorisationAndUseCallback from './MemorisationAndUseCallback.jsx'
import Portail from './Portail.jsx'
import HookUseReducer from './HookUseReducer.jsx'
import HookUseSyncExternalStore from './HookUseSyncExternalStore.jsx'
import ReactRooter from './ReactRooter.jsx'
import FramerMotion from './FramerMotion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FramerMotion />
  </StrictMode>,
)
