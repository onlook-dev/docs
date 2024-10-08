import Link from 'next/link';
import { Link2Icon } from '@radix-ui/react-icons';
import '@/styles/globals.css';

const LinkedHeader = ({ title, link }: { title: string; link: string }) => {
    return (
        <div className="flex items-center group relative">
            <Link
                href={link as string}
                className="absolute left-[-24px] mr-10 invisible group-hover:visible transition-opacity duration-300"
            >
                <Link2Icon />
            </Link>
            <h2 className="flex-shrink-0 w-[fit-content] h-[fit-content] text-[20px] text-[#000000] font-medium block">
                {title}
            </h2>
        </div>
    );
};

export default LinkedHeader;
