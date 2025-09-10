import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border flex flex-wrap justify-between items-center">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-4">&copy; {new Date().getFullYear()} Jamie Gordon. All rights reserved.</p>
        <div className="flex justify-center">
          <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors inline-flex items-center justify-center">
            <ArrowUp size={20}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;