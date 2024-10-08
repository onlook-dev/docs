'use client';

import React, { useState, useEffect } from 'react'; // Add this import statement

function HeadingList() {
    // Initialize state to hold headings
    const [headings, setHeadings] = useState<{ level: number; text: string }[]>([]);

    useEffect(() => {
        const h2s = Array.from(document.querySelectorAll('h2')).map((h) => ({
            level: 2,
            text: h.innerText,
        }));

        setHeadings([...h2s]);
    }, []);

    return (
        <div className="w-[fit-content] h-[fit-content] p-[12px] mt-[50px] flex flex-col gap-2">
            <p className="h-[fit-content] w-[fit-content] uppercase text-[12px]">Sections</p>
            <ul className="text-gray-500 text-[14px] flex flex-col gap-1">
                {headings.map((heading, index) => (
                    <li key={index} className={`text-h${heading.level}`}>
                        {heading.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeadingList;
