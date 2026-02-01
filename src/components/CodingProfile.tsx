import { Section } from './Section';
import { JsonDisplay } from './JsonDisplay';
import { ExternalLink, Github, Linkedin } from 'lucide-react';

export const CodingProfile = () => {
    const leetCodeStats = {
        user: "@Akash280704",
        solved: "300+",
        streak: "Eternal",
        status: "Grinding..."
    };

    const socialLinks = {
        linkedin: "linkedin.com/in/akash-debnath-410110256",
        github: "github.com/Akash007AD"
    };

    return (
        <Section id="coding-profile" className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {/* LeetCode Panel */}
                <div className="bg-editor-bg border border-editor-line p-6 rounded relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-editor-line text-xs px-2 py-1 text-editor-fg">main.lc</div>
                    <h3 className="text-editor-string font-bold mb-4 flex items-center gap-2">
                        <span className="text-editor-keyword">import</span> LeetCode
                    </h3>

                    <JsonDisplay data={leetCodeStats} name="stats" />

                    <div className="mt-6 flex flex-wrap gap-1">
                        {/* Mock Contribution Graph - Editor Style */}
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-sm ${Math.random() > 0.5 ? 'bg-editor-function/50' : 'bg-editor-line'}`}
                            />
                        ))}
                    </div>

                    <a
                        href="https://leetcode.com/u/Akash280704/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block text-xs bg-editor-selection text-white px-4 py-2 hover:bg-editor-selection/80 transition-colors"
                    >
                        View Profile
                    </a>
                </div>

                {/* Social Links Panel */}
                <div className="bg-editor-bg border border-editor-line p-6 rounded relative">
                    <span className="text-editor-comment block mb-4">// Connect with me</span>

                    <div className="space-y-4">
                        <a
                            href={`https://${socialLinks.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 border border-editor-line hover:border-editor-key transition-all group"
                        >
                            <Linkedin className="text-editor-fg group-hover:text-editor-key" />
                            <div className="font-mono text-sm">
                                <span className="text-editor-keyword">const </span>
                                <span className="text-editor-function">linkedin </span>
                                <span className="text-editor-fg">= </span>
                                <span className="text-editor-string">"{socialLinks.linkedin}"</span>
                            </div>
                        </a>

                        <a
                            href={`https://${socialLinks.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 border border-editor-line hover:border-editor-key transition-all group"
                        >
                            <Github className="text-editor-fg group-hover:text-editor-key" />
                            <div className="font-mono text-sm">
                                <span className="text-editor-keyword">const </span>
                                <span className="text-editor-function">github </span>
                                <span className="text-editor-fg">= </span>
                                <span className="text-editor-string">"{socialLinks.github}"</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};
