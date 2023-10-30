import Head from 'next/head';
import About from '../components/About';
import BlogSection from '../components/Blog/BlogSection';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <>
      <Head>
        <title>Leander Hoedt Portfolio</title>
        <meta name="description"
              content="Portfolio website for a frontend/fullstack developer showcasing skills and past projects."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <About/>
        <BlogSection/>
        <Experience/>
        <Contact/>
      </main>
    </>
  )
}

export default Index;
