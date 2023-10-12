import ImageWrapper from '@/components/wrapper/ImageWrapper';

import Header from './header';
import ListElement from './listElement';

const FeaturesSection = () => {
    return (
        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
            <Header />
            <ol className="my-8 space-y-4 pt-8 md:mx-8 md:flex md:space-x-12 md:space-y-0">
                <ListElement
                    stepNum="Step 1"
                    stepTitle="Sign up for an account"
                    stepDescription="Either starting out with a free plan or choose our"
                    stepLink={true}
                    stepLinkHref="/pricing"
                    stepLinkText="pro plan"
                />
                <ListElement
                    stepNum="Step 2"
                    stepTitle="Upload your PDF file"
                    stepDescription="We'll process your file and make it ready for
                            you to chat with."
                    stepLink={false}
                />
                <ListElement
                    stepNum="Step 3"
                    stepTitle="Start asking questions"
                    stepDescription="It's that simple. Try out Quill today - it
                            really takes less than a minute."
                    stepLink={false}
                />
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
