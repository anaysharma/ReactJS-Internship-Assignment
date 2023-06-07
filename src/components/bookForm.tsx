import { FormEventHandler, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShowTypes } from '../types/showDetails';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type formDataState = {
	showName: string;
	note: string;
	showId: number | null;
};

function BookForm() {
	const location = useLocation();
	const navigate = useNavigate();
	const { url } = location.state;
	const [data, setData] = useState<ShowTypes>();
	const [localData, setLocalData] = useLocalStorage([]);
	const [formData, setFormData] = useState({
		showName: '',
		note: 'watch later',
		showId: null,
	});

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((data) => {
				setData(data);
				setFormData({
					...formData,
					showName: data.name,
					showId: data.id,
				});
			})
			.catch(console.error);
	}, [url, formData]);

	const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		let isPresent = false;
		localData.forEach((item: formDataState) => {
			if (item.showId === data?.id) {
				isPresent = true;
			}
		});

		if (!isPresent) setLocalData([...localData, formData]);
		navigate(-1);
	};

	const setTitle = (val: string) => {
		setFormData({
			...formData,
			showName: val,
		});
		console.log(val);
	};

	const setNote = (val: string) => {
		setFormData({
			...formData,
			note: val,
		});
	};

	return (
		<div className="absolute inset-0 grid place-items-center bg-slate-100/75">
			<div className="bg-white rounded-lg border shadow-xl p-6 w-96">
				<h2 className="text-3xl font-bold mb-5">Book your show</h2>
				<form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
					<div className="">
						<label htmlFor="title">Show Title</label>
						<input
							className="p-2 border rounded w-full"
							type="text"
							id="title"
							value={formData.showName}
							onInput={(e) => setTitle((e.target as HTMLInputElement).value)}
						/>
					</div>
					<div>
						<label htmlFor="note">add note</label>
						<input
							className="p-2 border rounded w-full"
							type="text"
							id="note"
							value={formData.note}
							required
							autoFocus
							onInput={(e) => setNote((e.target as HTMLInputElement).value)}
						/>
					</div>
					<div className="flex justify-between">
						<button
							className="bg-blue-600 text-white px-4 py-2 rounded"
							aria-label="Add show"
							type="submit"
						>
							Submit
						</button>
						<button
							className="bg-slate-100 rounded px-4 py-2 border"
							onClick={() => navigate(-1)}
							arial-label="cancel"
							type="button"
						>
							cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default BookForm;
