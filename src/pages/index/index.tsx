import { FC } from 'react';
import s from './index.module.css';
import JoinForm from '../../components/JoinForm';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';

const prefix = (name: string): string => `${process.env.prefix}/${name}`;

const Index: FC = () => {
  const autoplay = process.env.isProd ? 1 : 0;

  console.log('[D] autoplay: ', autoplay);
  console.log('[D] prefix: ', process.env.prefix);

  const images = [
    'gallery/img_1.jpg',
    'gallery/img_1.jpg',
    'gallery/img_1.jpg',
    'gallery/img_1.jpg',
    'gallery/img_1.jpg',
    'gallery/img_1.jpg',
    'gallery/img_1.jpg'
  ];

  const galleryElements = images.map(url => (
    <div
      key={`gallery/img_${url}.jpg`}
      className={s.galleryImg}
      style={{ backgroundImage: `url("${url}")` }}
    />
  ));

  return (
    <div className={s.layout}>
      <div className={s.titleContainer}>
        <div className={s.titleBlock}>
          <h1 className={s.title}>FLUX.</h1>
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
          <p>One month coliving and coworking gathering.</p>
        </div>
        <div className={s.statement}>
          <h2>WHY?</h2>
          <p>
            We believe in remote feature and better lifestyle outside of office
            cubicles.
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
            individuals in vibrant locations around the world. The main goals
            are facilitate connections, friendship, collaboration, explore new
            cultures and have fun working and living together. Also we like to
            promote location independent life style and cultivate technology,
            art and peer to peer education.
          </p>
        </div>
        <div className={s.textBlock}>
          <h2>Who is Flux for?</h2>
          <ul>
            <li>
              Beginner and experienced Digital Nomads who is looking to connect
              with local and global community{' '}
            </li>
            <li>
              People who interested in location independent life style but
              doesn&apos;t know where to start
            </li>
            <li>Artists, hackers and technology enthusiast of any kind</li>
          </ul>
          <p>Do not fit to any of these category. 🙂 Don&apos;t worry just drop as a message!</p>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus necessitatibus culpa deserunt et at nulla alias, rem
              vitae, minima error tempore aut nisi eveniet, sit eius ab fugit
              eaque praesentium.
            </p>
            <Button
              className={s.joinButton}
              text="Join"
              onClick={() => console.log('[D] Join button click!')}
            />
          </div>
          <img
            className={s.eventImg}
            src={prefix('tbilisi1.jpg')}
            alt="Tbilisi"
          />
        </div>
      </div>

      <h2 className={s.sectionHeader}>People</h2>

      <div className={s.people}>
        <div className={s.person}>
          <img
            className={s.avatar}
            src={prefix('kirill_avatar.jpg')}
            alt="Kirill Avatar"
          />
          <h3 className={s.personName}>Kirill Kovalevskiy</h3>
          <p className={s.bio}>
            There is a question that adult often ask to kids &rdquo;Who do you
            want to be when you grow up?&rdquo; while most of the kids would say
            a fire fighter, a doctor or a policeman, my answer was &rdquo;I want
            to be a robot&rdquo;. I think that by enlarge I succeeded.
          </p>
        </div>

        <div className={s.person}>
          <img
            className={s.avatar}
            src={prefix('sneha_avatar.jpg')}
            alt="Sneha Avatar"
          />
          <h3 className={s.personName}>Sneha Belkhale</h3>
          <p className={s.bio}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quisquam iure aliquid minus! Alias tenetur architecto sint
            perferendis? Adipisci asperiores voluptas saepe eum quae amet fuga
            doloribus nemo. Dolores, aspernatur.
          </p>
        </div>
      </div>

      <h2 className={s.sectionHeader}>Join</h2>

      <JoinForm containerClass={s.joinForm} />

      <div className={s.footer}></div>
    </div>
  );
};

export default Index;
