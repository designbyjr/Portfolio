
const projects = [
  { 
    id: 1,
    title: 'Pokemon API',
    description: 'A RESTful API for Pokemon data, built with Laravel.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JSON', 'Api'],
    link: 'https://github.com/designbyjr/pokemon',
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'A personal portfolio website, built with React.',
    technologies: ['React','Vite','Tailwind CSS'],
    link: 'https://github.com/designbyjr/portfolio',
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-4 relative bg-background text-foreground">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">Featured <span className="text-primary">Projects</span></h2>
        <p className="text-center text-muted-foreground mb-12 mx-w-2xl mx-auto">
          Check out some of my recent projects in the last 2 years.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <h6 className="text-lg font-bold mb-2">{project.title}</h6>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <a target="_blank" href={project.link} className="text-primary">View Project</a>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, key) => (
                    <span key={key} className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;