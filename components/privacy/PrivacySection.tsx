import LegalSection from '@/components/legalPages/legalContentWrapper';
import PolicyContent from './PolicyContent';
import PrivacyPolicyHeader from '@/components/legalPages/legalHeader';

const PrivacySection = () => {
	return (
		<LegalSection>
			<PrivacyPolicyHeader
				hankenText='Privacy'
				libreText='Policy'
				date='September 26, 2025'
			/>
			<PolicyContent />
		</LegalSection>
	);
};

export default PrivacySection;
