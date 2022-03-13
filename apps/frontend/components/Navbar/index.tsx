import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import Logo from '../../public/logo-black.png';
import Link, { getPageTitle, Page } from '../Link';

const Navbar: FC = () => {
  const navbarLinks: Page[] = ['AboutMe', 'Portfolio', 'Shop'];

  return (
    <div
      className={classNames(
        'h-16',
        'bg-white',
        'shadow',
        'flex',
        'items-center'
      )}
    >
      <nav className={classNames('container', 'flex')}>
        <div className={classNames('flex-grow')}>
          <Link page="Home">
            <a>
              <Image
                src={Logo}
                alt="Savannah Nixon Photography"
                width={160}
                height={40}
                priority
              />
            </a>
          </Link>
        </div>
        <ul className={classNames('flex', 'items-center')}>
          {navbarLinks.map((page) => (
            <li key={`navbar-link-${page}`} className={classNames('ml-2')}>
              <Link page={page}>
                <a>{getPageTitle(page)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
