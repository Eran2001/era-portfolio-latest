import { motion } from "framer-motion";
import { Briefcase, ExternalLink, MapPin, Calendar } from "lucide-react";
import { EXPERIENCES } from "@/constants/portfolio-data";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="label-mono mb-4">Career Journey</p>
          <h2 className="heading-1">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                <div className="absolute top-2 -left-[5px] w-3 h-3 rounded-full bg-primary glow-primary" />
              </div>

              {/* Content Card */}
              <div className="card-interactive p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="heading-4 text-foreground">{exp.role}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{exp.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="flex items-center gap-1 text-sm">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="body-base mb-4">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 border border-border/50 text-foreground hover:border-primary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
