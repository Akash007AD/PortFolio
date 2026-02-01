import React, { useState } from 'react';
import {
    FileJson,
    GitGraph,
    MoreVertical,
    X,
    Menu,
    ChevronRight,
    ChevronDown
} from 'lucide-react';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const files = [
        { name: 'profile.json', href: '#home', color: 'text-yellow-400' },
        { name: 'about.tsx', href: '#about', color: 'text-blue-400' },
        { name: 'skills.config', href: '#skills', color: 'text-purple-400' },
        { name: 'experience.json', href: '#experience', color: 'text-yellow-400' },
        { name: 'projects.tsx', href: '#projects', color: 'text-blue-400' },
        { name: 'achievements.log', href: '#achievements', color: 'text-gray-400' },
        { name: 'stats.py', href: '#coding-profile', color: 'text-green-400' },
        { name: 'contact.sh', href: '#contact', color: 'text-red-400' },
    ];

    return (
        <div className="flex h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono overflow-hidden selection:bg-[#264f78] selection:text-white">
            {/* Sidebar (Explorer) */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-[#252526] border-r border-[#333] transition-all duration-300 flex flex-col hidden md:flex`}>
                <div className="h-9 px-4 flex items-center justify-between text-[11px] font-bold tracking-wider text-[#bbbbbb] bg-[#252526] select-none">
                    <span>EXPLORER</span>
                    <MoreVertical size={14} className="opacity-50 hover:opacity-100 cursor-pointer" />
                </div>

                <div className="flex-1 overflow-y-auto pt-2">
                    <div className="group px-2">
                        <div className="flex items-center gap-1 text-[11px] font-bold text-[#bbbbbb] mb-1 cursor-pointer select-none">
                            <ChevronDown size={14} />
                            <span>AKASH-PORTFOLIO</span>
                        </div>

                        <div className="space-y-[1px]">
                            {files.map(file => (
                                <a
                                    key={file.name}
                                    href={file.href}
                                    className="flex items-center gap-2 px-3 py-[6px] hover:bg-[#2a2d2e] focus:bg-[#37373d] focus:text-white rounded-sm text-[13px] transition-colors group text-[#cccccc]"
                                >
                                    <span className={file.color}>
                                        <FileJson size={14} />
                                    </span>
                                    <span className="group-hover:text-white whitespace-nowrap overflow-hidden text-ellipsis">{file.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full min-w-0 bg-[#1e1e1e]">
                {/* Mobile Header */}
                <div className="md:hidden h-12 border-b border-[#333] flex items-center px-4 justify-between bg-[#252526] z-50 shadow-md">
                    <div className="flex items-center gap-3">
                        <Menu className="text-[#cccccc]" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
                        <span className="font-medium text-white text-sm">Akash Debnath</span>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-[#1e1e1e]/95 backdrop-blur-sm z-40 pt-16 px-6 md:hidden">
                        <div className="space-y-4">
                            {files.map(file => (
                                <a
                                    key={file.name}
                                    href={file.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-lg py-3 border-b border-[#333] text-[#cccccc]"
                                >
                                    <span className="mr-2 text-blue-400">#</span>
                                    {file.name}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-4 right-4 p-2 text-white"
                        >
                            <X size={24} />
                        </button>
                    </div>
                )}

                {/* Tab Bar Removed as per user request */}

                {/* Editor Area */}
                <div className="flex-1 overflow-y-auto relative scroll-smooth flex flex-col">
                    {/* Breadcrumbs */}
                    <div className="h-8 flex items-center px-4 text-xs text-[#969696] bg-[#1e1e1e] hidden md:flex sticky top-0 z-10 shadow-sm border-b border-[#333]/30">
                        <span>src</span>
                        <ChevronRight size={12} className="mx-1" />
                        <span>components</span>
                        <ChevronRight size={12} className="mx-1" />
                        <span className="text-white">portfolio.tsx</span>
                    </div>

                    {/* Content Wrapper */}
                    <div className="flex-1 flex flex-col min-h-0">
                        {/* Code Section with Line Numbers */}
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-0 w-[50px] bg-[#1e1e1e] text-right pr-4 py-4 text-[#858585] text-xs select-none hidden md:block border-r border-[#333]/30 overflow-hidden">
                                {Array.from({ length: 2000 }).map((_, i) => (
                                    <div key={i} className="leading-relaxed hover:text-[#c6c6c6] transition-colors">{i + 1}</div>
                                ))}
                            </div>
                            <div className="p-4 md:p-8 max-w-full md:pl-[66px]">
                                {children}
                            </div>
                        </div>

                        {/* Footer separate from code lines */}
                        <Footer />
                    </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-[#007acc] text-white text-[11px] flex items-center px-3 justify-between select-none hidden md:flex">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer"><GitGraph size={11} /> main*</div>
                        <div className="hover:bg-white/20 px-1 rounded cursor-pointer">0 errors, 0 warnings</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hover:bg-white/20 px-1 rounded cursor-pointer"><span className="text-[10px] mr-1">🔔</span>Prettier</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
