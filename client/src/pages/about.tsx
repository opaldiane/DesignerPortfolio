import Header from "@/components/layout/header";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "User Research",
    "Interface Design", 
    "Prototyping",
    "Design Systems",
    "Figma",
    "Adobe Creative Suite",
    "Framer",
    "HTML/CSS"
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-primary">About Me</h2>
            
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I'm a UX/UI designer passionate about creating meaningful digital experiences 
                that solve real problems for real people. With a background in psychology and 
                visual design, I bring both analytical thinking and creative intuition to every project.
              </p>
              
              <p>
                My approach centers on understanding user needs through research, then translating 
                those insights into elegant, functional designs. I believe the best interfaces are 
                invisible – they simply work, allowing users to focus on what matters most to them.
              </p>
              
              <p>
                When I'm not designing, you'll find me exploring new cities, experimenting with 
                photography, or reading about cognitive psychology and human behavior.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Skills & Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-primary">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-accent w-5 h-5" />
                  <span className="text-text-primary">hello@jiwoopark.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="text-accent w-5 h-5" />
                  <a 
                    href="#" 
                    className="text-text-primary hover:text-accent transition-colors"
                  >
                    linkedin.com/in/jiwoopark
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram className="text-accent w-5 h-5" />
                  <a 
                    href="#" 
                    className="text-text-primary hover:text-accent transition-colors"
                  >
                    @jiwoopark.design
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Professional portrait" 
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-100 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-text-secondary">
              &copy; 2024 Jiwoo Park. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
