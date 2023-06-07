import { Link } from 'react-router-dom';

function Button(props: {
	name: string;
	path: string;
	type: 'primary' | 'secondary';
	url?: string;
}) {
	const { name, path, type, url } = props;

	return (
		<Link
			className={`${
				type === 'primary'
					? 'bg-blue-600 text-white'
					: 'bg-slate-200 text-black'
			} px-6 py-3 rounded-md block w-fit shadow-md hover:shadow-lg hover:opacity-90`}
			to={path}
			state={{ url }}
		>
			{name}
		</Link>
	);
}

export default Button;
