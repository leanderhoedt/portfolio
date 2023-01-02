import Head from "next/head";
import Image from "next/image";

const CoreWebVitals = () => {
  return (
    <>
      <Head>
        <title>Core Web Vitals</title>
        <meta name="description"
              content="Core Web Vitals are metrics that measure website performance, speed, and user experience. They include Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). These metrics help identify and optimize key performance issues, user experience and are important for both SEO and user satisfaction."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="bg-white px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto pb-28">
          <article className="relative pt-10">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
              Core Web Vitals
            </h1>
            <p className="mt-4 sm:mt-6">
              As the digital landscape continues to evolve, the importance of website performance, speed, and user
              experience has become increasingly clear. In response to this need, Google has introduced a new set of
              metrics known as Core Web Vitals, which aim to measure the key aspects of a website's user experience.
            </p>
            <div className="mt-12 prose prose-slate">
              <Image
                src="/core-web-vitals.png"
                alt="Core Web Vitals"
                width={700}
                height={200}
              />
              <p className="mt-4">
                Core Web Vitals are made up of three key metrics: Largest Contentful Paint (LCP), First Input Delay
                (FID), and Cumulative Layout Shift (CLS). These metrics are designed to measure the performance, speed,
                and stability of a website, respectively, and can provide valuable insights into how well a website is
                meeting the needs of its users.
              </p>
              <p>
                <b>Largest Contentful Paint (LCP)</b> measures the time it takes for the main content of a page to load,
                and is
                an important factor in the perceived speed and performance of a website. A good LCP score is typically
                under 2.5 seconds, and a score above 4 seconds is considered poor.
              </p>
              <p>
                <b>First Input Delay (FID)</b> measures the time it takes for a page to respond to user input, and is an
                important factor in the perceived interactivity and responsiveness of a website. A good FID score is
                typically under 100 milliseconds, and a score above 300 milliseconds is considered poor.
              </p>
              <p>
                <b>Cumulative Layout Shift (CLS)</b> measures the stability of a page as it loads, and is an important
                factor
                in the perceived user experience of a website. A good CLS score is typically under 0.1, and a score
                above 0.25 is considered poor.
              </p>
              <p>
                In addition to these three key metrics, Google also provides a number of other performance metrics and
                tools that can help developers understand and optimize the user experience of their websites. These
                tools include the <a href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer">PageSpeed
                Insights tool</a>, the <a href="https://developer.chrome.com/docs/lighthouse/overview/" target="_blank"
                                          rel="noreferrer">Lighthouse tool</a>, and the Chrome DevTools performance
                panel.
              </p>
              <div className="mt-10">
                <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fleanderhoedt.dev%2F"
                   target="_blank"
                   rel="noreferrer"
                >
                    Test my portfolio
                </a>
              </div>
            </div>

          </article>
        </div>
      </div>
    </>
  )
}
export default CoreWebVitals;
