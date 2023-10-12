import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { buttonVariants } from '../../ui/Button/button';

const ActionButton = () => {
    return (
        <Link
            className={buttonVariants({
                size: 'lg',
                className: 'mt-5',
            })}
            href="/dashboard"
            target="_blank"
        >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
    );
};

export default ActionButton;
