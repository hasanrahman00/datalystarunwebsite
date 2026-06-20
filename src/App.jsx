import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import DFYProspecting from './pages/DFYProspecting'
import B2BScraping from './pages/B2BScraping'
import SalesNav from './pages/SalesNav'
import LocalLeads from './pages/LocalLeads'
import WaterfallEnrichment from './pages/WaterfallEnrichment'
import AIAgents from './pages/AIAgents'
import EcommerceProspects from './pages/EcommerceProspects'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="page-gradient min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dfy-prospecting" element={<DFYProspecting />} />
          <Route path="/b2b-scraping" element={<B2BScraping />} />
          <Route path="/sales-nav" element={<SalesNav />} />
          <Route path="/local-leads" element={<LocalLeads />} />
          <Route path="/waterfall-enrichment" element={<WaterfallEnrichment />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/ecommerce-prospects" element={<EcommerceProspects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
