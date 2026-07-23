export default function TruthLevelsChart() {
  const chartData = [
    {
      course: "COURSE 1",
      topics: [
        {
          doctrine: "THE BIBLE",
          learn: "The Bible is God's perfect guidebook for living.",
          love: "I can make the right decision.",
          live: "I will consult the Bible for guidance in my decision about _______________."
        },
        {
          doctrine: "GOD",
          learn: "God is bigger and better and closer than I can imagine.",
          love: "The most important thing about me is what I believe about God.",
          live: "When I see how great God is, it makes _______________ look small."
        },
        {
          doctrine: "JESUS",
          learn: "Jesus is God showing himself to us.",
          love: "God wants me to know him better.",
          live: "I will get to know Jesus through a daily quiet time."
        },
        {
          doctrine: "THE HOLY SPIRIT",
          learn: "God lives in me and through me now.",
          love: "I am a temple of God's Holy Spirit.",
          live: "I will treat my body like the temple it is by _______________."
        },
        {
          doctrine: "CREATION",
          learn: "Nothing \"just happened.\" God created it all.",
          love: "I have a purpose in this world.",
          live: "The reason I exist is to _______________."
        }
      ]
    },
    {
      course: "COURSE 2",
      topics: [
        {
          doctrine: "SALVATION",
          learn: "Grace is the only way to have a relationship with God.",
          love: "I am an object of God's grace.",
          live: "I'll stop seeing _______________ as a way to earn my salvation. I'll begin doing it simply in appreciation for God's grace."
        },
        {
          doctrine: "SANCTIFICATION",
          learn: "Faith is the only way to grow as a believer.",
          love: "I grow when I see myself in a new way.",
          live: "I'll spend more time listening to what God's Word says about me and less time listening to what the world says about me."
        },
        {
          doctrine: "GOOD AND EVIL",
          learn: "God has allowed evil to provide us with a choice. God can bring good even out of evil events. God promises victory over evil to those who choose him.",
          love: "All things work together for good.",
          live: "I am battling evil as I face _______________. I will overcome evil with good by _______________."
        },
        {
          doctrine: "THE AFTERLIFE",
          learn: "Heaven and hell are real places. Death is a beginning, not the end.",
          love: "I can face death with confidence.",
          live: "I will have a more hopeful attitude toward _______________."
        }
      ]
    },
    {
      course: "COURSE 3",
      topics: [
        {
          doctrine: "THE CHURCH",
          learn: "The only true \"world superpower\" is the church.",
          love: "The best place to invest my life is in God's church.",
          live: "I need to make a deeper commitment to the church by _______________."
        },
        {
          doctrine: "THE SECOND COMING",
          learn: "Jesus is coming again to judge this world and to gather God's children.",
          love: "I want to be living alertly for him when he comes.",
          live: "Someone I can encourage with the hope of the Second Coming is _______________."
        }
      ]
    }
  ];

  return (
    <div style={{ marginTop: '4rem', marginBottom: '4rem', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
      <div style={{ backgroundColor: 'var(--accent)', color: 'white', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Building a Foundation That Lasts <span style={{ opacity: 0.7 }}>//</span> Three Levels of Truth
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.6', opacity: 0.9, margin: 0 }}>
          Here's a brief look at what we'll be studying together. This chart helps you to see the different levels of learning that go along with grasping a truth. Being able to quote a truth does not mean I've fully grasped that truth.
        </p>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid var(--border-color)' }}>
              <th style={{ width: '40px', padding: '1rem 0.5rem' }}></th>
              <th style={{ padding: '1rem', fontWeight: 'bold', width: '18%' }}>TO GRASP A<br/>DOCTRINE I MUST...</th>
              <th style={{ padding: '1rem', fontWeight: 'bold', width: '27%' }}>LEARN IT<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal', textTransform: 'uppercase', color: 'var(--text-muted)' }}>(Understand the Truth)</span></th>
              <th style={{ padding: '1rem', fontWeight: 'bold', width: '25%' }}>LOVE IT<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal', textTransform: 'uppercase', color: 'var(--text-muted)' }}>(Change my Perspective)</span></th>
              <th style={{ padding: '1rem', fontWeight: 'bold', width: '30%' }}>LIVE IT<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal', textTransform: 'uppercase', color: 'var(--text-muted)' }}>(Apply it to Life)</span></th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((courseBlock, courseIndex) => (
              courseBlock.topics.map((topic, topicIndex) => (
                <tr key={`${courseIndex}-${topicIndex}`} style={{ borderBottom: '1px solid #eee' }}>
                  {topicIndex === 0 && (
                    <td 
                      rowSpan={courseBlock.topics.length} 
                      style={{ 
                        backgroundColor: courseIndex % 2 === 0 ? '#e9ecef' : '#dee2e6',
                        color: 'var(--text-color)',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        position: 'relative'
                      }}
                    >
                      <div style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                        {courseBlock.course}
                      </div>
                    </td>
                  )}
                  <td style={{ padding: '1.5rem 1rem', fontWeight: 'bold', fontSize: '0.9rem' }}>{topic.doctrine}</td>
                  <td style={{ padding: '1.5rem 1rem', lineHeight: '1.5' }}>{topic.learn}</td>
                  <td style={{ padding: '1.5rem 1rem', lineHeight: '1.5' }}>{topic.love}</td>
                  <td style={{ padding: '1.5rem 1rem', lineHeight: '1.5' }}>{topic.live}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
