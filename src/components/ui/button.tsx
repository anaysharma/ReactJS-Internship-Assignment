import { Link } from 'react-router-dom';

function Button(props: {
	name: string;
	url: string;
	type: 'primary' | 'secondary';
}) {
	const { name, url, type } = props;

	return <Link to={url}>{name}</Link>;
}

export default Button;
