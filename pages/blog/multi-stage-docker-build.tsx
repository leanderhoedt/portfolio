import Head from "next/head";

const MultiStageDockerBuild = () => {
  return (
    <>
      <Head>
        <title>Multi-Stage Docker builds</title>
        <meta name="description"
              content="Learn about the benefits of using multistage Docker builds to create modular and efficient Docker images. This guide covers the importance of the order of instructions and stages, as well as best practices for minimizing the number of layers and dependencies in the final image."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="bg-white px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto pb-28">
          <article className="relative pt-10">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
              Multistage Dockerfiles: The Key to Smaller, More Efficient Container Images
            </h1>
            <p className="mt-4 sm:mt-6">
              Docker has revolutionized the way developers build, deploy, and run applications, by providing a
              lightweight and portable way to package applications and their dependencies into self-contained units
              called "containers."
            </p>
            <div className="mt-12 prose prose-slate">
              <h2>Docker builds</h2>
              <p className="mt-4 sm:mt-6">
                One of the key features of Docker is the ability to build Docker images using a declarative, layer-based
                approach. This allows developers to create custom images that include everything needed to run an
                application, including the code, libraries, and runtime dependencies.
              </p>
              <p>
                However, as applications and their dependencies grow in complexity, it can be challenging to create
                efficient Docker images that are small and easy to maintain. This is where multistage Docker builds can
                help.
              </p>
              <h2>
                What are multistage Docker builds?
              </h2>
              <p>
                Multistage Docker builds allow developers to create Docker images that consist of multiple stages, each
                with its own set of instructions. This modular approach to building Docker images can be very useful for
                optimizing the size and efficiency of the final image.
              </p>
              <p>
                For example, a multistage Docker build might have one stage for building the source code of an
                application, and another stage for packaging the application into a runtime image. This allows
                developers to separate the build process from the runtime environment, and to use different base images
                or tools for each stage as needed.
              </p>
              <h2>
                Why use multistage Docker builds?
              </h2>
              <p className="mt-4 sm:mt-6">
                One of the key features of Docker is the ability to build Docker images using a declarative, layer-based
                approach. This allows developers to create custom images that include everything needed to run an
                application, including the code, libraries, and runtime dependencies.
              </p>
              <div
                className="max-w-none prose prose-li:text-gray-600 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-cyan-700">
                <h2>
                  There are several benefits to using multistage Docker builds:
                </h2>
                <ul>
                  <li>
                    <b>Smaller images:</b> By using multiple stages to build and package an application, developers can
                    create smaller and more efficient images that include only the necessary code and dependencies. This
                    can reduce the size of the final image by several hundred MB or more, depending on the complexity of
                    the application.
                  </li>
                  <li>
                    <b>Better separation of concerns:</b> Multistage Docker builds allow developers to separate the
                    build process from the runtime environment, which can make it easier to maintain and update the
                    application. For example, if the build process uses a different base image or tools than the runtime
                    environment, developers can update these components
                  </li>
                </ul>
              </div>
              <p>
                In addition to the benefits of size and efficiency, using multistage Docker builds can also improve the
                security of your Docker images.
              </p>
              <p>
                One of the key security benefits of multistage Docker builds is that they allow developers to separate
                the build environment from the runtime environment. This can help to reduce the attack surface of the
                final image, as it includes only the necessary code and dependencies, and does not include any build
                tools or other unnecessary components.
              </p>
              <p>
                Another security benefit of multistage Docker builds is that they allow developers to use different base
                images for different stages of the build process. For example, a developer might use a more secure base
                image for the runtime stage, in order to reduce the risk of vulnerabilities or exploits.
              </p>
              <p>
                Overall, multistage Docker builds can help developers create more secure Docker images by reducing the
                attack surface and using more secure base images as needed. This can improve the security of the final
                image and reduce the risk of vulnerabilities or exploits in production environments.
              </p>
              <p>
                The following example makes use of multiple microfrontends (React, Angular, ...) that is first build and
                then has its static content served by an <a href="https://nginx.com" target="_blank"
                                                            rel="noreferrer">Nginx</a> server.
              </p>
              <pre>
                <code>
                  {`# Stage 1: Build the microfrontends
FROM node:18-alpine as build

# Install dependencies and build the microfrontends
COPY microfrontend1/package.json microfrontend1/yarn.lock ./microfrontend1/
RUN yarn install --cwd microfrontend1
COPY microfrontend1/ .microfrontend1/
RUN yarn build --cwd microfrontend1

COPY microfrontend2/package.json microfrontend2/yarn.lock ./microfrontend2/
RUN yarn install --cwd microfrontend2
COPY microfrontend2/ .microfrontend2/
RUN yarn build --cwd microfrontend2

# Stage 2: Create the nginx image
FROM nginx:1.19-alpine

# Copy the built microfrontends from the first stage
COPY --from=build /app/microfrontend1/build /usr/share/nginx/html/microfrontend1
COPY --from=build /app/microfrontend2/build /usr/share/nginx/html/microfrontend2

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
                </code>
              </pre>
              <p>
                In the first stage, the Dockerfile installs the dependencies and builds the microfrontends using the
                package.json and yarn.lock files, and the COPY and RUN instructions. The resulting builds are then
                copied to the second stage using the COPY --from=build instructions.
              </p>
              <p>
                In the second stage, the Dockerfile copies the built microfrontends from the first stage to the nginx
                image, and copies the nginx configuration file. It then exposes port
              </p>
              <p>
                When you run this Docker image, it will start an nginx server that serves the built microfrontends as
                static files on port 80. You can access the microfrontends by visiting the appropriate URL in a web
                browser.
              </p>
              <div className="mt-10">
                <h2>Conclusion</h2>
                <p>
                  In conclusion, multistage Docker builds are a powerful tool for creating efficient and modular Docker
                  images. By using multiple stages with specific instructions, developers can separate the build process
                  from the runtime environment, and create smaller and more efficient images that include only the
                  necessary code and dependencies.
                </p>
                <p>
                  In this article, we looked at the benefits of using multistage Docker builds, and how they can help
                  developers optimize the size and efficiency of their Docker images. We also provided an example
                  Dockerfile that shows how to use multistage Docker builds to build and deploy multiple microfrontends
                  as a single unit, using an nginx image to serve the results as static files.
                </p>
                <p>
                  Using multistage Docker builds can greatly improve the performance and scalability of your
                  applications, particularly in production environments. Whether you are building microfrontends or any
                  other type of application, consider using multistage Docker builds to create efficient and modular
                  Docker images.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default MultiStageDockerBuild;

/*
Using a multi-stage Dockerfile to build microfrontends has a number of advantages over using a script file to build everything:

  Ease of use: A Dockerfile is easier to use than a script file, because it can be built with a single command (docker build) and doesn't require you to remember the exact steps to build the microfrontends. This can save time and reduce the risk of errors.

Repeatability: A Dockerfile ensures that the build process is repeatable and deterministic, because it specifies all of the steps required to build the microfrontends. This can be especially useful when building microfrontends in a continuous integration or continuous deployment (CI/CD) pipeline, where it's important to have consistent and reliable builds.

Portability: A Dockerfile makes it easy to build the microfrontends on any machine that has Docker installed, regardless of the operating system or installed dependencies. This can be especially useful when working with a team, because it ensures that everyone is using the same build environment.

  Isolation: A Dockerfile allows you to isolate the build environment from the host machine, which can be helpful if the build process requires certain dependencies or has specific system requirements. This can reduce the risk of conflicts with other software on the host machine.

  Smaller images: A multi-stage Dockerfile allows you to build the microfrontends in one stage and then copy the built files into a smaller, production-ready image in another stage. This can result in smaller, more efficient images that are easier to deploy and manage.*/
