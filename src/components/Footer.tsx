export const Footer = () => {
    return (
        <footer className="bg-editor-bg py-8 border-t border-editor-line mt-20">
            <div className="max-w-7xl mx-auto px-6 text-center font-mono text-sm">
                <p className="text-editor-comment">
                    {`/* © ${new Date().getFullYear()} Akash Debnath. All systems operational. */`}
                </p>
                <div className="flex justify-center gap-4 mt-2 text-xs text-editor-fg/50">
                    <span>UTF-8</span>
                    <span>TypeScript</span>
                    <span>React</span>
                    <span>Ln 1, Col 1</span>
                </div>
            </div>
        </footer>
    );
};
