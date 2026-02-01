import { useState, useRef } from 'react';
import { Section } from './Section';
import emailjs from '@emailjs/browser';
import { Send, Terminal } from 'lucide-react';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // NOTE: Replace with actual EmailJS keys
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
        setStatus('sending');

        if (SERVICE_ID === 'YOUR_SERVICE_ID') {
            setTimeout(() => setStatus('success'), 2000);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                form.current?.reset();
            }, (error) => {
                console.error(error.text);
                setStatus('error');
            });
    };

    return (
        <Section id="contact" className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 border-b border-editor-line pb-2">
                <Terminal size={18} className="text-editor-keyword" />
                <span className="text-editor-fg">PROBLEMS</span>
                <span className="text-editor-fg">OUTPUT</span>
                <span className="text-editor-fg">DEBUG CONSOLE</span>
                <span className="text-white border-b-2 border-editor-key px-2">TERMINAL</span>
            </div>

            <div className="bg-editor-bg border border-editor-line p-6 font-mono text-sm relative">
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div className="text-editor-comment">// Fill out the payload to send a request</div>

                    <div className="flex flex-col md:flex-row gap-1">
                        <span className="text-editor-keyword">const </span>
                        <span className="text-editor-function">messagePayload </span>
                        <span className="text-editor-fg">= </span>
                        <span className="text-editor-bracket">{'{'}</span>
                    </div>

                    <div className="pl-6 space-y-4 border-l border-editor-line ml-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <label className="text-editor-key w-24">"sender":</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="bg-transparent border-b border-editor-line focus:border-editor-string outline-none text-editor-string w-full md:w-64 placeholder-editor-line"
                                placeholder='"Your Name"'
                            />
                            <span className="text-editor-fg">,</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <label className="text-editor-key w-24">"email":</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="bg-transparent border-b border-editor-line focus:border-editor-string outline-none text-editor-string w-full md:w-64 placeholder-editor-line"
                                placeholder='"your@email.com"'
                            />
                            <span className="text-editor-fg">,</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-editor-key">"body":</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                className="bg-[#2d2d2d] border border-editor-line rounded p-2 text-editor-string focus:border-editor-key outline-none resize-none w-full"
                                placeholder='"Write your message here..."'
                            />
                        </div>
                    </div>

                    <div>
                        <span className="text-editor-bracket">{'}'}</span><span className="text-editor-fg">;</span>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`
                                flex items-center gap-2 px-6 py-2 text-white font-medium transition-all
                                ${status === 'success' ? 'bg-green-600' : 'bg-editor-function hover:bg-yellow-600'}
                            `}
                        >
                            {status === 'idle' && <><span className="text-xs">▶</span> Run Request</>}
                            {status === 'sending' && <>Compiling...</>}
                            {status === 'success' && <>200 OK</>}
                            {status === 'error' && <>500 Error</>}
                        </button>
                    </div>
                </form>
            </div>
        </Section>
    );
};
