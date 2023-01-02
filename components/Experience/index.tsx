import {MapPinIcon, ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

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
          <div className="space-y-2">
            <h6>
              <div className="rounded bg-cyan-100 text-cyan-900 font-bold flex justify-between px-6 py-4">
                <span>
                  Senior Frontend Engineer @Ovinto
                </span>
                <span>
                  2020 - Present
                </span>
              </div>
            </h6>
            <div className="rounded bg-cyan-50 text-cyan-900 px-6 py-4 font-normal">
              <div className="flex flex-col space-y-4 py-2">
                <div className="space-x-4 flex">
                  <div className="flex space-x-2">
                    <span>
                      <MapPinIcon className="h-5 w-5 text-cyan-700"/>
                    </span>
                    <span>Aalter, Belgium</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-cyan-700"/>
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
                          <li key={technology} className="px-4 py-1 mb-2 mx-1 rounded-full bg-cyan-700 text-cyan-50 text-sm">
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
          <div className="space-y-2">
            <h6>
              <div className="rounded bg-cyan-100 text-cyan-900 font-bold flex justify-between px-6 py-4">
                <span>
                  Software Developer @Amaron
                </span>
                <span>
                  2015 - 2020
                </span>
              </div>
            </h6>
            <div className="rounded bg-cyan-50 text-cyan-900 px-6 py-4 font-normal">
              <div className="flex flex-col space-y-4 py-2">
                <div className="space-x-4 flex">
                  <div className="flex space-x-2">
                    <span>
                      <MapPinIcon className="h-5 w-5 text-cyan-700"/>
                    </span>
                    <span>Ruiselede, Belgium</span>
                  </div>
                  <div className="flex space-x-2">
                    <span>
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-cyan-700"/>
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
                          <li key={technology} className="px-4 py-1 mb-2 mx-1 rounded-full bg-cyan-700 text-cyan-50 text-sm">
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
