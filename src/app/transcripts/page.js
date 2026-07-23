import Link from 'next/link'
import transcriptsData from '@/data/transcripts.json'

export const metadata = {
  title: 'Drivetime Devotions Transcripts | Tom Holladay',
  description: 'Full text transcripts of DriveTime Devotions audio organized by Biblical book. Read along or study deeper with transcripts for Genesis, Romans, Psalms, and more.',
}

export default function TranscriptsDirectory() {
  // Convert transcriptsData object into an array and sort by biblical index
  const books = Object.entries(transcriptsData)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => a.index - b.index);

  return (
    <div className="container">
      <div className="page-title">
        <h1>Drivetime Devotions Transcripts</h1>
        <p>Transcripts of Drivetime Devotions Audio</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
          {books.map((book, idx) => (
            <li key={idx} style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <Link 
                href={`/transcripts/${encodeURIComponent(book.name)}`} 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>{book.name}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <Link href="/drivetime-devotions" className="resource-link" style={{ fontSize: '1rem', borderBottom: '2px solid var(--accent)' }}>
            &larr; Back to Devotions
          </Link>
        </div>
      </div>
    </div>
  )
}
