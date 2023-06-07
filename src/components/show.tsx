import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { ShowTypes } from '../types/showDetails';
import Button from './ui/button';

function Show() {
	const location = useLocation();
	const { url } = location.state;
	const [data, setData] = useState<ShowTypes>();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				setData(data);
			})
			.catch(console.error);
	}, [url]);

	return (
		<>
			<div className="container flex p-6">
				<div className="bg-white rounded-lg p-4 border max-w-full">
					<img className="h-96 rounded shadow-lg" src={data?.image.original} />
					<div className="mt-4 flex flex-col gap-2">
						<div>premiered: {data?.premiered.toString()}</div>
						<div>language: {data?.language}</div>
						<div>
							genres:{' '}
							{data?.genres.map((genre) => (
								<span key={`afghgf${genre}`} className="mr-2">
									{genre}
								</span>
							))}
						</div>
						<div>runtime: {data?.runtime}min</div>
					</div>
				</div>
				<div className="pl-6 flex-1">
					<div className="flex justify-between items-center">
						<div className="flex gap-4 items-center">
							{data?.name ? (
								<h1 className="text-5xl font-bold">{data.name}</h1>
							) : (
								'no-name'
							)}
							{data?.rating.average && (
								<span className="text-2xl bg-slate-200 px-4 rounded py-1">
									{data?.rating.average} / 10
								</span>
							)}
						</div>
						<button type="button" onClick={() => navigate(-1)}>
							✖
						</button>
					</div>
					<div>
						<div className="flex items-center gap-2 mt-4">
							<div className="py-1 px-4 rounded-full bg-blue-200 w-min text-sm">
								{data?.status}
							</div>
							<div>
								{data?.schedule.days} at {data?.schedule.time}
							</div>
						</div>
						{data?.summary && (
							<div
								className="max-w-[60ch] my-5"
								dangerouslySetInnerHTML={{ __html: data?.summary }}
							></div>
						)}
						<Button
							name="Book now"
							type="primary"
							path={`${location.pathname}/book`}
							url={url}
						/>
					</div>
					<div className="border rounded-md p-4 flex flex-col gap-2 bg-slate-50 mt-6">
						<h3 className="font-bold">Additional Information:</h3>
						{data?.network && (
							<>
								<div>Network: {data?.network.name}</div>
								<div>country: {data?.network.country.name}</div>
							</>
						)}
						<div className="mt-2">
							<a
								className="text-blue-600 bg-blue-100 rounded p-1 px-2 text-sm hover:underline"
								target="#"
								href={data?.url}
							>
								more details
							</a>
							<a
								className="text-blue-600 bg-blue-100 rounded p-1 px-2 text-sm hover:underline ml-4"
								target="#"
								href={data?.officialSite}
							>
								official site
							</a>
						</div>
					</div>
				</div>
			</div>

			<Outlet />
		</>
	);
}

export default Show;
