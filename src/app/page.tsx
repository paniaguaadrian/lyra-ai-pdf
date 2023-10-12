import MaxWidhtWrapper from '@/components/wrapper/MaxWidhtWrapper';

import ActionButton from '@/components/homePage/ActionButton';
import Header from '@/components/homePage/Header';
import PropositionSection from '@/components/homePage/Proposition';

import FeaturesSection from '@/components/homePage/Features';

export default function Home() {
    return (
        <>
            <MaxWidhtWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
                <Header />
                <ActionButton />
            </MaxWidhtWrapper>
            <PropositionSection />
            <FeaturesSection />
        </>
    );
}
