import Link from 'next/link'

export const metadata = {
  title: 'About Tom Holladay',
  description: 'Tom Holladay is a Teaching Pastor at Saddleback Church, author, and host of DriveTime Devotions. His passion is helping people discover a love for the Bible.',
}

export default function About() {
  return (
    <div className="container">
      <div className="page-title">
        <h1>About Tom</h1>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Tom and his wife Chaundel met in High School then attended college together, becoming engaged their senior year. They have now been married forty-eight years and have three children - Ryan, Alyssa, and Luke. They have eleven grandchildren: Reese, Anna, Kate, Dottie, Amaya, Gabe, Eliana, Simon, Levin, Genevieve and Nora.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Tom earned a BA from California Baptist University (1977), a Master of Divinity from Golden Gate Baptist Theological Seminary in Mill Valley, California (1981) and from there went to pastor a small church in Marysville, CA. for 10 years. During his ministry a flood destroyed the church buildings and many member's homes, and the church relocated and rebuilt and began growing again. He says, <em>"The church grew a little while I was there...and I grew a lot!"</em>
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          In 1991 Tom and Chaundel came to Saddleback Church in Lake Forest, CA. As a now retired Teaching Pastor at Saddleback, he still teaches at Bible studies and leadership studies. He also teaches <strong>DriveTime Devotions</strong>: a daily ten minute Podcast going through the Bible a chapter a week. In addition to his pastoral leadership and teaching ministries at Saddleback through the years, it was Tom's joy to assist Rick Warren in teaching Purpose-Driven Church conferences to Christian leaders all over the world. 
        </p>
        
        <p style={{ marginBottom: '3rem', fontWeight: 'bold', color: 'var(--accent)' }}>
          Tom's passion in ministry is to help people discover a love for the Bible and an understanding of God's truth that changes the way they live.
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
