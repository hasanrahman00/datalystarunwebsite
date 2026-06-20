import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { getContentRoutes } from './data/registry.jsx'

import Home from './pages/Home.jsx'
import B2BScraping from './pages/B2BScraping.jsx'
import About from './pages/About.jsx'
import WhyUs from './pages/WhyUs.jsx'
import Contact from './pages/Contact.jsx'
import News from './pages/News.jsx'
import Partners from './pages/Partners.jsx'
import Careers from './pages/Careers.jsx'
import Blog from './pages/Blog.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Testimonials from './pages/Testimonials.jsx'
import ResourceListing from './pages/ResourceListing.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const contentRoutes = getContentRoutes()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/b2b-scraping" element={<B2BScraping />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Resources */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources/guides" element={<ResourceListing type="guide" />} />
          <Route path="/resources/white-papers" element={<ResourceListing type="white-paper" />} />
          <Route path="/resources/infographics" element={<ResourceListing type="infographic" />} />
          <Route path="/resources/videos" element={<ResourceListing type="video" />} />
          <Route path="/resources/tools" element={<ResourceListing type="tool" />} />

          {/* Data-driven content pages (hubs, lists, services, articles, legal) */}
          {contentRoutes.map(({ path, Component, page }) => (
            <Route key={path} path={path} element={<Component page={page} />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
