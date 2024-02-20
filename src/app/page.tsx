import Header from './components/header/Header';

import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./components/header/Header'), {
	ssr: false,
});

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<DynamicHeader />
		</main>
	);
}
