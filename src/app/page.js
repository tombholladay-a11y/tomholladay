import Link from 'next/link'

export default function Home() {
  const resources = [
    {
      title: "DriveTime Devotions",
      description: "Daily audio devotionals designed to keep you connected with God's word during your daily commute or quiet time. Group Discussion Guides and full transcripts for all of the Drivetime Devotions audio are included here.",
      tag: "Podcast",
      link: "/drivetime-devotions",
      image: "/images/drivetime-card.jpg",
    },
    {
      title: "Foundations",
      description: "11 Core Truths to Build Your Life On. A comprehensive study of the essential doctrines of the Christian faith.",
      tag: "Study Guide",
      link: "/foundations",
      image: "/images/foundations-cover.jpg",
    },
    {
      title: "Relationship Principles",
      description: "The Relationship Principles of Jesus. Learn how to love others like Jesus loved others through 40 days of focused study.",
      tag: "Book",
      link: "/relationship-principles",
      image: "/images/relationships-card.jpg",
    },
    {
      title: "Small Group Bible Studies",
      description: "Videos and discussion guide links to Tom's Bible studies for small groups, including Great Chapters of the Bible, Passover, Putting it Together Again, Love Powered Parenting and Drivetime Devotions.",
      tag: "Curriculum",
      link: "/small-group-bible-studies",
      image: "/images/smallgroups-card.jpg",
    },
    {
      title: "Putting It Together Again",
      description: "When it seems like it's all fallen apart, God gives hope and encouragement to refresh our hearts and strengthen us to rebuild.",
      tag: "Book",
      link: "/putting-it-together",
      image: "/images/together-card.jpg",
    },
    {
      title: "Devotions Transcripts",
      description: "Dive deeper into your study with full text transcripts for the books of the Bible covered in Drivetime Devotions.",
      tag: "Study Text",
      link: "/transcripts",
      image: "/images/transcripts-card.png",
    },
    {
      title: "About Tom",
      description: "",
      tag: "Pastor & Author",
      link: "/about",
      isAboutCard: true,
    }
  ];

  return (
    <div className="container">
      <div className="page-title">
        <h1>Resources for Your Growth</h1>
      </div>

      <div className="resource-grid">
        {resources.map((resource, index) => (
          <Link href={resource.link} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
            {resource.isAboutCard ? (
              <div className="resource-card" style={{ backgroundColor: 'var(--accent)', flexDirection: 'row', alignItems: 'center', padding: '1.5rem', gap: '1.5rem', height: '100%' }}>
                <img src="/images/Tom.jpg" alt="Tom Holladay" style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '3px solid rgba(255,255,255,0.2)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ color: 'white', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.4', margin: 0 }}>
                    "We proclaim him, admonishing and teaching everyone with all wisdom, so that we may present everyone perfect in Christ. To this end I labor, struggling with all his energy, which so powerfully works in me."
                  </p>
                  <span style={{ color: 'white', display: 'block', marginTop: '0.75rem', fontSize: '0.85rem', fontStyle: 'normal', opacity: 0.9, fontWeight: 'bold' }}>- Colossians 1:28-29</span>
                </div>
              </div>
            ) : (
              <div className="resource-card">
                <div className="resource-image" style={
                  resource.image 
                    ? { backgroundImage: `url(${resource.image})` } 
                    : { backgroundColor: 'var(--accent)' }
                }></div>
                <div className="resource-content">
                  <span className="resource-tag">{resource.tag}</span>
                  <h2>{resource.title}</h2>
                  <p>{resource.description}</p>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
