import Head from "next/head";
import Image from "next/image";


const StranglerFig = () => {
  return (
    <>
      <Head>
        <title>Strangler Fig Pattern</title>
        <meta name="description"
              content="The Strangler Fig pattern is a software design pattern that allows organizations to gradually migrate a legacy system to a new system by wrapping the new functionality around the old system. Combined with microfrontends, a software architecture pattern that involves breaking a monolithic frontend application into smaller, independent units, the Strangler Fig pattern can be used to migrate a legacy system to a new technology stack in a controlled, incremental way, reducing the risk of disruptions and enabling organizations to take advantage of the latest technologies without sacrificing their existing operations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="bg-white px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto pb-28">
          <article className="relative pt-10">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
              The Strangler Fig Pattern and Microfrontends: An Incremental Approach to Migrating a Legacy System
            </h1>

            <p className="mt-4 sm:mt-6">
              Today, I want to talk about the Strangler Fig pattern and how it can be used in combination with
              microfrontends to migrate a legacy system to a new system. I will also share my experience using this
              approach to migrate an AngularJS application to React.
            </p>
            <div className="mt-12 prose prose-slate">
              <h2>Rewrite strategy vs Strangler Fig pattern</h2>
              <p className="mt-4 sm:mt-6">
                When an organization needs to migrate a legacy system to a new system, it has two main options: a
                rewrite strategy or the Strangler Fig pattern.
              </p>
              <p>
                A rewrite strategy involves completely replacing the legacy system with the new system all at once. This
                approach can be attractive because it allows the organization to start fresh with a modern,
                fully-featured system. However, it can also be risky because it requires a significant investment of
                time and resources, and there is a risk of disruptions to the organization&apos;s existing operations during
                the migration process.
              </p>
              <p>
                The Strangler Fig pattern, on the other hand, involves gradually replacing the legacy system with the
                new system by wrapping the new functionality around the old system. This approach allows the
                organization to migrate to the new system in a controlled, incremental way, reducing the risk of
                disruptions to its existing operations. However, it can also be more time-consuming and may require more
                resources than a rewrite strategy, as it involves maintaining both the legacy system and the new system
                during the migration process.
              </p>
              <div
                className="max-w-none prose prose-li:text-gray-600 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-cyan-700">
                <h2>Advantages of a rewrite strategy</h2>
                <ul>
                  <li>
                    Allows the organization to start fresh with a modern, fully-featured system
                  </li>
                  <li>
                    May be faster and require fewer resources than the Strangler Fig pattern
                  </li>
                </ul>
              </div>
              <div
                className="max-w-none prose prose-li:text-gray-600 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-cyan-700">
                <h2>Disadvantages of a rewrite strategy</h2>
                <ul>
                  <li>
                    Risky, as it requires a significant investment of time and resources
                  </li>
                  <li>
                    Risk of disruptions to the organization&apos;s existing operations during the migration process
                  </li>
                </ul>
              </div>
              <div
                className="max-w-none prose prose-li:text-gray-600 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-cyan-700">
                <h2>Advantages of the Strangler Fig pattern</h2>
                <ul>
                  <li>
                    Allows the organization to migrate to the new system in a controlled, incremental way
                  </li>
                  <li>
                    Reduces the risk of disruptions to its existing operations
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 prose prose-slate">
              <h2>Strangler Fig pattern</h2>
              <p>
                First, let&apos;s define the Strangler Fig pattern. This is a software design pattern that involves gradually
                replacing a legacy system with a new system by wrapping the new functionality around the old system.
                This allows organizations to migrate to a new system without disrupting their existing operations or
                incurring the high costs of a complete system overhaul.
              </p>
              <p>
                One potential use case for the Strangler Fig pattern is migrating a legacy application to a new
                technology stack. For example, an organization may have a monolithic Java-based application that it
                wants to migrate to a microservices architecture based on a newer language such as Go. In this
                situation, the organization can use the Strangler Fig pattern to wrap the new Go-based microservices
                around the legacy Java application, gradually replacing more and more of the legacy functionality over
                time.
              </p>
              <p>
                Now, let&apos;s talk about microfrontends and how they can be used with the Strangler Fig pattern.
                Microfrontends is a software architecture pattern that involves breaking a monolithic frontend
                application into smaller, independent units that can be developed, deployed, and maintained
                independently. This allows organizations to adopt a more modular approach to frontend development, which
                can make it easier to migrate a legacy system to a new system using the Strangler Fig pattern.
              </p>
              <p>
                I recently had the opportunity to use the Strangler Fig pattern and microfrontends to migrate an
                AngularJS application to React. The process involved implementing a small number of microfrontends
                around existing AngularJS components, which were built using React. We then gradually replaced more and
                more AngularJS components with microfrontends until the entire frontend application had been migrated to
                React.
              </p>
              <Image
                src="/strangler-fig.png"
                alt="microfrontend AngularJS & React with Bootstrap application"
                width={600}
                height={200}
              />
              <p>
                Using microfrontends in this way had several benefits. It allowed us to take a gradual, incremental
                approach to the migration, which reduced the risk of disruptions to our existing operations. It also
                allowed us to test the new microfrontends in production before fully committing to the migration, which
                helped us identify any issues or bugs before they became major problems.
              </p>
              <p>
                In summary, the Strangler Fig pattern combined with microfrontends is a powerful tool for organizations
                looking to modernize their systems or migrate to a new technology stack. It allows them to do so in a
                controlled, incremental way, reducing the risk of disruptions and enabling them to take advantage of the
                latest technologies without sacrificing their existing operations.
              </p>
              <p>
                I hope you found this information useful! Thank you for reading!
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default StranglerFig;
