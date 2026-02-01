import { Section } from './Section';
import { JsonDisplay } from './JsonDisplay';

export const Experience = () => {
    const workHistory = [
        {
            role: "AI Intern",
            company: "AI Wallah",
            period: "June 2025 - July 2025",
            type: "Remote",
            highlights: [
                "Engineered production-grade GenAI Chatbot with PDF summarization (90%+ accuracy).",
                "Architected AI Weather App using FastAPI & Real-time APIs.",
                "Implemented RAG pipelines reducing hallucinations by 40%."
            ]
        }
    ];

    return (
        <Section id="experience" className="max-w-5xl mx-auto">
            <div className="mb-8 pl-4 border-l-4 border-editor-function">
                <span className="text-editor-comment block text-sm">// Professional Journey</span>
                <h2 className="text-2xl font-bold text-white">
                    <span className="text-editor-keyword">await </span>
                    <span className="text-editor-function">getExperience</span>
                    <span className="text-editor-fg">()</span>
                </h2>
            </div>

            <div className="space-y-8">
                {workHistory.map((job, index) => (
                    <div key={index} className="bg-editor-bg border border-editor-line p-6 rounded relative">
                        <div className="absolute -left-3 top-6 w-6 h-6 bg-editor-bg border border-editor-line rotate-45" />
                        <JsonDisplay data={job} />
                    </div>
                ))}
            </div>
        </Section>
    );
};
