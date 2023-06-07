import { Shows } from '../types/app';
import Badge from './ui/badge';
import Button from './ui/button';
import RatingBar from './ui/rating';

function ShowCard(props: { data: Shows }) {
	const show = props.data.show;
	return (
		<div className="border rounded-md shadow-lg p-4 mx-auto bg-white flex flex-col justify-between gap-2">
			<div className="relative w-full">
				<img className="relative" src={show.image.medium}></img>
				<div className="mt-4">
					{show.rating.average && <RatingBar rating={show.rating.average} />}
				</div>
			</div>
			<div className="flex flex-col justify-between gap-4">
				<div className="flex justify-between">
					<h2 className="font-bold text-lg">{show.name}</h2>
					<span>{show.runtime}min</span>
				</div>
				<div className="flex gap-1 flex-wrap">
					<Badge name={show.language} />
					{show.genres.map((genre, idx) => (
						<Badge key={`sdfa${idx}genre`} name={genre} />
					))}
				</div>
				<Button
					name="More Info"
					path={`/show/${show.id}`}
					type="primary"
					url={show._links.self.href}
				/>
			</div>
		</div>
	);
}

export default ShowCard;
