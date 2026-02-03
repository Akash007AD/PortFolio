import { JsonDisplay } from './JsonDisplay';
import { Download, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/Akash Debnath_Resume.pdf';

export const Hero = () => {
    const developerProfile = {
        name: "Akash Debnath",
        title: "Data Scientist & Full Stack Developer",
        location: "Kolkata, India",
        status: "Open for Opportunities",
        technologies: ["AI/ML", "React", "Python", "Cloud"],
        contact: {
            email: "debnath2004akash@gmail.com",
            github: "github.com/Akash007AD"
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Line Numbers Effect */}
            <div className="absolute left-4 top-20 bottom-0 w-8 flex flex-col gap-1 text-editor-line text-opacity-30 text-xs font-mono select-none pointer-events-none hidden md:flex">
                {Array.from({ length: 50 }).map((_, i) => <span key={i}>{i + 1}</span>)}
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div>
                        <span className="text-editor-comment block mb-2">// Welcome to my digital workspace</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
                            <span className="text-editor-keyword">class </span>
                            <span className="text-editor-function">Akash</span>
                            <span className="text-editor-fg"> extends </span>
                            <span className="text-editor-function">Developer</span>
                        </h1>
                    </div>

                    <div className="bg-[#1e1e1e] p-6 rounded border border-editor-line shadow-2xl relative group">
                        <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs text-editor-comment">JSON</span>
                        </div>
                        <JsonDisplay data={developerProfile} name="profile" />
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={resumePdf}
                            download="Akash_Debnath_Resume.pdf"
                            className="px-6 py-3 bg-editor-selection text-white border border-editor-line hover:border-editor-key transition-all flex items-center gap-2 text-sm font-medium group"
                        >
                            <Download size={16} className="text-editor-function group-hover:text-editor-key" />
                            Download.resume()
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-transparent text-editor-fg border border-editor-line hover:border-editor-string transition-all flex items-center gap-2 text-sm font-medium group"
                        >
                            <Mail size={16} className="text-editor-string" />
                            Send.message()
                        </a>
                    </div>
                </div>

                <div className="flex justify-center relative order-first md:order-last mb-8 md:mb-0">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 border-2 border-dashed border-editor-line rounded-full animate-spin-slow opacity-20" />
                        <div className="absolute inset-4 border border-editor-line rounded-full" />
                        <img
                            src={profileImg}
                            alt="Akash Debnath"
                            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-editor-line relative z-10"
                        />
                    </div>
                    {/* floating code symbols */}
                    <div className="absolute -top-4 right-10 text-editor-keyword animate-bounce hidden md:block">{`</>`}</div>
                    <div className="absolute bottom-10 -left-6 text-editor-function animate-pulse hidden md:block">{`{}`}</div>
                </div>
            </div>
        </section>
    );
};
