import Background from '@/components/ui/Background';
import ImageWrapper from '@/components/wrapper/ImageWrapper';

const PropositionSection = () => {
    return (
        <div>
            <div className="relative isolate">
                <Background firstCalc={11} secondCalc={30} />
                <ImageWrapper
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    priority={true}
                />
                <Background firstCalc={13} secondCalc={36} />
            </div>
        </div>
    );
};

export default PropositionSection;
