import ImageWrapper from '@/components/wrapper/ImageWrapper';

import Header from './header';
import ListElement from './listElement';

import { features } from './data';

const FeaturesSection = () => {
    return (
        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
            <Header />
            <ol className="my-8 space-y-4 pt-8 md:mx-8 md:flex md:space-x-12 md:space-y-0">
                {features &&
                    features.map((step) => {
                        return (
                            <div key={step.stepNum}>
                                <ListElement
                                    stepNum={step.stepNum}
                                    stepTitle={step.stepTitle}
                                    stepDescription={step.stepDescription}
                                    stepLink={step.stepLink}
                                    stepLinkHref={step.stepLinkHref}
                                    stepLinkText={step.stepLinkText}
                                />
                            </div>
                        );
                    })}
            </ol>

            <ImageWrapper
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                width={1419}
                height={732}
                priority={false}
            />
        </div>
    );
};

export default FeaturesSection;
