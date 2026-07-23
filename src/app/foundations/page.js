import Link from 'next/link'
import TruthLevelsChart from './TruthLevelsChart'

export const metadata = {
  title: 'Foundations | Tom Holladay',
  description: '11 Core Truths to Build Your Life On. A comprehensive study of the essential doctrines of the Christian faith by Tom Holladay.',
}

export default function Foundations() {
  return (
    <div className="container">
      <div className="page-title">
        <h1>Foundations</h1>
        <p>11 Core Truths to Build Your Life On</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div style={{ flex: '1 1 350px', maxWidth: '450px', margin: '0 auto' }}>
            <a href="https://store.pastors.com/search?q=foundations" target="_blank" rel="noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/foundations-cover.jpg" 
                alt="Foundations Book Cover" 
                style={{ width: '100%', height: 'auto', border: '1px solid var(--border-color)', boxShadow: '0 16px 32px rgba(0,0,0,0.15)', borderRadius: '4px' }}
              />
            </a>
          </div>

          <div style={{ flex: '1 1 350px' }}>
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', display: 'inline-block', fontSize: '1.4rem' }}>
              Four ways to use Foundations:
            </h3>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.15rem' }}>
              <li style={{ marginBottom: '1.5rem' }}>Use the Teacher's Guide and Participant's guide to do a full study for your church.</li>
              <li style={{ marginBottom: '1.5rem' }}>Use the Teacher's guide for your own teaching whenever you teach a doctrine.</li>
              <li style={{ marginBottom: '1.5rem' }}>Read the Teacher's Guide for your own personal study of doctrinal truth.</li>
              <li style={{ marginBottom: '1.5rem' }}>Study the 11 doctrines one at a time in four week studies for your small group.</li>
            </ol>
          </div>
        </div>

        <p style={{ marginBottom: '4rem', textAlign: 'center', fontWeight: 'bold' }}>
          You can find <a href="https://store.pastors.com/search?q=foundations" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Foundations at Pastors.com</a>
        </p>

        <TruthLevelsChart />

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <Link href="/" className="resource-link" style={{ fontSize: '1rem', borderBottom: '2px solid var(--accent)' }}>
            &larr; Back to Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
