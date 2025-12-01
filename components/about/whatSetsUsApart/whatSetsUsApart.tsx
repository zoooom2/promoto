import WhatSetsUsApartCard from './WhatSetsUsApartCard';
import WhatSetsUsApartSectionHeader from './WhatSetsUsApartSectionHeader';

const WhatSetsUsApart = () => {
	return (
		<div className='w-full flex flex-col items-center py-20 promoto-tablet:py-25 promoto-laptop:py-36 px-5 promoto-tablet:px-20 promoto-laptop:px-25 bg-promoto-dark overflow-clip content-center gap-2.5'>
			<div className='w-full flex flex-col justify-center items-center promoto-tablet:max-w-[600px] promoto-laptop:max-w-[936px] content-center gap-8 promoto-tablet:gap-12 promoto-laptop:gap-20'>
				<WhatSetsUsApartSectionHeader />
				<WhatSetsUsApartCard />
			</div>
		</div>
	);
};

export default WhatSetsUsApart;
