import { Shows } from '../types/app';
import RatingBar from './ui/rating';

function ShowCard(props: { data: Shows }) {
	const show = props.data.show;
	return (
		<div className="border rounded-md">
			<div>
				<img src={show.image.medium}></img>
				<div>
					<span>{show.premiered.toString()}</span>
					{show.rating.average && <RatingBar rating={show.rating.average} />}
				</div>
			</div>
			<div>
				<div>
					<h2>{show.name}</h2>
					<span>{show.runtime}</span>
				</div>
			</div>
		</div>
	);
}

export default ShowCard;
