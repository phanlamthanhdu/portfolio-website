import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS_BY_CATEGORY } from '../data/portfolio';

export const Projects = () => {
  // Mặc định hiển thị tất cả dự án mà không cần qua bộ lọc state
  const projects = PROJECTS_BY_CATEGORY.all;

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="docker ps -a"
        description="Listing deployed projects and applications"
      />

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden group hover:border-primary-500/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-60" />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                      project.category === 'devops' 
                        ? 'bg-green-500/20 text-green-500 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-500 border border-blue-500/30'
                    }`}>
                      {project.category === 'devops' ? 'DevOps' : 'Full-Stack'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="font-mono text-xl font-bold text-primary-500 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-200 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700 hover:border-primary-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded border border-neutral-700">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-neutral-400 hover:text-primary-500 transition-colors group/btn"
                    >
                      <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-mono">Code</span>
                    </a>
                    
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-neutral-400 hover:text-primary-500 transition-colors group/btn"
                      >
                        <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                        <span className="text-sm font-mono">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {projects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="font-mono text-4xl text-neutral-600 mb-4">404</div>
              <div className="text-neutral-400">No projects found.</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Terminal-style project summary */}
      <section className="py-24 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono"
          >
            <div className="space-y-4">
              <div className="text-accent-500">
                $ cat project_summary.txt
              </div>
              
              <div className="space-y-2 text-neutral-200">
                <div className="flex justify-between">
                  <span>Total Projects:</span>
                  <span className="text-primary-500">{PROJECTS_BY_CATEGORY.all.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>DevOps Projects:</span>
                  <span className="text-primary-500">{PROJECTS_BY_CATEGORY.devops.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Full-Stack Projects:</span>
                  <span className="text-primary-500">{PROJECTS_BY_CATEGORY.fullstack.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Technologies Used:</span>
                  <span className="text-primary-500">
                    {new Set(PROJECTS_BY_CATEGORY.all.flatMap(p => p.technologies)).size}+
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-700 text-sm text-neutral-400">
                <div className="flex items-center space-x-2">
                  <span className="text-accent-500">$</span>
                  <span>echo "Each project demonstrates real-world implementation of cloud-native architecture and modern development practices"</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-bg-elevated to-bg-surface border border-primary-500/20 p-12 rounded-2xl shadow-glow"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              These projects showcase my expertise in DevOps and full-stack development. 
              Let's discuss how we can work together on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/neerajnakka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
              >
                <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View All Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};