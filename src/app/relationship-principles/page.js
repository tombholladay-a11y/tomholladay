import Link from 'next/link'

export const metadata = {
  title: 'Relationship Principles | Tom Holladay',
  description: 'The Relationship Principles of Jesus by Tom Holladay. Six biblical principles for building stronger relationships, available as a book or a 40 Days of Love church campaign.',
}

export default function RelationshipPrinciples() {
  return (
    <div className="container">
      <div className="page-title">
        <h1>Relationship Principles</h1>
        <p>The Relationship Principles of Jesus</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
        
        <p style={{ marginBottom: '3rem', textAlign: 'center', fontStyle: 'italic' }}>
          <strong>RELATIONSHIP PRINCIPLES OF JESUS</strong> can be read individually or studied together as a church through a "40 Days of Love" campaign. <strong>LOVE POWERED PARENTING</strong> covers these principles especially for parents!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <a href="https://www.amazon.com/Tom-Holladay-Relationship-Principles-Hardcover/dp/B01FMVSJGS/ref=sr_1_3?s=books&sr=1-3" target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/relationship-principles-cover.jpg" 
              alt="Relationship Principles of Jesus Book" 
              style={{ maxWidth: '250px', height: 'auto', border: '1px solid var(--border-color)', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
            />
          </a>
          <a href="https://www.amazon.com/Love-Powered-Parenting-Loving-Jesus-Loves-ebook/dp/B005MQVHTA/" target="_blank" rel="noreferrer">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/love-powered-parenting-cover.jpg" 
              alt="Love Powered Parenting Book" 
              style={{ maxWidth: '250px', height: 'auto', border: '1px solid var(--border-color)', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
            />
          </a>
        </div>

        <p style={{ marginBottom: '3rem', lineHeight: '1.8' }}>
          Based on a study of the life and the teaching of Jesus, these are the six principles that are explored in the books. These are not the only principles that Jesus taught, yet they certainly are at the center of stronger relationships for every one of us.
        </p>

        <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderLeft: '4px solid var(--accent)', marginBottom: '4rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Relationship Principle #1: Place the Highest Value on Relationships</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '0', color: 'var(--text-muted)' }}>
            "Jesus answered, 'The most important command is this: Listen, people of Israel! The Lord our God is the only Lord. Love the Lord your God with all your heart, all your soul, all your mind, and all your strength. The second command is this: Love your neighbor as you love yourself. There are no commands more important than these.'" — Mark 12:29-31 (NCV)
          </p>
        </div>

        <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderLeft: '4px solid var(--accent)', marginBottom: '4rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Relationship Principle #2: Love as Jesus Loves You</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '0', color: 'var(--text-muted)' }}>
            "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another." — John 13:34-35 (NIV)
          </p>
        </div>

        <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-muted)' }}>
          <em>(Read the books to explore all 6 principles!)</em>
        </p>

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <Link href="/" className="resource-link" style={{ fontSize: '1rem', borderBottom: '2px solid var(--accent)' }}>
            &larr; Back to Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
