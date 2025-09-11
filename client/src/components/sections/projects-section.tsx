import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  colors: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Data Analyser",
    description: "A Python-based data analysis tool designed to process, clean, and visualize datasets. It helps uncover insights, trends, and patterns using data preprocessing, exploratory data analysis, and graphical visualizations.",
    image: "https://t4.ftcdn.net/jpg/16/00/32/77/240_F_1600327738_kvVIPtyuGr1p9KeCqC8VmB3VaAvb3I7c.jpg",
    technologies: ["Python", "Pandas", "Matplotlib", "NumPy"],
    colors: ["primary", "secondary", "accent", "primary"],
    githubUrl: "https://github.com/divyasharanya/",
    demoUrl: "https://github.com/divyasharanya/data_analyser"
  },


  {
    title: "StudyHub Web Application",
    description: "Modern platform with PDF viewer/manager, user authentication system, and dark/light mode toggle. Built with responsive design and intuitive user interface.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "JavaScript", "CSS", "PDF.js"],
    colors: ["primary", "secondary", "accent", "primary"],
    githubUrl: "https://github.com/divyasharanya",
    demoUrl: "https://github.com/divyasharanya/PDF-viewer"
  },
  {
    title: "Real-time Weather Application",
    description: "A real-time weather application that connects to live weather APIs to provide current conditions, forecasts, and alerts. Includes location search, recent history (local/DB), and a minimal UI designed for reliability and smooth integration with services like OpenWeatherMap or WeatherAPI..",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "PyQt6", "WebChannel", "Sockets"],
    colors: ["primary", "secondary", "accent", "primary"],
    githubUrl: "https://github.com/divyasharanya",
    demoUrl: "https://github.com/divyasharanya/weather_application-"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in backend development and AI implementation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card-hover bg-card border border-border rounded-xl overflow-hidden shadow-lg"
              data-testid={`card-project-${index}`}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`img-project-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`text-title-${index}`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-github-${index}`}
                    >
                      <SiGithub className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.demoUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`text-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs ${
                        project.colors[techIndex] === 'primary' 
                          ? 'bg-primary/20 text-primary' 
                          : project.colors[techIndex] === 'secondary'
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-accent/20 text-accent'
                      }`}
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/divyasharanya"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
            data-testid="link-all-projects"
          >
            <SiGithub className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
