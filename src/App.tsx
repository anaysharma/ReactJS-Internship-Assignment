import { useEffect, useState } from 'react';
import { Shows } from './types/app';
import ShowCard from './components/showCard';

function App() {
	const [shows, setShows] = useState<Shows[]>([]);

	useEffect(() => {
		fetch('https://api.tvmaze.com/search/shows?q=all')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				setShows(data);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<h1 className="">All shows</h1>
			<div>
				{shows.map((item) => (
					<ShowCard key={item.show.id} data={item} />
				))}
			</div>
		</>
	);
}

export default App;
