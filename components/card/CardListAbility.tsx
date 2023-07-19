import { FC } from 'react';

import { CardAbility } from './';
import { IAbility } from '../../interfaces';

interface Props {
	abilities: IAbility[];
	type: 'Frontend' | 'Backend' | 'Database';
}

export const CardListAbility: FC<Props> = ({ abilities, type }) => {
	return (
		<ul className='grid grid-cols-fit-200 gap-5'>
			{abilities
				// .filter((f) => f.type === type)
				.map((a) => (
					<CardAbility {...a} key={a.name} />
				))}
		</ul>
	);
};
