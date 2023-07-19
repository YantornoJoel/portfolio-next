import { FC, useReducer, useEffect, useState } from 'react';
import { ProjectContext } from './ProjectContext';
import { projectReducer } from './projectReducer';

import { IProject } from '../../interfaces';

export interface ProjectState {
	projects: IProject[];
}

const PROJECT_INITIAL_STATE: ProjectState = { projects: [] };

interface Props {
	children: JSX.Element;
}

export const ProjectProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(projectReducer, PROJECT_INITIAL_STATE);

	const [loading, setLoading] = useState(false);

	const getProjects = async () => {
		setLoading(true);
		setLoading(false);
	};

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<ProjectContext.Provider
			value={{
				...state,
				loading,
				// Metodos
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};
