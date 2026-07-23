import Link from 'next/link'
import transcriptsData from '@/data/transcripts.json'

export async function generateMetadata({ params }) {
  const { book } = await params;
  const bookName = decodeURIComponent(book);
  return {
    title: `${bookName} Transcripts | Tom Holladay`,
  }
}

export function generateStaticParams() {
  return Object.keys(transcriptsData).map((book) => ({
    book: book,
  }))
}

export default async function BookTranscripts({ params }) {
  const { book } = await params;
  const bookName = decodeURIComponent(book);
  const bookData = transcriptsData[bookName];

  if (!bookData) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h1>Book not found</h1>
        <Link href="/transcripts">&larr; Back to Transcripts</Link>
      </div>
    );
  }

  // Sort weeks numerically
  const sortedWeeks = Object.keys(bookData.weeks)
    .map(Number)
    .sort((a, b) => a - b);

  // Formatting helper logic
  const getChapterHeader = (book, week) => {
    // Hide headers for specific books
    if (book.includes('Psalms') || book === 'Proverbs' || book === 'NT Survey' || book === 'Luke & Acts') {
      return null;
    }

    if (book === 'Romans') {
      if (week <= 7) return `Chapter ${week}`;
      if (week === 8) return `Romans 8 Part 1`;
      if (week === 9) return `Romans 8 Part 2`;
      if (week >= 10) return `Chapter ${week - 1}`;
    }
    return `Chapter ${week}`;
  };

  return (
    <div className="container">
      <div className="page-title">
        <h1>{bookName}</h1>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/transcripts" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            &larr; Back to Books
          </Link>
        </div>

        {(() => {
          const renderWeekBlock = (keyPrefix, week, filesToRender) => {
            if (!filesToRender || filesToRender.length === 0) return null;
            return (
              <div key={`${keyPrefix}-${week}`} style={{ marginBottom: '2rem' }}>
                {getChapterHeader(bookName, week) && (
                  <h2 style={{ 
                    color: 'var(--accent)', 
                    borderBottom: '2px solid var(--border-color)', 
                    paddingBottom: '0.5rem',
                    marginBottom: '1.5rem',
                    marginTop: '2rem'
                  }}>
                    {getChapterHeader(bookName, week)}
                  </h2>
                )}
                
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {filesToRender.map((fileObj, idx) => (
                    <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <a 
                        href={fileObj.path} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ fontWeight: '600' }}
                      >
                        &#128196; {fileObj.filename}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          };

          if (bookName === 'Luke & Acts') {
            return (
              <>
                <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f9f9f9', borderLeft: '4px solid var(--accent)' }}>
                  <h3 style={{ margin: 0 }}>Luke and Acts</h3>
                </div>
                {sortedWeeks.map(week => {
                  const files = bookData.weeks[week].filter(f => f.filename.toLowerCase().includes('luke and acts'));
                  return renderWeekBlock('luke', week, files);
                })}

                <div style={{ marginBottom: '2rem', marginTop: '4rem', padding: '1rem', backgroundColor: '#f9f9f9', borderLeft: '4px solid var(--accent)' }}>
                  <h3 style={{ margin: 0 }}>Acts</h3>
                </div>
                {sortedWeeks.map(week => {
                  const files = bookData.weeks[week].filter(f => !f.filename.toLowerCase().includes('luke and acts') && f.filename.toLowerCase().includes('acts'));
                  return renderWeekBlock('acts', week, files);
                })}
              </>
            );
          }

          return sortedWeeks.map(week => renderWeekBlock('default', week, bookData.weeks[week]));
        })()}


        <div style={{ textAlign: 'center', marginBottom: '5rem', marginTop: '5rem' }}>
          <Link href="/transcripts" className="resource-link" style={{ fontSize: '1rem', borderBottom: '2px solid var(--accent)' }}>
            &larr; Back to All Transcripts
          </Link>
        </div>
      </div>
    </div>
  )
}
