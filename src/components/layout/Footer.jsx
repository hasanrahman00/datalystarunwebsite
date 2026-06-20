import { Link } from 'react-router-dom'
import { SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/[0.08] pt-16 pb-8 relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Trust Badges Row */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap mb-12 pb-10 border-b border-purple-500/[0.06]">
          {[
            { icon: '🛡️', label: 'GDPR Compliant' },
            { icon: '✅', label: '<1% Bounce Guarantee' },
            { icon: '⚡', label: '48hr Delivery' },
            { icon: '🚫', label: 'No Contracts' },
            { icon: '🔒', label: 'CCPA Compliant' },
          ].map(b => (
            <div key={b.label} className="flex items-center gap-2 text-[0.78rem] text-txt-muted font-medium">
              <span className="text-[1rem]">{b.icon}</span>{b.label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-[10px] flex items-center justify-center text-[0.82rem] font-extrabold text-white">VL</div>
            </Link>
            <p className="text-[0.85rem] text-txt-secondary leading-relaxed max-w-[280px] mb-4">B2B Prospecting Agency helping 5000+ sales teams generate pipeline through data, AI & automation.</p>
            <a href={`mailto:${SITE.email}`} className="text-[0.88rem] text-purple-400 hover:text-purple-300 transition-colors font-medium">{SITE.email}</a>
          </div>
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-txt-muted mb-5">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/dfy-prospecting" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">DFY Prospecting</Link>
              <Link to="/b2b-scraping" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">B2B Scraping</Link>
              <Link to="/sales-nav" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">Sales Nav Scraping</Link>
              <Link to="/local-leads" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">Local Leads</Link>
              <Link to="/ecommerce-prospects" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">Ecommerce Prospects</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-txt-muted mb-5">More</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/waterfall-enrichment" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">Waterfall Enrichment</Link>
              <Link to="/ai-agents" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">Custom AI Agents</Link>
              <a href={SITE.slackUrl} target="_blank" rel="noopener noreferrer" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">Join Slack</a>
              <a href="https://cal.com/vikileads/15min" target="_blank" rel="noopener noreferrer" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">Book a Call</a>
              <a href={`mailto:${SITE.email}`} className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">Contact Us</a>
            </div>
          </div>
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-txt-muted mb-5">Connect</h4>
            <div className="flex flex-col gap-2.5 mb-6">
              <a href={`mailto:${SITE.email}`} className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">📧 {SITE.email}</a>
              <a href={SITE.slackUrl} target="_blank" rel="noopener noreferrer" className="text-[0.88rem] text-txt-secondary hover:text-purple-400 transition-colors">💬 Slack Community</a>
            </div>
            {/* Client logos in footer */}
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-txt-muted mb-3">Trusted By</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {['SaaSGrowth', 'ScaleHQ', 'CloseFast.io'].map(n => (
                <span key={n} className="text-[0.72rem] text-txt-muted/50 font-display font-bold">{n}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-purple-500/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.78rem] text-txt-muted">
          <span>© {new Date().getFullYear()} VikiLeads. All rights reserved.</span>
          <span>Built with precision for B2B teams.</span>
        </div>
      </div>
    </footer>
  )
}
