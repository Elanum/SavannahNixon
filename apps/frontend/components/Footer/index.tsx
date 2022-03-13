import classNames from 'classnames';
import { FC, ReactElement } from 'react';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitch,
} from 'react-icons/fa';

const Footer: FC = () => {
  const iconSize = 24;
  const social: Array<{ href: string; icon: ReactElement }> = [
    {
      href: 'https://facebook.com/SavannahNixonPhotography/',
      icon: <FaFacebookSquare size={iconSize} />,
    },
    {
      href: 'https://pinterest.de/SavannahNixonPhotography/',
      icon: <FaPinterest size={iconSize} />,
    },
    {
      href: 'https://instagram.com/savannah_nixon_photography/',
      icon: <FaInstagram size={iconSize} />,
    },
    {
      href: 'https://twitch.tv/savannah_nixon',
      icon: <FaTwitch size={iconSize} />,
    },
    {
      href: 'mailto:savannah.nixon.official@gmail.com',
      icon: <FaEnvelope size={iconSize} />,
    },
  ];

  return (
    <div className={classNames('bg-gray-300')}>
      <div
        className={classNames(
          'container',
          'py-4',
          'flex',
          'justify-center',
          'align-center'
        )}
      >
        <div className={classNames('flex')}>
          {social.map(({ href, icon }) => (
            <a
              key={`footer-social-${href}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={classNames(
                'mx-2',
                'h-8',
                'w-8',
                'flex',
                'w-auto',
                'justify-center',
                'items-center'
              )}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
