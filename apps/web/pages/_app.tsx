import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageBackground from '../components/PageBackground';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageBackground>
      <Component {...pageProps} />
    </PageBackground>
  );
}

export default MyApp;
