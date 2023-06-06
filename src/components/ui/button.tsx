import { Link } from 'react-router-dom';

function Button(props: {
	name: string;
	url: string;
	type: 'primary' | 'secondary';
}) {
	const { name, url, type } = props;

	return (
		<Link
			className={`${
				type === 'primary'
					? 'bg-blue-600 text-white text-lg'
					: 'bg-slate-200 text-black'
			} px-6 py-3 rounded-md block w-fit shadow-md hover:shadow-lg hover:opacity-90`}
			to={url}
		>
			{name}
		</Link>
	);
}

export default Button;
