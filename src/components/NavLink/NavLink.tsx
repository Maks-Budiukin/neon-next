import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className, activeClassName = 'bg-amber-400/35 text-amber-400' }) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    const baseClasses = 'block min-w-24 py-4 px-3 text-amber-200 hover:text-amber-400 text-center duration-200';

    return (
        <Link href={href} className={clsx(baseClasses, isActive && activeClassName, className)}>{children}</Link>
    )
}

export default NavLink