import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";
import { PERSONAL_INFO, TECH_STACK } from "@/constants/portfolio-data";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Building cohesive design languages that scale across products.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Obsessed with Core Web Vitals and delivering fast experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Bridging design and engineering to ship exceptional products.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label-mono mb-4">About Me</p>
          <h2 className="heading-1 mb-6">
            Crafting Digital<br />
            <span className="text-gradient">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="body-large"
            >
              {PERSONAL_INFO.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-base"
            >
              When I'm not coding, you'll find me contributing to open source, 
              writing technical articles, or exploring new technologies. I believe 
              in continuous learning and sharing knowledge with the community.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm font-medium text-foreground mb-4">Tech I love working with:</p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border/50 text-sm text-foreground hover:border-primary/50 transition-colors cursor-default"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="card-interactive p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary/60 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
