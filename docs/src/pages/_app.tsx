import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import theme from '@/theme';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default App;
