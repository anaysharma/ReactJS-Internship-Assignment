import { useLocalStorage } from '../hooks/useLocalStorage';
import { formDataState } from './bookForm';
function Bookings() {
	const [data, setData] = useLocalStorage([]);

	const deleteShow = (id: number | null) => {
		const newData = data.filter((item: formDataState) => item.showId !== id);
		setData(newData);
	};

	return (
		<div className="container p-6 flex flex-col gap-4 mt-14">
			{data.length === 0 ? (
				<div>no booked items</div>
			) : (
				data.map((item: formDataState) => (
					<div
						key={`asfdsdf ${item.showId} asdf sdf`}
						className="p-2 px-4 shadow-md rounded-md border bg-white flex justify-between"
					>
						<div className="flex gap-4">
							<h3 className="font-bold">{item.showName}</h3>
							<span>{item.showId}</span>
						</div>
						<p>{item.note}</p>
						<button
							className="px-4 py-2 bg-red-600 text-white rounded"
							onClick={() => deleteShow(item.showId)}
						>
							Delete
						</button>
					</div>
				))
			)}
		</div>
	);
}

export default Bookings;
