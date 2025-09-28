import '../styles/globals.css'
import BottomNav from '../components/BottomNav'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50 main-with-bottom-nav">
      <Component {...pageProps} />
      <BottomNav />
    </div>
  )
}

export default MyApp
