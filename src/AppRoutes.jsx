import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

//Componentes Layouts
import { Header } from './feature/layout/components/Header'
import { Footer } from './feature/layout/components/Footer'
import { Content } from './feature/layout/components/Content'

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