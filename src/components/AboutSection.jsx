import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative px-4">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About <span className="text-primary">Me</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 backdrop-blur-sm bg-card/50">
          <h3 className="text-2xl font-semibold pt-2">Passionate Web Developer & Laravel Enthusiast</h3>
          <p className="text-muted-foreground text-wrap">
I am a dedicated full-stack developer with a passion for crafting visually appealing and highly functional websites. 
<br/>I hold a degree in Web Development and Design from Northumbria University at Newcastle and have experience with projects ranging from small business websites to e-commerce platforms.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white hover:bg-blue-900 border border-blue-900 transition-colors px-5 py-2 rounded-md">Contact</a>
              <a href="https://github.com/designbyjr" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white hover:bg-gray-900 border border-gray-900 transition-colors px-5 py-2 rounded-md">GitHub</a>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">Creative and functional websites using modern web technologies with PHP, MYSQL, HTML, CSS, &amp; Javascript.</p>
              </div>
            </div>
          </div>
           <div className="gradient-border p-6 card-hover bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
              <User className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Stakeholder Engagement</h4>
                <p className="text-muted-foreground">I have experience working with non technical and technical stakeholders including product teams and developers.</p>
              </div>
            </div>
          </div>
           <div className="gradient-border p-6 card-hover bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
              <Briefcase className="h-6 w-6 text-primary"/>
              </div>
               <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground">I have project managed a whole development cycle from start to finish, including scoping, budgeting, and timelines for Travel Trade group.</p>
              </div>
            </div>
          </div>
        
        </div>
      
      </div>


    </section>
  )
}

export default AboutSection