import {
	enterpriseColumnsData,
	featuresColumnsData,
	freeColumnsData,
	mobileTableData,
	professionalColumnsData,
} from '@/lib/constants';
import LargeScreenPricingColumns from './LargeScreenPricingColumns';
import MobileScreenTable from './MobileScreenTable';

const PricingComparisonTable = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center overflow-clip content-center gap-2.5'>
			<div className='promoto-tablet:hidden flex flex-col justify-center items-center overflow-clip content-center w-full'>
				<MobileScreenTable data={mobileTableData} />
			</div>
			<div className='max-promoto-tablet:hidden w-full flex justify-center items-start promoto-laptop:items-center overflow-clip content-start promoto-laptop:content-center promoto-laptop:gap-6'>
				<LargeScreenPricingColumns
					data={featuresColumnsData}
					orientation='left'
				/>
				<LargeScreenPricingColumns
					data={freeColumnsData}
					orientation='center'
				/>
				<LargeScreenPricingColumns
					data={professionalColumnsData}
					orientation='center'
					customBg={true}
				/>
				<LargeScreenPricingColumns
					data={enterpriseColumnsData}
					orientation='center'
				/>
			</div>
		</div>
	);
};

export default PricingComparisonTable;
