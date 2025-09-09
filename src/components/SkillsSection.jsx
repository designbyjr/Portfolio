
{/* Level is out of 100 */}
const Skills = [
    {
        name: 'HTML 5',
        icon: 'HTML5.png',
        level: 99,
        category: 'Frontend'
    },
    {
        name: 'CSS 3',
        icon: 'css3.svg',
        level: 90,
        category: 'Frontend'
    },
    {
        name: 'Bootstrap',
        icon: 'bootstrap.svg',
        level: 90,
        category: 'Frontend'
    },
    {
        name: 'TailwindCSS',
        icon: 'tailwind.svg',
        color: 'text-cyan-900',
        level: 50,
        category: 'Frontend'
    },                   
    {
        name: 'JavaScript',
        icon: 'javascript.svg',
        level: 90,
        category: 'Frontend'
    },
    {
        name: 'PHP',
        icon: 'PHP.svg',
        level: 100,
        category: 'Backend'
    },
    {
        name: 'MySQL',
        icon: 'mysql.svg',
        level: 95,
        category: 'Backend'     
    },
    {
        name: 'PostgreSQL',
        icon: 'postgresql.svg',
        level: 40,
        category: 'Backend'
    },
    {
        name: 'Laravel',
        icon: 'laravel.svg',
        level: 95,
        category: 'Backend'
    },
    {
        name: 'Symfony',
        icon: 'symfony.svg',
        level: 65,
        category: 'Backend'
    },
    {
        name: 'React',
        icon: 'react.svg',
        level: 55,
        category: 'Frontend'
    },
    {
        name: 'AWS',
        icon: 'AWS.svg',
        level: 90,
        category: 'Tools'
    },
    {
        name: 'Azure',
        icon: 'azure.svg',
        level: 60,
        category: 'Tools'
    },
    {
        name: 'Docker',
        icon: 'docker.svg',
        level: 95,
        category: 'Tools'
    },
    {
        name: 'Git',
        icon: 'git.svg',    
        level: 95,
        category: 'Tools'
    },
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
                </h2>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Skills.map((skill) => (
                <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-center mb-4">
                        <img src={`/assets/images/${skill.icon}`} alt={skill.name} className="w-12 h-12 mr-2 object-contain" />
                        <span className="text-lg font-bold text-black">{skill.name}</span>
                    </div>
                    <span className="text-secondary">{skill.level}%</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%`}}></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};