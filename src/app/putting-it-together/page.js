import Link from 'next/link'

export const metadata = {
  title: 'Putting It Together Again | Tom Holladay',
  description: 'When it seems like it\'s all fallen apart, God gives hope and encouragement to rebuild. A book by Tom Holladay based on the book of Nehemiah.',
}

export default function PuttingItTogether() {
  return (
    <div className="container">
      <div className="page-title">
        <h1>Putting It Together Again</h1>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', fontSize: '1.1rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start', padding: '0 2rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <a href="https://www.amazon.com/Putting-Together-Again-Fallen-Apart/dp/0310350395/" target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/putting-it-together-cover.jpg" 
              alt="Putting It Together Again Book" 
              style={{ width: '100%', height: 'auto', border: '1px solid var(--border-color)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
            />
          </a>
        </div>

        <div style={{ flex: '2 1 400px', textAlign: 'left', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            We're all given some life messages from God, often out of the struggles that he takes us through. This book began 30 years ago, when Chaundel and I went through a flood that destroyed our home, church and many of our member's homes.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            As a young pastor, I needed to encourage the people in our church as they began to rebuild. Reading through the book of Nehemiah; chapter 2, verse 20 hit me like an electric jolt. "The God of Heaven will give us success. We his servants will start rebuilding."
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The principles that we learned and taught during that time from Nehemiah have been an encouragement many times through our lives. And they have shown us how to encourage others as they've rebuilt relationships, careers and lives.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            This book is especially for those who don't think they have the energy or faith to get started again, with prayers that God will give a strength to rebuild that is above any we could manufacture on our own. <em>"For the joy of the LORD is your strength!” Nehemiah 8:10 (NLT)</em>
          </p>
        </div>
      </div>

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <Link href="/" className="resource-link" style={{ fontSize: '1rem', borderBottom: '2px solid var(--accent)' }}>
            &larr; Back to Resources
          </Link>
        </div>
    </div>
  )
}
