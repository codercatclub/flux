import React, {FC} from 'react';
import './styles.css';

type MyAppProps = {
  Component: typeof React.Component;
  pageProps: string[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MyApp({ Component, pageProps }: MyAppProps): FC {
  return <Component {...pageProps} />;
}
