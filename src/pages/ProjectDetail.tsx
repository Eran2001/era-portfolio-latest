import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react";
import { PROJECTS } from "@/constants/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="heading-2 mb-4">Project Not Found</h1>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="section-container">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link to="/#projects">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  {project.category}
                </Badge>
                <span className="text-sm text-muted-foreground">{project.subtitle}</span>
              </div>

              <h1 className="heading-1 text-foreground mb-6">{project.title}</h1>
              
              <p className="body-large mb-8">{project.longDescription}</p>

              <div className="flex items-center gap-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-primary gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </Button>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-80 lg:h-auto rounded-2xl bg-secondary overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center glow-primary">
                  <span className="text-6xl">{project.technologies[0] === "React" ? "⚛️" : "🚀"}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-glass p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">Key Metrics</h3>
              <div className="space-y-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground capitalize">{key}</span>
                    <span className="font-bold text-gradient">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-glass p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
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
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-glass p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
