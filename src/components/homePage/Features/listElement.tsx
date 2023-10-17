import Link from 'next/link';

interface ListElementProps {
    stepNum: string;
    stepTitle: string;
    stepDescription: string;
    stepLink?: boolean;
    stepLinkHref?: string;
    stepLinkText?: string;
}

const ListElement = ({
    stepNum,
    stepTitle,
    stepDescription,
    stepLink,
    stepLinkHref = '',
    stepLinkText,
}: ListElementProps) => {
    return (
        <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                    {stepNum}
                </span>
                <span className="text-xl font-semibold">{stepTitle}</span>
                <span className="mt-2 text-zinc-700">
                    {stepDescription}{' '}
                    {stepLink && stepLinkHref ? (
                        <Link
                            href={stepLinkHref}
                            className="text-blue-700 underline underline-offset-2"
                        >
                            {stepLinkText}
                        </Link>
                    ) : null}
                </span>
            </div>
        </li>
    );
};

export default ListElement;
