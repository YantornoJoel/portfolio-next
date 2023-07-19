import { FC } from 'react';

import { CardListAbility } from '../components';
import { IAbility } from '../interfaces';

interface Props {
	abilities: IAbility[];
}

export const ViewAbilities: FC<Props> = ({ abilities }) => {
	return (
		<section className='my-14 -z-10' id='conocimientos'>
			<article className='lg:max-w-5xl xl:max-w-6xl mx-auto'>
				<h2 className='capitalize font-semibold text-step-1 mb-10'>Conocimientos</h2>
				<div className='flex flex-col gap-10 capitalize text-step-0'>
					<div className='flex-1 z-40'>
						<CardListAbility abilities={abilities} type='Frontend' />
					</div>
					{/* <div className='flex-1 text-center'>
						<p className='mb-6'>Backend</p>
						<CardListAbility abilities={abilities} type='Backend' />
					</div>
					<div className=' flex-1 text-center'>
						<p className='mb-6'>Database</p>
						<CardListAbility abilities={abilities} type='Database' />
					</div> */}
				</div>
			</article>
		</section>
	);
};
