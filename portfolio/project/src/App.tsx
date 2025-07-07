import React, { useState, useEffect } from 'react';
import { Code, Database, Terminal, Cpu, Zap, CheckCircle, Linkedin, Mail, Phone } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'projets', 'contact'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    { title: "Minishell", description: "Reproduction du shell bash", icon: <Terminal className="w-6 h-6" />, tags: ["C", "Unix", "Shell"] },
    { title: "42sh", description: "Shell avancé", icon: <Code className="w-6 h-6" />, tags: ["C", "Unix", "Advanced Shell"] },
    { title: "Corewar", description: "Jeu de combat assembleur", icon: <Cpu className="w-6 h-6" />, tags: ["C", "Assembly", "VM"] },
    { title: "Tardis", description: "Projet de data analyse et visualisation en Python.", icon: <Database className="w-6 h-6" />, tags: ["C", "File System", "Backup"] },
    { title: "Pipeto", description: "Projet de cybersécurité sur la communication entre processus en C.", icon: <Zap className="w-6 h-6" />, tags: ["C", "IPC", "Pipes"] },
    { title: "Epytodo", description: "Application de gestion de tâches avec API REST et interface web", icon: <CheckCircle className="w-6 h-6" />, tags: ["JavaScript", "Node.js", "API"] },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold animate-bounce text-purple-600">Vincent</h1>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'accueil', label: 'Accueil' },
              { id: 'projets', label: 'Projets' },
              { id: 'contact', label: 'Contactez-moi' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === section.id ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="accueil" className="pt-20 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, je suis <span className="text-purple-600">Vincent</span></h1>
        <p className="text-xl md:text-2xl mb-8">Étudiant développeur à Epitech Réunion</p>
        <button
          onClick={() => scrollToSection('projets')}
          className="px-8 py-4 rounded-full text-lg font-medium bg-purple-600 hover:bg-purple-700 text-white"
        >
          Voir mes projets
        </button>
      </section>

      <section id="projets" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Mes Projets</h2>
        <p className="text-xl mb-16">Projets réalisés durant ma première année à Epitech</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-xl p-6 bg-white border hover:border-purple-300 shadow-lg hover:shadow-xl transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-purple-100 text-purple-600">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 rounded-full text-xs bg-purple-50 text-purple-600 border">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-moi</h2>
        <p className="text-xl mb-16">N'hésitez pas à me contacter pour discuter de projets ou opportunités</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="mailto:vincent1.begue@epitech.eu" className="flex flex-col items-center p-4 rounded-lg bg-white border hover:border-purple-300 hover:shadow-md">
            <Mail className="w-5 h-5 text-purple-600 mb-2" />
            <p className="font-medium">Email</p>
            <p className="text-sm">vincent1.begue@epitech.eu</p>
          </a>
          <a href="https://www.linkedin.com/in/vincent-begue/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-lg bg-white border hover:border-purple-300 hover:shadow-md">
            <Linkedin className="w-5 h-5 text-purple-600 mb-2" />
            <p className="font-medium">LinkedIn</p>
            <p className="text-sm">Vincent</p>
          </a>
          <a href="tel:+33765554066" className="flex flex-col items-center p-4 rounded-lg bg-white border hover:border-purple-300 hover:shadow-md">
            <Phone className="w-5 h-5 text-purple-600 mb-2" />
            <p className="font-medium">Téléphone</p>
            <p className="text-sm">+33 765 55 40 66</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
