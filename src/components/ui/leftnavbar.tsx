'use client';

import React from 'react';

const LeftNavBar = () => {
    // Remove Next.js router and use window.location instead
    const currentPath = window.location.pathname; // Get the current path

    return (
        <div className="flex justify-start font-semibold h-full items-start w-1/5 flex-col p-[20px] mt-[50px] pt-[20px] pb-[20px] border-r-[01px] pl-[40px] pr-[40px] gap-[8px]">
            <h6 className="w-full flex items-center uppercase h-[fit-content] text-[12px]">
                Getting Started
            </h6>
            <a
                href="/quickstart"
                className={`w-full h-[fit-content] ${currentPath === '/quickstart' ? 'font-semibold text-gray-800' : 'hover:text-gray-600 text-gray-500'} font-medium text-[16px]`}
            >
                Overview
            </a>
            <a
                href="/editor"
                className={`w-full h-[fit-content] ${currentPath === '/editor' ? 'font-semibold text-gray-800' : 'hover:text-gray-800 text-gray-500'} font-medium text-[16px]`}
            >
                Editor
            </a>
            <a
                href="/writing-to-code"
                className={`w-full h-[fit-content] ${currentPath === '/writing-to-code' ? 'font-semibold text-gray-800' : 'hover:text-gray-800 text-gray-500'} font-medium text-[16px]`}
            >
                Writing to Code
            </a>
            <h6 className="w-full flex items-center uppercase h-[fit-content] text-[12px] mt-8">
                Resources
            </h6>
            <a
                href="/contributing"
                className={`w-full h-[fit-content] ${currentPath === '/contributing' ? 'font-semibold text-gray-800' : 'hover:text-gray-800 text-gray-500'} font-medium text-[16px]`}
            >
                Contributing
            </a>
        </div>
    );
};

export default LeftNavBar;