import { MapPinIcon, LinkIcon } from "@heroicons/react/24/outline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative pt-24 pb-10 px-4 lg:px-10"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <h1
          className="pb-10 text-4xl tracking-tight text-center font-extrabold tracking-tight text-slate-50 md:text-5xl">
          Professional Experience
        </h1>
        <div className="space-y-6">

          <div className="space-y-1">
            <h6>
              <div className="rounded bg-cyan-100 text-cyan-900 font-bold flex justify-between px-6 py-4">
                <span>
                  Tech & Product · Ella
                </span>
                <span>
                  May 2025 - Present
                </span>
              </div>
            </h6>
            <div className="rounded bg-cyan-50 text-cyan-900 px-6 py-4 font-normal">
              <div className="flex flex-col space-y-4 py-2">
                <div className="space-x-4 flex">
                  <div className="flex space-x-2">
                    <span>
                      <MapPinIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>Kortrijk, Belgium</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      <LinkIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>
                      <a href="https://ella.energy"
                        className="hover:text-cyan-900 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ella.energy
                      </a>
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    As founding engineer, building the digital energy assistant for SMEs at Ella.
                  </div>
                </div>
                <div>
                  <ul className="flex flex-wrap">
                    {
                      ["Next.js", "React", "Python", "MySQL", "Google Vertex AI", "LLM", "Redis", "Azure"].map((technology) => {
                        return (
                          <li key={technology} className="px-4 py-1 mb-2 mx-1 rounded-full bg-cyan-700 text-cyan-50 font-medium text-sm">
                            <span>{technology}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h6>
              <div className="rounded bg-cyan-100 text-cyan-900 font-bold flex justify-between px-6 py-4">
                <span>
                  Freelance Senior Frontend Developer · Nexuzhealth
                </span>
                <span>
                  November 2024 - May 2025
                </span>
              </div>
            </h6>
            <div className="rounded bg-cyan-50 text-cyan-900 px-6 py-4 font-normal">
              <div className="flex flex-col space-y-4 py-2">
                <div className="space-x-4 flex">
                  <div className="flex space-x-2">
                    <span>
                      <MapPinIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>Leuven, Belgium</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      <LinkIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>
                      <a href="https://nexuzhealth.com"
                        className="hover:text-cyan-900 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        nexuzhealth.com
                      </a>
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    Working as Freelance Senior Frontend Developer on the new LIS platform that was being built at Nexuzhealth.
                  </div>
                </div>
                <div>
                  <ul className="flex flex-wrap">
                    {
                      ["TypeScript", "Angular", "Ngrx", "Jest", "Golang", "PostgreSQL", "Google Cloud Platform"].map((technology) => {
                        return (
                          <li key={technology} className="px-4 py-1 mb-2 mx-1 rounded-full bg-cyan-700 text-cyan-50 font-medium text-sm">
                            <span>{technology}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h6>
              <div className="rounded bg-cyan-100 text-cyan-900 font-bold flex justify-between px-6 py-4">
                <span>
                  Freelance Senior Frontend Developer · Cegeka
                </span>
                <span>
                  April 2023 - October 2024
                </span>
              </div>
            </h6>
            <div className="rounded bg-cyan-50 text-cyan-900 px-6 py-4 font-normal">
              <div className="flex flex-col space-y-4 py-2">
                <span className="font-bold">
                  Frontend Developer · National Crisis Center
                </span>
                <div className="space-x-4 flex">

                  <div className="flex space-x-2">
                    <span>
                      <MapPinIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>Brussels, Belgium</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      <LinkIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>
                      <a href="https://crisiscenter.be"
                        className="hover:text-cyan-900 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        crisiscenter.be
                      </a>
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    Developing a national safety platform within which emergency services, governments and partners can prepare for an emergency and where they can exchange information during an emergency.
                  </div>
                </div>
                <div>
                  <ul className="flex flex-wrap">
                    {
                      ["TypeScript", "Angular", "Ngrx", "Jest", "PHP", "Laravel", "PosgreSQL", "Azure"].map((technology) => {
                        return (
                          <li key={technology} className="px-4 py-1 mb-2 mx-1 rounded-full bg-cyan-700 text-cyan-50 font-medium text-sm">
                            <span>{technology}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h6>
              <div className="rounded bg-cyan-100 text-cyan-900 font-bold flex justify-between px-6 py-4">
                <span>
                  Senior Frontend Engineer · Ovinto
                </span>
                <span>
                  December 2020 - April 2023
                </span>
              </div>
            </h6>
            <div className="rounded bg-cyan-50 text-cyan-900 px-6 py-4 font-normal">
              <div className="flex flex-col space-y-4 py-2">
                <div className="space-x-4 flex">
                  <div className="flex space-x-2">
                    <span>
                      <MapPinIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>Aalter, Belgium</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      <LinkIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>
                      <a href="https://ovinto.com"
                        className="hover:text-cyan-900 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ovinto.com
                      </a>
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    Building a large B2B SaaS platform in rail & intermodal freight. On React framework and Java REST
                    API.
                  </div>
                  <div>
                    International chemical clients like INEOS, Evonik, BASF, Solvay, Sabic, ...
                  </div>
                </div>
                <div>
                  <ul className="flex flex-wrap">
                    {
                      ["JavaScript", "React", "NextJS", "Java", "Hibernate", "jOOQ", "Spring Boot", "PosgreSQL", "MongoDB"].map((technology) => {
                        return (
                          <li key={technology} className="px-4 py-1 mb-2 mx-1 rounded-full bg-cyan-700 text-cyan-50 font-medium text-sm">
                            <span>{technology}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h6>
              <div className="rounded bg-cyan-100 text-cyan-900 font-bold flex justify-between px-6 py-4">
                <div>
                  <span>
                    Software Developer · Amaron
                  </span>
                </div>
                <span>
                  Oktober 2014 - November 2020
                </span>
              </div>
            </h6>
            <div className="rounded bg-cyan-50 text-cyan-900 px-6 py-4 font-normal">
              <div className="flex flex-col space-y-4 py-2">
                <div className="space-x-4 flex">
                  <div className="flex space-x-2">
                    <span>
                      <MapPinIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>Ruiselede, Belgium</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      <LinkIcon className="h-5 w-5 text-cyan-800" />
                    </span>
                    <span>
                      <a href="https://amaron.be"
                        className="hover:text-cyan-900 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        amaron.be
                      </a>
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    Building a workflower platform for process automation on BPMN 2.0 standards.
                  </div>
                  <div>
                    Building a formbuilder with drag-n-drop and data exchange.
                  </div>
                  <div>
                    Developing a mobile app on top of Workflower, which was used for tracking medication withing UZ Gent
                    hospital.
                  </div>
                  <div>
                    Clients are hospitals all over Belgium, Netherlands and France.
                  </div>
                </div>
                <div>
                  <ul className="flex flex-wrap">
                    {
                      ["JavaScript", "React", "Redux", "React Native", "Java", "Hibernate", "Wildfly", "PosgreSQL", "MongoDB"].map((technology) => {
                        return (
                          <li key={technology} className="px-4 py-1 mb-2 mx-1 rounded-full bg-cyan-700 text-cyan-50 font-medium text-sm">
                            <span>{technology}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
