import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import CreateForm from './pages/createForm/CreateForm.tsx'
import Preview from './pages/preview/Preview.tsx'
import MyForms from './pages/myForms/MyForms.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='create' element={<CreateForm/>}/>
      <Route path='preview' element={<Preview/>}/>
      <Route path='myforms' element={<MyForms/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
