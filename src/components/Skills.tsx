import { Section } from './Section';
import { JsonDisplay } from './JsonDisplay';

const skillSet = {
    languages: ["Python", "C/C++", "JavaScript", "SQL"],
    libraries: ["TensorFlow", "PyTorch", "LangChain", "HuggingFace", "React", "FastAPI"],
    tools: ["Git", "Jupyter", "Oracle DBMS", "MongoDB", "VS Code"],
    core_concepts: ["GenAI", "LLMs", "RAG", "NLP", "CV", "Prompt Engineering"]
};

export const Skills = () => {
    return (
        <Section id="skills">
            <div className="mb-12 text-center">
                <span className="text-editor-comment">// Tech Stack & Capabilities</span>
                <h2 className="text-3xl font-bold text-editor-function mt-2">
                    System.config
                </h2>
            </div>

            <div className="max-w-3xl mx-auto bg-editor-bg border border-editor-line p-8 rounded shadow-2xl">
                <div className="flex gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <JsonDisplay data={skillSet} name="skills" />
            </div>
        </Section>
    );
};
