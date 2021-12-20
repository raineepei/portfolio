import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from './Pages/Hero/Hero';
import Projects from '../pages/Pages/Projects/Projects';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
    </Layout>
  );
};

export default Home;
