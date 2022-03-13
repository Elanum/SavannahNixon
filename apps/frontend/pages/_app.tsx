import classNames from 'classnames';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const title = 'Savannah Nixon Photography';
  const description = 'Savannah Nixon Photography';

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${title}`}
        defaultTitle={title}
        description={description}
        openGraph={{ type: 'website', title, description }}
      />
      <main className={classNames('flex', 'flex-col', 'min-h-screen')}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
