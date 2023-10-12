import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MaxWidhtWrapperProps {
    className?: string;
    children: ReactNode;
}

const MaxWidhtWrapper = ({ className, children }: MaxWidhtWrapperProps) => {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
                className
            )}
        >
            {children}
        </div>
    );
};

export default MaxWidhtWrapper;
