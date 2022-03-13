import classNames from 'classnames';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from '../components/Link';
import Slider from '../components/Slider';
import SavannahImage from '../public/savannah.jpg';
import BaseTemplate from '../templates/BaseTemplate';

interface HomePageProps {
  portfolioImages: string[];
}

const HomePage: NextPage<HomePageProps> = ({ portfolioImages }) => {
  return (
    <BaseTemplate>
      <section className={classNames('bg-black', 'py-0')}>
        <div className={classNames('container', 'px-0')}>
          <video
            className={classNames('object-cover', 'w-full')}
            muted
            controls
            src="/image-movie.mp4"
            autoPlay
            loop={false}
          />
        </div>
      </section>
      <section
        className={classNames(
          'container',
          'grid',
          'grid-cols-1',
          'items-center',
          'sm:grid-cols-3'
        )}
      >
        <div>
          <Image src={SavannahImage} alt="Savannah Nixon" objectFit="contain" />
        </div>
        <div className={classNames('sm:col-span-2', 'sm:px-8')}>
          <h1>Über Mich</h1>
          <p>
            Hi, ich bin Savannah und die Fotografin von Savannah Nixon
            Photography.
          </p>
          <p>
            Meinen Traumberuf Fotografin hatte seinen Anfang tatsächlich vor der
            Kamera. 2012 hatte ich angefangen immer wieder als Model vor der
            Kamera zu stehen. Meistens fanden diese Fotoshootings spontan mit
            Freundinnen statt. Nach kürzester Zeit begann ich, mehrere solche
            Shootings zu planen und mir mehr Gedanken bezüglich der Outfits und
            Locations zu machen. Die Fotoshootings wurden immer detailreicher
            und fanden häufiger statt. Nach einiger Zeit habe ich auch begonnen,
            mir einen Fundus für Shootings anzulegen und noch aktiver als Model
            vor der Kamera anderer Fotografen zu stehen. Auch hinter der Kamera
            stand ich immer öfter und fand großen Spaß an Fotoshootings und der
            Bildbearbeitung.
          </p>
          <Link page="AboutMe">
            <a>Mehr erfahren...</a>
          </Link>
        </div>
      </section>
      <section className={classNames('bg-gray-200')}>
        <div className={classNames('container', 'text-center')}>
          <h1>Portfolio</h1>
          <div>
            <Slider
              grabCursor
              scrollbar
              slides={portfolioImages.map((src, index) => (
                <div key={`portfolio-img-${src}`}>
                  <Image
                    src={src}
                    width={300}
                    height={300}
                    objectFit="cover"
                    alt={`img-${index}`}
                  />
                </div>
              ))}
            />
          </div>
          <Link page="Portfolio">
            <a>Zum Portfolio</a>
          </Link>
        </div>
      </section>
      <section className={classNames('container')}>
        <h1>News & Updates</h1>
        <Link page="News">
          <a>Alle News & Updates</a>
        </Link>
      </section>
    </BaseTemplate>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const props: HomePageProps = {
    portfolioImages: [
      'https://via.placeholder.com/300x300?text=img+0',
      'https://via.placeholder.com/300x300?text=img+1',
      'https://via.placeholder.com/300x300?text=img+2',
      'https://via.placeholder.com/300x300?text=img+3',
      'https://via.placeholder.com/300x300?text=img+4',
    ],
  };

  return { props };
};

export default HomePage;
