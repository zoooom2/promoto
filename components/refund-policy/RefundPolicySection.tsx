import LegalSection from '@/components/legalPages/legalContentWrapper';
import LegalHeader from '@/components/legalPages/legalHeader';
import TermsAndConditionsContent from './RefundPolicyContent';

const RefundPolicySection = () => {
	return (
		<LegalSection>
			<LegalHeader
				hankenText='Refund'
				libreText='Policy'
				date='September 26, 2025'
			/>
			<TermsAndConditionsContent />
		</LegalSection>
	);
};

export default RefundPolicySection;
