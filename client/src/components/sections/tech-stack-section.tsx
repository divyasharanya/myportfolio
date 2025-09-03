import { motion } from "framer-motion";
import { 
  SiPython, 
  SiReact, 
  SiOracle, 
  SiMysql, 
  SiMongodb, 
  SiGit, 
  SiTailwindcss, 
  SiSpring, 
  SiTensorflow, 
  SiOpenai,
  SiJavascript
} from "react-icons/si";
import { Database, Server, ChartLine, Brain, Code2, Bot, Settings, Monitor, Coffee } from "lucide-react";

interface TechCategory {
  title: string;
  technologies: Array<{
    name: string;
    icon: any;
    color: string;
  }>;
}

const techStack: TechCategory[] = [
  {
    title: "Backend",
    technologies: [
      { name: "Java", icon: Coffee, color: "text-red-500" },
      { name: "Spring Boot", icon: SiSpring, color: "text-green-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "PyQt6", icon: Code2, color: "text-blue-500" },
    ]
  },
  {
    title: "Databases",
    technologies: [
      { name: "Oracle DB", icon: SiOracle, color: "text-red-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "JDBC", icon: Database, color: "text-gray-500" },
    ]
  },
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Swing", icon: Monitor, color: "text-blue-400" },
    ]
  },
  {
    title: "AI & Tools",
    technologies: [
      { name: "Computer Vision", icon: SiTensorflow, color: "text-orange-500" },
      { name: "Generative AI", icon: SiOpenai, color: "text-green-500" },
      { name: "Git & GitHub", icon: SiGit, color: "text-orange-600" },
      { name: "AI Drones", icon: Bot, color: "text-purple-500" },
    ]
  }
];

export function TechStackSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="tech-icon p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                      data-testid={`tech-${category.title.toLowerCase()}-${techIndex}`}
                    >
                      <IconComponent className={`text-3xl ${tech.color} mb-2 mx-auto`} />
                      <p className="text-sm text-muted-foreground">{tech.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
