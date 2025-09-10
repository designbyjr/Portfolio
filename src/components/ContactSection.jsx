import { Linkedin, Mail, AtSign } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact <span className="text-primary">Me</span></h2>
        <p className="text-center text-muted-foreground mb-12 mx-auto">
          I would love to hear from you! Whether you have a question, a project idea, <br />or just want to get a quote, feel free to reach out.
        </p>
        <div className="">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{""} Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 mt-3">
                        <Mail className="h-6 w-6 text-primary"/>
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <p>one4allplugin<AtSign className="inline" size={18} />gmail.com</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 mt-3">
                        <Linkedin className="h-6 w-6 text-primary"/>
                    </div>
                    <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/jamie-gordon-dev/" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};