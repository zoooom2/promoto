import LegalSection from '@/components/legalPages/legalContentWrapper';
import LegalHeader from '@/components/legalPages/legalHeader';
import TermsAndConditionsContent from './T&CContent';

const TermsSection = () => {
	return (
		<LegalSection>
			<LegalHeader
				hankenText='Terms &'
				libreText='Conditions'
				date='September 26, 2025'
			/>
			<TermsAndConditionsContent />
		</LegalSection>
	);
};

export default TermsSection;
