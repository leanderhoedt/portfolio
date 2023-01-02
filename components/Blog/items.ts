const blogItems = [
  {
    id: 'strangler-fig',
    category: 'article',
    title: 'The Strangler Fig Pattern and Microfrontends: An Incremental Approach to Migrating a Legacy System',
    description: 'The Strangler Fig pattern allows organizations to migrate legacy systems to new systems incrementally, using microfrontends to break up monolithic frontend applications into smaller, independent units. This approach reduces the risk of disruptions and enables organizations to take advantage of the latest technologies without sacrificing their existing operations.',
    href: '/blog/strangler-fig',
  }, {
    id: 'multi-stage-docker-build',
    category: 'article',
    title: 'Multistage Dockerfiles: The Key to Smaller, More Efficient Container Images',
    description: 'Multistage Docker builds, use multiple stages with specific instructions to create modular Docker images. The order of these instructions and stages is important for building an optimized final image. By minimizing the number of layers and dependencies, developers can create efficient images that improve the performance and scalability of their applications.',
    href: '/blog/multi-stage-docker-build',
  }, {
    id: 'core-web-vitals',
    category: 'article',
    title: 'Core Web Vitals',
    description: 'Core Web Vitals are metrics that measure website performance, speed, and user experience. They include Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). These metrics help identify and optimize key performance issues, user experience and are important for both SEO and user satisfaction.',
    href: '/blog/core-web-vitals'
  }, {
    id: 'application-security-testing',
    category: 'article',
    title: 'Application Security Testing: A Comparison of SAST, DAST, IAST, and RASP',
    description: 'SAST, DAST, IAST, and RASP are security tools used to identify vulnerabilities in applications. SAST analyzes source code, DAST analyzes runtime behavior, IAST combines both, and RASP protects in real-time. Together, they help create more secure and robust applications.',
    href: '/blog/application-security-testing'
  }
];

export {
  blogItems
}
