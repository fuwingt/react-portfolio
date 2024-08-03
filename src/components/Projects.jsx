import { motion } from "framer-motion"
import { PROJECTS } from "../constants"

const Projects = () => {
  return (
      <div className="border-b border-neutral-900 pb-4">
          <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="my-20 text-center text-4xl">
              Projects
          </motion.h1>
          <div>
              {PROJECTS.map((project, index) => (
                  <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                      <motion.div
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1 }}
                          className="w-full lg:w-1/4">
                          <img
                              src={project.image}
                              width={150}
                              height={150}
                              alt={project.title}
                              className="mbm-6 rounded" />
                      </motion.div>
                      <motion.div
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: 100 }}
                          transition={{ duration: 1 }}
                          className="w-full max-w-xl lg:w-3/4">
                          <h6 className="mb-2 font-semibold">{project.title}</h6>
                          <p className="mb-4 text-netural-400">{project.description}</p>
                          {project.gameplay && (
                              <>
                                <span className="mb-4 text-netural-400">Gameplay: </span>
                                <a href={project.gameplay} className="text-teal-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                      Youtube
                                </a>
                              </>
                          )}
                          {
                            project.technologies.map((tech, index) => (
                                <>
                                    <h6 className="mt-4 font-semibold">
                                        {tech.title}
                                    </h6>
                                    <p key={index} className="mb-2 text-neutral-400">• {tech.desc}</p>
                                    {tech.skills?.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-500">
                                        {skill}
                                    </span>
                                    ))}
                                </>
                            ))
                          }
                      </motion.div>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Projects