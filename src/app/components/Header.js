'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          Tom Holladay
        </Link>
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={menuOpen ? 'nav-open' : ''}>
          <ul>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/drivetime-devotions" onClick={() => setMenuOpen(false)}>Drivetime Devotions</Link></li>
            <li><Link href="/foundations" onClick={() => setMenuOpen(false)}>Foundations</Link></li>
            <li><Link href="/relationship-principles" onClick={() => setMenuOpen(false)}>Relationship Principles</Link></li>
            <li><Link href="/small-group-bible-studies" onClick={() => setMenuOpen(false)}>Small Groups</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
