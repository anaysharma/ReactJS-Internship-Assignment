import { FormEventHandler, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShowTypes } from '../types/showDetails';
import { useLocalStorage } from '../hooks/useLocalStorage';

type formDataState = {
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
				<h2 className="text-3xl font-bold">Book your show</h2>
				<form className="todo" onSubmit={handleFormSubmit}>
					<div className="wrapper">
						<label htmlFor="title">Show Title</label>
						<input
							type="text"
							id="title"
							value={data?.name}
							onInput={(e) => setTitle((e.target as HTMLInputElement).value)}
						/>
					</div>
					<div className="wrapper">
						<label htmlFor="note">add note</label>
						<input
							type="text"
							id="note"
							value={formData.note}
							required
							autoFocus
							onInput={(e) => setNote((e.target as HTMLInputElement).value)}
						/>
					</div>
					<div>
						<button className="btn" aria-label="Add show" type="submit">
							Submit
						</button>
						<button
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
