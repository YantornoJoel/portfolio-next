import { FC } from 'react';
import Head from 'next/head';

import { Footer, NavBar } from '../ui/index';

interface Props {
	title?: string;
	children: JSX.Element | JSX.Element[];
}

const origin = typeof window !== 'undefined' ? window.location.origin : '';

const Layout: FC<Props> = ({ children, title = 'Joel Yantorno' }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='author' content='Joel Yantorno' />
				<meta
					name='description'
					content='Joel Yantorno - Sitio personal donde comparto mis conocimientos y algunos proyectos que he realizado.'
				/>
				<meta
					name='keywords'
					content='Joel Yantorno, Portafolio, Portafolio de Joel Yantorno'
				/>
				<meta property='og:title' content='Joel Yantorno' />
				<meta
					property='og:description'
					content='Joel Yantorno - Sitio personal donde comparto mis conocimientos y algunos proyectos que he realizado.'
				/>
				<meta property='og:image' content={`${origin}/imgs/coding.jpg`} />
			</Head>
			<NavBar />
			<main
				id='inicio'
				className='px-5 mx-auto font-roboto lg:px-10 lg:max-w-[1200px] xl:max-w-[1400px]'
			>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
