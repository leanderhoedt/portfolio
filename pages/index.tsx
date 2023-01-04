import Head from 'next/head'
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
      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go To Top"
        className="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">&uarr;</button>
    </>
  )
}

export default Index;
