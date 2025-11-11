import CardOne from './CardOne';
import CardThree from './CardThree';
import CardTwo from './CardTwo';

const Cards = () => {
	return (
		<div
			id='hero-c3'
			className='w-full flex md:grid promoto-laptop:flex md:grid-cols-2 min-w-[50px] flex-col promoto-laptop:flex-row justify-center items-center content-center flex-nowrap gap-5 promoto-laptop:gap-6'
		>
			<CardOne />
			<CardTwo />
			<CardThree />
		</div>
	);
};

export default Cards;
