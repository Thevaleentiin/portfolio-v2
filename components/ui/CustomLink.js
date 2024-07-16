// components/ui/CustomLink.js
import Link from 'next/link';

const CustomLink = ({ href, children, className }) => {
    return (
        <Link href={href} passHref className={className}>
            {children}
        </Link>                 
    );
};

export default CustomLink;
