import CardOne from './CardOne';
import CardThree from './CardThree';
import CardTwo from './CardTwo';

const Cards = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center content-center flex-nowrap gap-5'>
			<CardOne />
			<CardTwo />
			<CardThree />
		</div>
	);
};

export default Cards;
