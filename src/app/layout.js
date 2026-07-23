import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Tom Holladay | Resources',
  description: 'Encouragement for all those serving on the staff of a church, whether paid or volunteer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Tom Holladay. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
