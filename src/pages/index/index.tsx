import { FC, useEffect } from 'react';
import useMedia from 'use-media';
import Link from 'next/link';
import Head from 'next/head';
import ReactGA from 'react-ga';
import s from './index.module.css';
import JoinForm from '../../components/JoinForm';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import Logo from '../../components/Logo';
import ImageGrid from '../../components/ImageGrid';

const prefix = (name: string): string => `${process.env.prefix}/${name}`;

const people = [
  {
    name: 'Kirill Kovalevskiy',
    avatar: 'kirill_avatar.jpg',
    bio: `There is a question that adults often ask to kids "Who do you
      want to be when you grow up?". While most of the kids would say
      a fire fighter, a doctor or a policeman, my answer was "I want
      to be a robot". I think that by and large I succeeded.`,
  },
  {
    name: 'Sneha Belkhale',
    avatar: 'sneha_avatar.jpg',
    bio: `A beautiful creature,
      shy on outside but with strong rebel spirit inside,
      and a unique combinations of abilities.
      She creates VR games, generates music with math and code, and
      walks 6 miles a day religiously and eats Trader Joes veggie wrap.
      She is passionate about minimalism and location independent lifestyles.`,
  },
  {
    name: 'Yulia Tolmacheva',
    avatar: 'yulia_avatar.jpg',
    bio: `I'm a UX/UI designer obsessed with translating users design needs
      to empathetic solutions and bridging the gap between users and their goals.
      I try to surround myself with enthusiastic individuals who think differen tly.
      I want to live in a world where we can learn to understand and communicate
      with each other freely, embracing our different cultures.`,
  },
];

const Index: FC = () => {
  const autoplay = process.env.isProd ? 1 : 0;
  const isMobile = useMedia({ maxWidth: 768 });

  const totalImages = 24;
  const galleryElements = [];

  const totalTbilisiImages = 9;
  const tbilisiImages = [];

  useEffect(() => {
    ReactGA.initialize('UA-100222662-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  for (let i = 1; i < totalTbilisiImages + 1; i += 1) {
    tbilisiImages.push(`tbilisi/img_${i}.jpg`);
  }

  for (let i = 1; i < totalImages; i += 1) {
    galleryElements.push(
      <div
        key={i}
        className={s.galleryImg}
        style={{ backgroundImage: `url(gallery/img_${i}.jpg)` }}
      />,
    );
  }

  const peopleElements = people.map(person => (
    <div className={s.person} key={person.name}>
      <img
        className={s.avatar}
        src={prefix(person.avatar)}
        alt={person.avatar}
      />
      <div className={s.personBody}>
        <h3 className={s.personName}>{person.name}</h3>
        <p className={s.bio}>{person.bio}</p>
      </div>
    </div>
  ));

  return (
    <div className={s.layout}>
      <Head>
        <title>Flux.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={s.menu}>
        <Link href={prefix('')}>
          <a className={s.menuItem}>.Home</a>
        </Link>
        <Link href={prefix('about')}>
          <a className={s.menuItem}>.About</a>
        </Link>
      </div>

      <div className={s.titleContainer}>
        <div className={s.titleBlock}>
          <Logo scale={isMobile ? 0.4 : 0.75} />
          <h3 className={s.punchline}>join the remote revolution</h3>
        </div>
      </div>

      <div className={s.statements}>
        <div className={s.statement}>
          <h2>WHO?</h2>
          <p>We are group of travelers, entrepreneurs, engineers and artist.</p>
        </div>
        <div className={s.statement}>
          <h2>WHAT?</h2>
          <p>A one month coliving and coworking gathering.</p>
        </div>
        <div className={s.statement}>
          <h2>WHY?</h2>
          <p>
            We believe in a remote future and balanced lifestyle outside of
            office cubicles.
          </p>
        </div>
        <div className={s.statement}>
          <h2>WHERE?</h2>
          <p>Tbilisi, Georgia</p>
        </div>
        <div className={s.statement}>
          <h2>WHEN?</h2>
          <p>June 1 - 30, 2020</p>
        </div>
      </div>

      <div className={s.videoWrapper}>
        <div className={s.videoOverlay}></div>
        <iframe
          id="video"
          className={s.video}
          width="100%"
          height="600px"
          src={`https://www.youtube.com/embed/TzrbSXzNUhA?autoplay=${autoplay}&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;mute=1&amp;playlist=TzrbSXzNUhA`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      <div className={s.textBlocks}>
        <div className={s.textBlock}>
          <h2>What is Flux?</h2>
          <p>
            Flux is a one month gathering of creative and open minded
            individuals in vibrant locations around the world. We like to
            cultivate a space for technology, art, peer to peer education, and a
            location independent lifestyle. We believe the time spent working
            and living together will facilitate connections, friendship, and
            collaboration.
          </p>
        </div>
        <div className={s.textBlock}>
          <h2>Who is Flux for?</h2>
          <ul>
            <li>
              Digital Nomads who are looking to connect with the local and
              global community{' '}
            </li>
            <li>
              People who are interested in a location independent life style but
              don&apos;t know where to start
            </li>
            <li>Artists, hackers and technology enthusiast of any kind</li>
          </ul>
          <p></p>
        </div>
      </div>

      <Carousel className={s.carousel} height={280}>
        {galleryElements}
      </Carousel>

      <h2 className={s.sectionHeader}>Events</h2>

      <div className={s.events}>
        <div className={s.event}>
          <div className={s.eventContent}>
            <div className={s.eventTitleBlock}>
              <h3>Tbilisi, Georgia</h3>
              <div>09.01 - 09.31. 2020</div>
              <div>Price: $300</div>
            </div>

            <p className={s.eventDescription}>
              Tbilisi, the capital of Georgia, is a unique and uprising
              destination for digital nomads. The combination of low prices, one
              year visas, vibrant culture, and rich young community, makes it a
              perfect spot for a Flux gathering.
            </p>
            <p>
              //TODO: We are very exited to host Flux in Tbilisi and connect
              with other Fluxers and local people.
            </p>
            <p>
              We are renting a large 3 bedroom apartment in the city around
              Fabrika - a famous art and tech hub in Marjanishvili district. It
              is a very walkable area popular among younger locals, located a 25
              minute walk from the Old Town.
            </p>
            <Button
              className={s.joinButton}
              text="Join"
              onClick={(): void => window.scrollTo(0, 9999)}
            />
          </div>
          <ImageGrid className={s.eventImages} urls={tbilisiImages} />
        </div>
      </div>

      <h2 className={s.sectionHeader}>People</h2>
      <div className={s.people}>{peopleElements}</div>

      <h2 className={s.sectionHeader}>Join</h2>
      <JoinForm containerClass={s.joinForm} />

      <div className={s.footer}>
        <div>© 2020 Flux.</div>
        <div>
          Made by{' '}
          <a
            href="https://codercat.tk"
            target="_blank"
            rel="noopener noreferrer"
          >
            CODERCAT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
