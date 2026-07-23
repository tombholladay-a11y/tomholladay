import Link from 'next/link'

export const metadata = {
  title: 'DriveTime Devotions | Tom Holladay',
  description: 'Daily audio devotionals by Tom Holladay — one chapter each week, ten minutes a day. Listen online or download the app on iTunes or Android.',
}

export default function DriveTimeDevotions() {
  return (
    <div className="container">
      <div className="page-title">
        <h1>DriveTime Devotions</h1>
        <p>1 chapter each week - 10 minutes a day!</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/drivetime-banner.jpg" 
            alt="DriveTime Devotions Logo" 
            style={{ maxWidth: '100%', height: 'auto', border: '1px solid var(--border-color)' }}
          />
        </div>

        <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <strong>Go to <a href="http://drivetimedevotions.com/" target="_blank" rel="noreferrer">DriveTimeDevotions</a> for audio devotions on all of the New Testament and many Old Testament books.</strong>
        </p>

        <p style={{ marginBottom: '3rem', textAlign: 'center' }}>
          You can also download the app on iTunes or Android.
        </p>


        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <div style={{ flex: '1 1 300px', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              The purpose of DriveTime Devotions is to help you know God's Word and put it into practice.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Episodes are designed to be listened to once per day, five days a week. That way, you can miss two days each week and still stay on schedule.
            </p>
            <p style={{ marginBottom: '0' }}>
              We believe it's better to study small sections of God's Word each day instead of a larger section once a week. Studying the Bible is like eating—you'll be healthier if you eat small amounts each day rather than one big meal a week!
            </p>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'var(--accent)' }}>
            <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', margin: '0 0 1rem 0', lineHeight: '1.6' }}>
              "But if you look carefully into the perfect law that sets you free, and if you do what it says and don't forget what you heard, then God will bless you for doing it."
            </blockquote>
            <p style={{ margin: 0, fontWeight: 'bold' }}>James 1:25 (NLT)</p>
          </div>
        </div>

        <h3 style={{ marginTop: '4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Prefer to Read?
        </h3>
        <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
          If you like to read your devotions instead of listen, Ephesians and Philippians are available at Pastors.com. Just click on the books below to go to the page.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '5rem', flexWrap: 'wrap' }}>
          <a href="https://store.pastors.com/products/ephesians-six-choices-for-making-the-most-of-what-youve-been-given-hardcover?variant=46680843190491" target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/ephesians-book.jpg" 
              alt="Ephesians Devotional Book" 
              style={{ maxWidth: '250px', height: 'auto', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </a>
          {/* Right hand picture: Philippians */}
          <a href="https://store.pastors.com/products/philippians-devotional-the-eight-places-joy-is-won-or-lost-hardcover" target="_blank" rel="noreferrer">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/philippians-book.jpg" 
              alt="Philippians Devotional Book" 
              style={{ maxWidth: '250px', height: 'auto', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </a>
        </div>

        <h3 style={{ marginTop: '4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          For your Study
        </h3>
        <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
          Dive deeper into your study with full text transcripts for the books of the Bible.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          <Link href="/transcripts" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: 'var(--accent)', color: 'white', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none', textAlign: 'center' }}>
            Download Devotions Transcripts
          </Link>
          <Link href="/small-group-bible-studies#drivetime-companion-studies" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: 'var(--accent)', color: 'white', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none', textAlign: 'center' }}>
            Download Group Study Guides
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <Link href="/" className="resource-link" style={{ fontSize: '1rem', borderBottom: '2px solid var(--accent)' }}>
            &larr; Back to Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
