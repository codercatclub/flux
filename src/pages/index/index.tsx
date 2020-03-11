import { FC } from 'react';
import s from './index.module.css';

const Index: FC = () => {
  const autoplay = 0;

  return (
    <div className={s.layout}>
      <div className={s.titleContainer}>
        <div className={s.titleBlock}>
          <h1 className={s.title}>FLUX.</h1>
          <h2 className={s.punchline}>join remote revolution</h2>
        </div>
      </div>

      <div className={s.who}>
        <h2>WHO:</h2>
        <p>We are group of travelers, entrepreneurs, engineers and artist.</p>
      </div>
      <div className={s.why}>
        <h2>WHY:</h2>
        <p>
          We believe in remote feature and better lifestyle outside of office
          cubicles.
        </p>
      </div>
      <div className={s.where}>
        <h2>WHERE:</h2>
        <p>Tbilisi, Georgia</p>
      </div>
      <div className={s.when}>
        <h2>WHEN:</h2>
        <p>June 1 - 30, 2020</p>
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

      <div className={s.textBlock2}>
        {' '}
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
      </div>

      <div className={s.event}>
        <div className={s.eventImg}></div>
      </div>

      <div className={s.textBlock1}>
        <h2>What is Flux?</h2>
        <p>
          Flux is a one month gathering of creative and open minded individuals
          in vibrant locations around the world. The main goals are facilitate
          connections, friendship, collaboration, explore new cultures and have
          fun working and living together. Also we like to promote location
          independent life style and cultivate technology, art and peer to peer
          education.
        </p>
      </div>

      <div className={s.person1}>
        <img className={s.avatar} src="kirill_avatar.jpg" alt="Kirill Avatar" />
        <p className={s.bio}>
          There is a question that adult often ask to kids &rdquo;Who do you
          want to be when you grow up?&rdquo; while most of the kids would say a
          fire fighter, a doctor or a policeman, my answer was &rdquo;I want to
          be a robot&rdquo;. I think that by enlarge I succeeded.
        </p>
      </div>

      <div className={s.person2}>
        <img className={s.avatar} src="sneha_avatar.jpg" alt="Kirill Avatar" />
        <p className={s.bio}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quisquam iure aliquid minus! Alias tenetur architecto sint
          perferendis? Adipisci asperiores voluptas saepe eum quae amet fuga
          doloribus nemo. Dolores, aspernatur.
        </p>
      </div>
    </div>
  );
};

export default Index;
