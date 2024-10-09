'use client';

import React, { useState } from 'react'; // Add useState import
import Link from 'next/link';
import { Link2Icon } from '@radix-ui/react-icons';
import '@/styles/globals.css';

const headerStyles = {
    h1: 'text-4xl font-bold text-gray-800',
    h2: 'text-3xl font-semibold text-gray-800',
    h3: 'text-2xl font-medium text-gray-800',
    h4: 'text-xl font-medium text-gray-800',
    h5: 'text-lg font-medium text-gray-800',
    h6: 'text-base font-medium uppercase text-gray-800',
};

interface LinkedHeaderProps {
    level?: keyof typeof headerStyles;
    title: string;
    link?: string;
    className?: string;
    id?: string; // Add id prop
}

const LinkedHeader: React.FC<LinkedHeaderProps> = ({
    level = 'h2',
    title,
    link,
    className = '',
    id,
}) => {
    const [isPressed, setIsPressed] = useState(false); // Add state for pressed state

    const handleMouseDown = () => setIsPressed(true); // Set pressed state on mouse down
    const handleMouseUp = () => setIsPressed(false); // Reset pressed state on mouse up

    const HeadingTag = level as keyof JSX.IntrinsicElements;

    return (
        <Link
            href={link || '/default-url'}
            className="flex items-center group relative right-[32px] p-2 justify-start transition-opacity duration-300"
            onMouseDown={handleMouseDown} // Add mouse down event
            onMouseUp={handleMouseUp} // Add mouse up event
            onMouseLeave={handleMouseUp} // Reset on mouse leave
        >
            <Link2Icon className={`text-transparent group-hover:text-gray-500 group-hover:hover:text-gray-800 hover:text-gray-800 transition-colors duration-300 ${isPressed ? 'scale-90' : ''}`} /> {/* Add scale class based on pressed state */}

            {React.createElement(
                HeadingTag,
                {
                    className: `${headerStyles[level]} ${className} flex-shrink-0 w-[fit-content] h-[fit-content] ml-2`,
                    id: id, // Set the id on the heading
                },
                title,
            )}
        </Link>
    );
};

export default LinkedHeader;
