import Link from 'next/link'

export const metadata = {
  title: 'Small Group Bible Studies | Tom Holladay',
  description: 'Videos and discussion guide links to Tom Holladay\'s Bible studies for small groups, including Great Chapters of the Bible, Passover, and Love Powered Parenting.',
}

export default function SmallGroupBibleStudies() {
  const studies = [
    {
      videoTitle: "John 15 Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLFBubNFwWcjc",
      pdfTitle: "John 15 Study Guide",
      pdfLink: "/documents/great-chapters/John15 Study Guide -Great Chapters.pdf"
    },
    {
      videoTitle: "Romans 8 Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLYM8SsjuTqeM",
      pdfTitle: "Romans 8 Study Guide",
      pdfLink: "/documents/great-chapters/Romans 8 Study Guide-Great Chapters.pdf"
    },
    {
      videoTitle: "2 Corinthians 4 Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLBVSBY2NI69E",
      pdfTitle: "2 Corinthians 4 Study Guide",
      pdfLink: "/documents/great-chapters/2 Corinthians 4 Study Guide-Great Chapters.pdf"
    },
    {
      videoTitle: "Ephesians 1 Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLbS7fDz3IsA8",
      pdfTitle: "Ephesians 1 Study Guide",
      pdfLink: "/documents/great-chapters/Ephesians 1 Study Guide-Great Chapters.pdf"
    },
    {
      videoTitle: "Philippians 4 Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLGtdo56keXxE",
      pdfTitle: "Philippians 4 Study Guide",
      pdfLink: "/documents/great-chapters/Philippians 4-Study Guide - Great Chapters.pdf"
    },
    {
      videoTitle: "Hebrews 11 Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLHyT6m3FpXw0",
      pdfTitle: "Hebrews 11 Study Guide",
      pdfLink: "/documents/great-chapters/Hebrews 11Study Guide -Great Chapters.pdf"
    }
  ];

  const additional = [
    {
      videoTitle: "Putting It Together Again Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLC-7A05ChNI8",
      pdfTitle: "Putting It Together Again Study Guide",
      pdfLink: "/documents/additional-studies/Putting it Together Again Study Guide.pdf"
    },
    {
      videoTitle: "Passover Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLB4BEGr6f3hU",
      pdfTitle: "Passover Study Guide",
      pdfLink: "/documents/additional-studies/Passover Study Guide.pdf"
    },
    {
      videoTitle: "Love Powered Parenting Video Study",
      videoLink: "https://www.youtube.com/playlist?list=PLe1ZLdjH7Bzs",
      pdfTitle: "Love Powered Parenting Study Guide",
      pdfLink: "/documents/additional-studies/Love Powered Parenting Study Guide.pdf"
    }
  ];

  const drivetime = [
    { title: "Genesis", link: "/documents/drivetime-studies/12_Genesis_Study_Guide.pdf" },
    { title: "Exodus", link: "/documents/drivetime-studies/20_Exodus_Study_Guide.pdf" },
    { title: "Joshua", link: "/documents/drivetime-studies/22_Joshua_Study_Guide.pdf" },
    { title: "Judges", link: "/documents/drivetime-studies/29_Judges_Study_Guide.pdf" },
    { title: "1 & 2 Samuel", link: "/documents/drivetime-studies/24_1_&_2_Samuel_Study_Guide.pdf" },
    { title: "1 & 2 Kings", link: "/documents/drivetime-studies/26_1_&_2_Kings_Study_Guide.pdf" },
    { title: "Nehemiah", link: "/documents/drivetime-studies/28_Nehemiah_Study_Guide.pdf" },
    { title: "Psalms 01-25", link: "/documents/drivetime-studies/32_Psalms_01-25_Study_Guide.pdf" },
    { title: "Psalms 26-50", link: "/documents/drivetime-studies/33_Psalms_26-50_Study_Guide.pdf" },
    { title: "Psalms 51-75", link: "/documents/drivetime-studies/34_Psalms_51-75_Study_Guide.pdf" },
    { title: "Psalms 76-100", link: "/documents/drivetime-studies/35_Psalms_76-100_Study_Guide.pdf" },
    { title: "Psalms 101-125", link: "/documents/drivetime-studies/36_Psalms_101-125_Study_Guide.pdf" },
    { title: "Proverbs", link: "/documents/drivetime-studies/04 Proverbs Drivetime Devotions Guide.pdf" },
    { title: "Isaiah", link: "/documents/drivetime-studies/30_Isaiah_Study_Guide.pdf" },
    { title: "Matthew", link: "/documents/drivetime-studies/25_Matthew_Study_Guide.pdf" },
    { title: "Mark", link: "/documents/drivetime-studies/10_Mark_Study_Guide.pdf" },
    { title: "Luke", link: "/documents/drivetime-studies/17_Luke_Study_Guide.pdf" },
    { title: "John Vol 1", link: "/documents/drivetime-studies/05 John Vol 1 Drivetime Devotions Guide.pdf" },
    { title: "John Vol 2", link: "/documents/drivetime-studies/05 John Vol 2 Drivetime Devotions Guide.pdf" },
    { title: "John Vol 3", link: "/documents/drivetime-studies/05 John Vol 3 Drivetime Devotions Guide.pdf" },
    { title: "Acts", link: "/documents/drivetime-studies/18_Acts_Study_Guide.pdf" },
    { title: "Romans Volume 1", link: "/documents/drivetime-studies/01 Romans Volume 1 Drivetime Devotions Guide.pdf" },
    { title: "Romans Volume 2", link: "/documents/drivetime-studies/01 Romans Volume 2 Drivetime Devotions Guide.pdf" },
    { title: "Romans Volume 3", link: "/documents/drivetime-studies/01 Romans Volume 3 Drivetime Devotions Guide.pdf" },
    { title: "1 Corinthians", link: "/documents/drivetime-studies/19_1_Corinthians_Study_Guide.pdf" },
    { title: "2 Corinthians", link: "/documents/drivetime-studies/21_2_Corinthians_Study_Guide.pdf" },
    { title: "Galatians", link: "/documents/drivetime-studies/11_Galatians_Study_Guide.pdf" },
    { title: "Ephesians", link: "/documents/drivetime-studies/06 Ephesians Drivetime Devotions Guide.pdf" },
    { title: "Philippians", link: "/documents/drivetime-studies/02 Philippians Drivetime Devotions Guide.pdf" },
    { title: "Colossians", link: "/documents/drivetime-studies/08 Colossians_Study_Guide.pdf" },
    { title: "1 Thessalonians", link: "/documents/drivetime-studies/03 1 Thessalonians Drivetime Devotions Guide.pdf" },
    { title: "2 Thessalonians", link: "/documents/drivetime-studies/03a 2 Thessalonians Drivetime Devotions Guide.pdf" },
    { title: "1 Timothy", link: "/documents/drivetime-studies/13_1_Timothy_Study_Guide.pdf" },
    { title: "2 Timothy", link: "/documents/drivetime-studies/14_2_Timothy_Study_Guide.pdf" },
    { title: "Titus Philemon", link: "/documents/drivetime-studies/16_Titus_Philemon_Study_Guide.pdf" },
    { title: "Hebrews", link: "/documents/drivetime-studies/23_Hebrews_Study_Guide.pdf" },
    { title: "James", link: "/documents/drivetime-studies/07 James_Study.pdf" },
    { title: "1 & 2 Peter", link: "/documents/drivetime-studies/27_1_&_2_Peter_Study_Guide.pdf" },
    { title: "1 John", link: "/documents/drivetime-studies/09 1_John_Study.pdf" },
    { title: "Revelation", link: "/documents/drivetime-studies/15_Revelation_Study_Guide.pdf" }
  ];

  const renderList = (items) => (
    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
      {items.map((item, idx) => (
        <li key={idx} style={{ marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
          {item.videoLink && (
            <a 
              href={item.videoLink} 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: item.pdfLink || item.link ? '0.75rem' : '0' }}
            >
              <span style={{ fontWeight: '600' }}>{item.videoTitle}</span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)' }}>YouTube Playlist</span>
            </a>
          )}
          {item.pdfLink ? (
            <a 
              href={item.pdfLink} 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span style={{ fontWeight: '600' }}>{item.pdfTitle}</span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)' }}>Download PDF</span>
            </a>
          ) : item.link && item.link !== '#' ? (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span style={{ fontWeight: '600' }}>{item.title}</span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)' }}>Download PDF</span>
            </a>
          ) : item.title ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span>{item.title}</span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Coming Soon</span>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container">
      <div className="page-title">
        <h1>Small Group Bible Studies</h1>
        <p>Resources and curriculum designed for spiritual growth</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
        
        <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem', marginTop: '2rem' }}>Great Chapters of the Bible</h2>
        {renderList(studies)}

        <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem', marginTop: '3rem' }}>Additional Studies</h2>
        {renderList(additional)}

        <h2 id="drivetime-companion-studies" style={{ color: 'var(--accent)', marginBottom: '1.5rem', marginTop: '3rem' }}>DriveTime Devotions Companion Studies</h2>
        {renderList(drivetime)}

        <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '5rem' }}>
          <Link href="/" className="resource-link" style={{ fontSize: '1rem', borderBottom: '2px solid var(--accent)' }}>
            &larr; Back to Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
