import '../styles/main.scss'
import NextNprogress from 'nextjs-progressbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition="0.3"
        stopDelayMs="200"
        height="2"
      />
      <Component {...pageProps} />
      {/* <style jsx global>
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style> */}
    </>
  )
}
