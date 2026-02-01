import { Section } from './Section';
import { JsonDisplay } from './JsonDisplay';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
    const projectList = [
        {
            id: 1,
            name: "GenAI Medical Chatbot",
            stack: ["LangChain", "Python", "Vector DB"],
            metrics: { accuracy: "92%", docsProcessed: "10k+" },
            description: "HIPAA-compliant diagnostic assistant.",
            github: "https://github.com/Akash007AD/GenAI-Medical-Chatbot"
        },
        {
            id: 2,
            name: "YouTube Chatbot",
            stack: ["OpenAI API", "React", "ChromaDB"],
            features: ["Video Transcript Extraction", "Q&A"],
            description: "Chat with video content.",
            github: "https://github.com/Akash007AD/Youtube-Chatbot"
        },
        {
            id: 3,
            name: "Retinal Disease Predictor",
            stack: ["PyTorch", "ResNet50", "CV"],
            metrics: { accuracy: "94%" },
            description: "Early diagnosis using Deep CNN.",
            github: "https://github.com/Akash007AD/Retinal-Disease-Predictor"
        }
    ];

    return (
        <Section id="projects">
            <div className="mb-12">
                <span className="text-editor-comment block mb-2">// Selected Works</span>
                <h2 className="text-3xl font-bold text-white mb-6">
                    <span className="text-editor-keyword">const </span>
                    <span className="text-editor-function">projects </span>
                    <span className="text-editor-fg">= </span>
                    <span className="text-editor-bracket">[...]</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="group relative p-6 bg-editor-bg border border-editor-line hover:border-editor-key rounded transition-all duration-300"
                    >
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-editor-fg hover:text-white"><Github size={18} /></a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-editor-fg hover:text-white"><ExternalLink size={18} /></a>
                        </div>

                        <div className="text-sm overflow-hidden">
                            <JsonDisplay data={project} />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
