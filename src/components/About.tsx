import { Section } from './Section';
import { JsonDisplay } from './JsonDisplay';

export const About = () => {
    const bioData = {
        summary: "Computer Science student bridging the gap between complex AI models and user-friendly interfaces.",
        education: [
            {
                degree: "B.Tech in Computer Science (Data Science)",
                institution: "Heritage Institute of Technology",
                period: "2023 - 2027",
                performance: "CGPA 9.37 / 10.0"
            },
            {
                level: "Higher Secondary (Class 12)",
                institution: "Habra High School",
                year: 2022,
                score: "90.2%"
            },
            {
                level: "Secondary (Class 10)",
                institution: "Habra High School",
                year: 2020,
                score: "94.84%"
            }
        ],
        interests: ["Generative AI", "Machine Learning", "Full Stack Development", "System Design"]
    };

    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div>
                        <span className="text-editor-comment block mb-2">// About Me</span>
                        <h2 className="text-3xl font-bold text-white mb-6">
                            <span className="text-editor-keyword">import </span>
                            <span className="text-editor-string">"MyStory"</span>
                        </h2>
                    </div>

                    <div className="bg-editor-bg border border-editor-line p-6 rounded shadow-lg">
                        <JsonDisplay data={bioData} name="biography" />
                    </div>
                </div>

                <div className="relative pt-8 md:pt-20">
                    <div className="border-l-2 border-editor-line pl-8 space-y-8">
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 w-5 h-5 bg-editor-bg border-2 border-editor-function rounded-full flex items-center justify-center text-[10px] text-editor-function">1</span>
                            <h3 className="text-editor-function font-bold mb-1">Focus Area</h3>
                            <p className="text-editor-fg/80 text-sm">Specializing in Data Science & AI, aiming to solve real-world problems through intelligent automation.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 w-5 h-5 bg-editor-bg border-2 border-editor-string rounded-full flex items-center justify-center text-[10px] text-editor-string">2</span>
                            <h3 className="text-editor-string font-bold mb-1">Architecture</h3>
                            <p className="text-editor-fg/80 text-sm">Building scalable, RAG-based systems that are both offline-ready and secure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
