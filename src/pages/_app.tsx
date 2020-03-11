import React, { FC } from 'react';
import './styles.css';

type MyAppProps = {
  Component: typeof React.Component;
  pageProps: string[];
};

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;