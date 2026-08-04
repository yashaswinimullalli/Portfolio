"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import portfolioData from "../../data/portfolio.json";
import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import FadeIn from "../../components/FadeIn";
import CaseStudyModal from "../../components/Home/CaseStudyModal";

const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.82 20H15.4l-4.52-6.52L8.2 17.2V20H5.32V4h2.88v8.28l6.8-8.28h3.4l-7.92 9.24L18.82 20z" />
  </svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="mx-auto pt-12">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-2xl">
            A collection of projects I&apos;ve built across full-stack development, AI/ML, and data analysis.
          </p>
        </FadeIn>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {portfolioData.projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="liquid-glass p-6 flex flex-col h-full group">
                {project.image && (
                  <div className="w-full h-40 overflow-hidden rounded-2xl mb-6 border border-[var(--glass-border)] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h4 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h4>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="glass-pill text-[9px] uppercase tracking-wider text-[var(--accent-tertiary)] bg-[var(--glass-border)] px-2.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex-grow mb-4">
                  <ul className="space-y-2.5 text-[var(--text-secondary)] mb-6">
                    {project.points.slice(0, 2).map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] shrink-0" />
                        <span className="text-xs leading-relaxed line-clamp-3">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.caseStudy && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors flex items-center gap-1.5 mb-6 cursor-pointer self-start py-1"
                  >
                    <BookOpen size={14} /> Read Case Study <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}

                <div className="flex gap-4 mt-auto border-t border-[var(--glass-border)] pt-4">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs hover:text-[var(--accent-primary)] transition-colors font-medium">
                      <FaGithub size={15} /> Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs hover:text-[var(--accent-primary)] transition-colors font-medium">
                      <ExternalLink size={15} /> Demo
                    </a>
                  )}
                  {project.links.kaggle && (
                    <a href={project.links.kaggle} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[var(--accent-tertiary)] hover:text-white transition-colors font-medium">
                      <KaggleIcon /> Kaggle
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
