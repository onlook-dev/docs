'use client';

import React, { useState, useEffect } from 'react'; // Add this import statement
import { useRef } from 'react'; // Add this import statement

function HeadingList() {
    // Initialize state to hold headings
    const [headings, setHeadings] = useState<{ level: number; text: string; id: string }[]>([]); // Add id to headings

    useEffect(() => {
        const h2s = Array.from(document.querySelectorAll('h2')).map((h) => {
            const id = h.getAttribute('id') || ''; // Get the id from the heading
            console.log(`Found heading: ${h.innerText} with id: ${id}`); // Log the headings and IDs
            return {
                level: 2,
                text: h.innerText,
                id, // Include id in the heading object
            };
        });

        setHeadings([...h2s]);
    }, []);

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        console.log(`Scrolling to heading with id: ${id}`); // Log the ID being scrolled to
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the heading
        } else {
            console.error(`Element with id: ${id} not found`); // Log if the element is not found
        }
    };

    return (
        <div className="w-[fit-content] h-[fit-content] p-[12px] mt-[50px] flex flex-col gap-2">
            <p className="h-[fit-content] w-[fit-content] uppercase text-[12px]">Sections</p>
            <ul className="text-gray-500 text-[14px] flex flex-col gap-1">
                {headings.map((heading, index) => (
                    <li 
                        key={index} 
                        className={`text-h${heading.level}`} 
                        onClick={() => scrollToHeading(heading.id)} // Add onClick handler
                    >
                        {heading.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeadingList;
