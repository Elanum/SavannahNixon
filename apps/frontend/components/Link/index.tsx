import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';

enum Route {
  Home = '/',
  Shop = '/shop',
  Portfolio = '/portfolio',
  Contact = '/kontakt',
  Impress = '/impressum',
  AboutMe = '/uber-mich',
  Privacy = '/datenschutz',
}

export type Page = keyof typeof Route;

interface LinkProps extends Omit<NextLinkProps, 'href'> {
  page: Page;
  id?: string;
}

const Link: FC<LinkProps> = ({ children, page, id, ...props }) => {
  const href = Route[page];
  const link = id ? `${href}/${id}` : href;

  return (
    <NextLink href={link} {...props}>
      {children}
    </NextLink>
  );
};

export function getPageTitle(page: Page): string {
  switch (page) {
    case 'AboutMe':
      return 'Über Mich';
    default:
      return page;
  }
}

export default Link;
