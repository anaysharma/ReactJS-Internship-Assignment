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
			<div className="container p-6 grid grid-cols-4 gap-4 mt-14">
				{shows.map((item) => (
					<ShowCard key={item.show.id} data={item} />
				))}
			</div>
		</>
	);
}

export default App;
