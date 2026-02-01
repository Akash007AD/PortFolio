import { Section } from './Section';
import { JsonDisplay } from './JsonDisplay';

export const Achievements = () => {
    const achievementsList = [
        {
            type: "Research Paper",
            title: "An Offline-Ready Disaster Relief System Using Hybrid Path Planning, Secure Logistics, and LoRa Communication",
            venue: "ICCTE 2025, North Bengal University",
            status: "Published Author"
        },
        {
            type: "Training Program",
            program: "Visteon Scholar Examination 2025",
            description: "Classroom to Cockpit training program by Visteon.",
            status: "Qualified"
        }
    ];

    return (
        <Section id="achievements">
            <div className="mb-8">
                <span className="text-editor-comment block mb-2">// Awards & Certifications</span>
                <h2 className="text-3xl font-bold text-white mb-6">
                    <span className="text-editor-keyword">const </span>
                    <span className="text-editor-function">achievements </span>
                    <span className="text-editor-fg">= </span>
                    <span className="text-editor-bracket">[...]</span>
                </h2>
            </div>

            <div className="grid gap-6">
                {achievementsList.map((item, index) => (
                    <div key={index} className="bg-editor-bg border border-editor-line hover:border-editor-string p-6 rounded transition-colors group">
                        <div className="flex items-start gap-4">
                            <span className="text-editor-keyword text-sm mt-1">{`0${index + 1}`}</span>
                            <div className="w-full">
                                <JsonDisplay data={item} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
