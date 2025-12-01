const BlogHeroSectionHeader = () => {
	return (
		<div className='w-full flex flex-col items-center content-center gap-3 promoto-tablet:gap-4 max-w-100'>
			<div className='w-full flex tracking-[-0.04em] flex-row justify-center items-center content-center gap-2 promoto-laptop:gap-4 leading-[1.2] text-[32px] promoto-tablet:text-[48px] promoto-laptop:text-[60px]'>
				<h1 className='font-mediumn font-hanken text-promoto-dark capitalize'>
					Insights &
				</h1>
				<h1 className='font-libre italic capitalize text-promoto-green'>
					ideas
				</h1>
			</div>
			<p className='font-hanken text-[16px] tracking-[-0.04em] text-center text-promoto-dark leading-[1.2] wrap-break-word text-wap whitespace-pre-wrap'>
				Explore marketing automation tips, product updates, and industry trends
				to help your business grow.
			</p>
		</div>
	);
};

export default BlogHeroSectionHeader;
