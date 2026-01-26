import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/constants/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label-mono mb-4">Portfolio</p>
          <h2 className="heading-1 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="body-large max-w-2xl">
            A selection of projects that showcase my expertise in building 
            scalable, performant, and user-centric applications.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto bg-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <span className="text-4xl">{project.technologies[0] === "React" ? "⚛️" : "🚀"}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                  </div>

                  <h3 className="heading-3 text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="body-base mb-6">{project.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-lg font-bold text-gradient">{value}</p>
                        <p className="text-xs text-muted-foreground capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 border border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <Link to={`/project/${project.id}`}>
                      <Button variant="outline" className="gap-2 group/btn">
                        View Details
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="heading-3 text-foreground">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-interactive p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="border-border/50">
                  {project.category}
                </Badge>
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <Link to={`/project/${project.id}`}>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
              </Link>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
