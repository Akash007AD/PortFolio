import React from 'react';

interface JsonDisplayProps {
    data: any;
    name?: string;
    isString?: boolean;
}

export const JsonDisplay: React.FC<JsonDisplayProps> = ({ data, name }) => {
    const renderValue = (value: any): JSX.Element => {
        if (typeof value === 'string') {
            return <span className="text-editor-string">"{value}"</span>;
        }
        if (typeof value === 'number') {
            return <span className="text-editor-number">{value}</span>;
        }
        if (Array.isArray(value)) {
            return (
                <span>
                    <span className="text-editor-bracket">[</span>
                    <div className="pl-6 flex flex-col">
                        {value.map((item, index) => (
                            <span key={index}>
                                {renderValue(item)}
                                {index < value.length - 1 && <span className="text-editor-fg">,</span>}
                            </span>
                        ))}
                    </div>
                    <span className="text-editor-bracket">]</span>
                </span>
            );
        }
        if (typeof value === 'object' && value !== null) {
            return (
                <span>
                    <span className="text-editor-bracket">{'{'}</span>
                    <div className="pl-6 flex flex-col">
                        {Object.entries(value).map(([key, val], index, arr) => (
                            <span key={key}>
                                <span className="text-editor-key">"{key}"</span>
                                <span className="text-editor-fg">: </span>
                                {renderValue(val)}
                                {index < arr.length - 1 && <span className="text-editor-fg">,</span>}
                            </span>
                        ))}
                    </div>
                    <span className="text-editor-bracket">{'}'}</span>
                </span>
            );
        }
        return <span className="text-editor-keyword">{String(value)}</span>;
    };

    return (
        <div className="font-mono text-sm md:text-base leading-relaxed">
            {name && (
                <span>
                    <span className="text-editor-keyword">const </span>
                    <span className="text-editor-function">{name} </span>
                    <span className="text-editor-fg">= </span>
                </span>
            )}
            {renderValue(data)}
            {name && <span className="text-editor-fg">;</span>}
        </div>
    );
};
