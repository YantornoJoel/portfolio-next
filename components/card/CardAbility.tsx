import { FC } from 'react';
import Image from 'next/image';

import { IAbility } from '../../interfaces';

export const CardAbility: FC<IAbility> = ({ name, imageUrl }) => {
	return (
		<li className='list-none flex flex-col gap-4 justify-center items-center p-4 rounded-lg bg-twitch-light/50 hover:-translate-y-4 hover:cursor-pointer transition-transform duration-300 ease-in-out'>
			<figure>
				<Image
					priority
					src={imageUrl}
					width={50}
					height={50}
					alt={name}
					className='w-[50px] h-[50px]'
				/>
			</figure>
			<div className='text-step--1 text-center'>
				<p className='capitalize font-semibold '>{name}</p>
			</div>
		</li>
	);
};
