import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

//Componentes Layouts
import { Content } from './features/layout/components/Content'
import { Footer } from './features/layout/components/Footer'
import { Header } from './features/layout/components/Header'

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}