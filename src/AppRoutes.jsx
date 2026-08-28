import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

//Componentes Layouts
import { Content } from './feature/layout/components/content'
import { Footer } from './feature/layout/components/footer'
import { Header } from './feature/layout/components/header'

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