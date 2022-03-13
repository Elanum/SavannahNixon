import classNames from 'classnames';
import { NextSeo, NextSeoProps } from 'next-seo';
import { FC } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface BaseTemplateProps {
  seo?: NextSeoProps;
}

const BaseTemplate: FC<BaseTemplateProps> = ({ children, seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <header>
        <Navbar />
      </header>
      <main className={classNames('flex-grow')}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BaseTemplate;
