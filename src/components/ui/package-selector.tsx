'use client';

import React, { useState } from 'react';
import { ClipboardCopy } from 'lucide-react';

type PackageSelectorProps = {
    managers: {
        npm: string;
        yarn: string;
        bun: string;
    };
};

const PackageSelector: React.FC<PackageSelectorProps> = ({ managers }) => {
    const [selectedManager, setSelectedManager] = useState(Object.keys(managers)[0]); // Set default to the first manager

    const copyToClipboard = () => {
        try {
            const validManagers: keyof typeof managers = selectedManager as keyof typeof managers; // Type assertion
            navigator.clipboard.writeText(managers[validManagers] as 'bun' | 'npm' | 'yarn'); // Type assertion
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    };

    return (
        <div className="mx-auto bg-white rounded-sm border-[1px] overflow-hidden w-full group"> 
            <div className="p-0">
                <div className="flex justify-between items-center px-3 py-1">
                    <div className="flex space-x-2">
                        {Object.keys(managers).map((manager) => (
                            <button
                                key={manager}
                                onClick={() => setSelectedManager(manager)}
                                className={`px-0 py-0 ${
                                    selectedManager === manager
                                        ? 'text-black font-medium'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                {manager}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="p-2 text-gray-500 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-label="Copy to clipboard"
                    >
                        <ClipboardCopy size={20} />
                    </button>
                </div>
                <div className="bg-gray-100 px-3 py-4">
                    <pre className="text-sm font-mono">
                        {managers[selectedManager as keyof typeof managers]}
                    </pre>
                </div>
            </div>
        </div>
    );
};

PackageSelector.defaultProps = {
    managers: {
        npm: 'npx onlook create my-onlook-project',
        yarn: 'yarn dlx onlook create my-onlook-project',
        bun: 'bunx onlook create my-onlook-project',
    },
};

export default PackageSelector;
