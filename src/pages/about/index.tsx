import { FC } from 'react';
import s from './index.module.css';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { prefix } from '../../utils';

const About: FC = () => {
  return (
    <div className={s.container}>
      <Menu activeRoute='/about' />
      <div className={s.center}>
        <h1>Why we are making Flux.</h1>
        <p>
          The are many &quot;Digital Nomad retreats&quot; or groups out there.
          We find all of them quite similar to each other. Often they operate as
          a business that offers retreat services to individuals.
        </p>
        <p>
          Our goal is not to go such a way. We are non profit community that
          values inclusion first. We believe that no one needs $20k in their
          bank account to be able to travel comfortably. In fact, you should be
          able to join even if you have no money. We also believe that most of
          the jobs today can be done remotely because they primarily involve
          computers or communication. We think, that technology as a whole is
          moving society towards elimination of boring repetitive task and
          creating more creative and passive income opportunities.{' '}
        </p>
        <div className={s.imgBlock}>
          <img src={prefix('/vr_tea.jpg')} alt="VR Tea" />
          <img src={prefix('/vr_school.jpg')} alt="VR School" />
        </div>
        <p>
          Being remote seems exciting because instead of been stuck in one
          particular place, now the whole world is accessible. However since
          there is no mandatory place to go anymore, no coworkers, and no
          defined schedule, many people (including ourselves) find themself
          isolated and unmotivated. So, over the past 3 years we&apos;ve been
          exploring different approaches of self scheduling, self motivation and
          proactive behavior. We explored different ways to engage with a local
          community, using tools such as Meetup, Couchsurfing and Workaway.
          Although we have had some cool experiences and met some very cool
          people, we always find it difficult to find like minded people, and
          most importantly, maintain those connections.
        </p>
        <div className={s.imgBlock}>
          <img src={prefix('/kirill_miami.jpg')} alt="Kirill Image" />
          <img src={prefix('/snay_miami.jpg')} alt="Sneha Image" />
        </div>
        <p>
          Flux is our attempt to cultivate like minded community and maintain
          friendships through recurring events and mutual interests. Our goal is
          to create a network of sustainable and self guided colivings around
          the work where the new remote generation can share their experiences,
          live and work together.
        </p>

        <p className={s.sign}>Kirill & Sneha</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
